import * as THREE from 'three'; // Importing the THREE.js library

// Function to create a basic scene
export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0xffe6f2); // Set background color to a light pink
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Create a perspective camera
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

// Function to add lighting to the scene
export const addLighting = (scene: THREE.Scene) => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Create ambient light
    scene.add(ambientLight); // Add ambient light to the scene

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Create directional light
    directionalLight.position.set(1, 1, 1).normalize(); // Set light position
    scene.add(directionalLight); // Add directional light to the scene
};

// Function to create a simple box geometry
export const createBox = () => {
    const geometry = new THREE.BoxGeometry(); // Create box geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xffcce6 }); // Create material
    const cube = new THREE.Mesh(geometry, material); // Create mesh
    return cube; // Return the created cube
}; 

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const animateFrame = () => {
        requestAnimationFrame(animateFrame); // Request next frame
        renderer.render(scene, camera); // Render the scene
    };
    animateFrame(); // Start animation
}; 

export default { createScene, createCamera, createRenderer, addLighting, createBox, animate }; // Default export of utilities