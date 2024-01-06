import './style.css';
import * as THREE from 'three';

import vertexShader from './public/shaders/vectorShader.glsl';
import fragmentShader from './public/shaders/fragmentShader.glsl';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

init();


function init() {
    setupRenderer();
    setupCamera();
    setupLights();
    createCube();
    handleResize();
    animate();
}

function setupRenderer() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function setupCamera() {
    camera.position.z = 5;
}

function setupLights() {
    const directionalLight = new THREE.DirectionalLight(new THREE.Color("rgb(0, 255, 229)"), 4);
    directionalLight.position.set(0, 2, 5);
    scene.add(directionalLight);
}

function createCube() {
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.ShaderMaterial({
            vertexShader:vertexShader,
            fragmentShader:fragmentShader
            
        })
    );
    cube.name = 'cube1';
    scene.add(cube);
}

function animateCube() {
    const cube = scene.getObjectByName('cube1');

    if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
}

function handleResize() {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}

function animate() {
    
    requestAnimationFrame(animate);
    animateCube()
    renderer.render(scene, camera);
}




