import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import gsap from 'https://cdn.skypack.dev/gsap'
import vertexShader from './shaders/vertex.glsl?raw'
import fragmentShader from './shaders/fragment.glsl?raw'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl?raw'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl?raw'
import worldMap from './assets/zzz.png?url'


const canvas = document.querySelector('#bg')
const container = document.querySelector('#planet')
const scene = new THREE.Scene()
;

const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
camera.position.set(0,0,9)
camera.lookAt(0,0,0);


//Renderer
const renderer = new THREE.WebGLRenderer({
    alpha: true,
  antialias: true, 
  canvas: canvas
});
renderer.setSize(container.offsetWidth , container.offsetHeight)
renderer.setPixelRatio(window.devicePixelRatio)



const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        globeTexture: {
            value: new THREE.TextureLoader().load(worldMap)
        }
    }
}))

const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
}))

atmosphere.scale.set(1.1, 1.1, 1.1);
scene.add(atmosphere);

const group = new THREE.Group()
group.add(sphere)
scene.add(group)


addEventListener('mousemove', () => {
    mouse.x = (event.clientX /innerWidth) * 2 - 1
    mouse.y = (event.clientY /innerHeight) * 2 - 1
})

const mouse = {
    x: 0,
    y: 0
}


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.0013
  gsap.to(group.rotation, {x: mouse.y * 0.5, y: mouse.x * 0.5, duration: 2})

}
console.log("does?")
animate();




