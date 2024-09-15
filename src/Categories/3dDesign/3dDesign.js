import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './3dDesign.css';
import 'tailwindcss/tailwind.css';

const models = [
    { path: '/assets/3d/1/untitled.gltf', title: 'Donut house', description: 'A whimsical house with donut-shaped elements, perfect for fantasy settings.' },
    { path: '/assets/3d/2/untitled.gltf', title: 'Chinese castle', description: 'A traditional Chinese-style fortress, showcasing intricate architecture.' },
    { path: '/assets/3d/3/asasdasd.gltf', title: 'Spooky cyberpunk desk', description: 'A futuristic desk with eerie, neon-lit features, blending sci-fi and horror.' },
    { path: '/assets/3d/4/asasdasd.gltf', title: 'Red swamp robo', description: 'A mechanical robot with a rusted, swampy appearance, emerging from a mysterious red bog.' },
    { path: '/assets/3d/5/untitled.gltf', title: 'Snow house', description: 'A cozy cabin nestled in a snowy landscape, perfect for wintery scenes.' },
    { path: '/assets/3d/6/untitled.gltf', title: 'Simple room and angry bird', description: 'A minimalist room featuring a dynamic angry bird figure, ready for action.' }
];


const ThreedDesign = () => {
    const mountRef = useRef(null);
    const [currentModelIndex, setCurrentModelIndex] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideDirection, setSlideDirection] = useState(''); // Direction of slide ('left' or 'right')
    const [isEntering, setIsEntering] = useState(false); // To handle enter animation

    useEffect(() => {
        const currentMount = mountRef.current;

        // Create scene and camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);

        // Create renderer with alpha channel for transparency
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setClearColor(0x000000, 0);  // Transparent background
        currentMount.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight1.position.set(1, 1, 1).normalize();
        scene.add(directionalLight1);

        // Add light at the front
        const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
        frontLight.position.set(0, 0, 10); // Position in front of the model
        scene.add(frontLight);

        // Add light at the back
        const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
        backLight.position.set(0, 0, -10); // Position behind the model
        scene.add(backLight);

        // Load the model
        const loader = new GLTFLoader();
        loader.load(models[currentModelIndex].path, (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            model.position.x -= center.x;
            model.position.y -= center.y;
            model.position.z -= center.z;

            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraDistance = Math.abs(maxDim / Math.sin(fov / 2)) * 0.6;

            camera.position.z = cameraDistance;
            camera.lookAt(new THREE.Vector3(0, 0, 0));

            renderer.render(scene, camera);
        });

        // Orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = true;
        controls.enableRotate = true;
        controls.enablePan = false;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        return () => {
            currentMount.removeChild(renderer.domElement);
            controls.dispose();
        };
    }, [currentModelIndex]);

    const handleNext = () => {
        setSlideDirection('right'); // Slide current model out to the right
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
            setIsEntering(true); // New model slides in from the left
            setTimeout(() => {
                setIsTransitioning(false);
                setIsEntering(false);
            }, 500);
        }, 500); // Adjust timeout for transition duration
    };

    const handlePrev = () => {
        setSlideDirection('left'); // Slide current model out to the left
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
            setIsEntering(true); // New model slides in from the right
            setTimeout(() => {
                setIsTransitioning(false);
                setIsEntering(false);
            }, 500);
        }, 500);
    };

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    return (
        <div className="container">
            <div
                className={`model-viewer ${isTransitioning ? (slideDirection === 'left' ? 'slide-left-exit' : 'slide-right-exit') : ''} ${isEntering ? (slideDirection === 'left' ? 'slide-left-enter' : 'slide-right-enter') : ''}`}
                ref={mountRef}
            />

            <div className="thumbnail-container">
                <button className="arrow-button" onClick={handlePrev}>⟵</button>

                <span className="thumbnail-title">{models[currentModelIndex].title}</span>

                <button className="arrow-button" onClick={handleNext}>⟶</button>

                <div className="info-icon-container absolute top-5 right-10">
                    <button className="info-icon" onClick={toggleTooltip}>ℹ️</button>
                    {showTooltip && (
                        <div className="tooltip-panel">
                            {models[currentModelIndex].description}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThreedDesign;
