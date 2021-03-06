import * as THREE from "three";
import * as React from "react";
import styled from "styled-components";
import { CANVAS_ASSETS } from "../constants";
import { cursorPointer } from "../constants/imageUri";
import { imagePath } from "../utils/imagePath";

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.active {
    cursor: url(${cursorPointer}) 10 10,pointer;
  }
`;

// Utils
// Check to avoid build errors in Server-side rendering on Node server
const isSSR = typeof window === "undefined";
let isMobile;
if (!isSSR) {
  isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
}

function rule3(v, vmin, vmax, tmin, tmax) {
  let nv = Math.max(Math.min(v, vmax), vmin);
  let dv = vmax - vmin;
  let pc = (nv - vmin) / dv;
  let dt = tmax - tmin;
  let tv = tmin + pc * dt;
  return tv;
}

function setObjectDefault(obj, defaultProps) {
  toggleVisibility(obj, defaultProps.visibility);
  obj.position.set(
    defaultProps.positionX,
    defaultProps.positionY,
    defaultProps.positionZ
  );
  obj.rotation.set(
    defaultProps.rotationX,
    defaultProps.rotationY,
    defaultProps.rotationZ
  );
}

function toggleVisibility(obj, isVisible) {
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.visible = isVisible;
    }
  });
}

// Canvas Component
const Canvas = () => {
  const mount = React.useRef(null);

  React.useEffect(() => {
    let mountNode = mount.current;
    let scene,
      camera,
      aspectRatio,
      shadowLight,
      light,
      renderer,
      floor,
      cube,
      coin,
      coinTimeoutId,
      frameId;

    let HEIGHT, WIDTH, windowHalfX, windowHalfY;

    // Default props
    let fieldOfView = 60,
      nearPlane = 1,
      farPlane = 2000,
      animationDuration = 2000,
      showCoin = false,
      mousePos = { x: 0, y: 0 },
      cameraPos = {
        x: -100,
        y: 0,
        z: 600,
      };

    const coinDefaultProps = {
      visibility: false,
      positionX: 0,
      positionY: 50,
      positionZ: 0,
      rotationX: 0,
      rotationY: Math.PI,
      rotationZ: Math.PI / 2,
      textureMapIndex: 0,
    };

    const coinTextureAssets = CANVAS_ASSETS.texture.coin;

    // Mouse Over Intersection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    // let isTargetIntersected = false;

    // Init
    function init() {
      scene = new THREE.Scene();
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      aspectRatio = WIDTH / HEIGHT;

      // Camera
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );

      // Set Camera
      if (isMobile) {
        setCameraOnMobile();
      } else {
        setCamera(cameraPos.x, cameraPos.y, cameraPos.z);
      }

      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      mountNode.appendChild(renderer.domElement);
      windowHalfX = WIDTH / 2;
      windowHalfY = HEIGHT / 2;

      // Event Listener
      window.addEventListener("resize", onWindowResize, false);
      mountNode.addEventListener("mousemove", handleMouseMove, false);
      mountNode.addEventListener("click", onTargetClick, false);
    }

    function setCamera(posX, posY, posZ) {
      camera.position.set(posX, posY, posZ);
      camera.lookAt(new THREE.Vector3(posX, posY, 0));
    }

    function setCameraOnMobile() {
      if (mobileOrientation() === "portrait" && WIDTH < 768) {
        setCamera(0, -100, 800);
      } else if (mobileOrientation() === "landscape" && WIDTH <= 812) {
        camera.position.set(cameraPos.x, 0, 500);
      } else {
        setCamera(cameraPos.x, cameraPos.y, cameraPos.z);
      }
    }

    function mobileOrientation() {
      if (window.matchMedia("(orientation: portrait)").matches) {
        return "portrait";
      } else if (window.matchMedia("(orientation: landscape)").matches) {
        return "landscape";
      }
    }

    function onWindowResize() {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;
      windowHalfX = WIDTH / 2;
      windowHalfY = HEIGHT / 2;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
      if (isMobile) setCameraOnMobile();
    }

    function handleMouseMove(e) {
      if (isTargetIntersected(e, cube.cube)) {
        mountNode.classList.add("active");
      } else if (mountNode.classList.contains("active")) {
        mountNode.classList.remove("active");
      }
    }

    function onTargetClick(e) {
      if (isTargetIntersected(e, cube.cube)) {
        if (showCoin) {
          // Reset Coin Props
          showCoin = false;
          setObjectDefault(coin, coinDefaultProps);
        }
        updateCoin();
      }
    }

    function createLights() {
      light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.9);
      shadowLight = new THREE.SpotLight(0xffffff, 0.3);
      shadowLight.position.set(-100, 300, 0);
      shadowLight.castShadow = true;
      shadowLight.shadow.camera.far = 800;

      scene.add(light);
      scene.add(shadowLight);
      //Create a helper for the shadow camera (optional)
      // const helper = new THREE.CameraHelper(shadowLight.shadow.camera);
      // scene.add(helper);
    }

    function createFloor() {
      floor = new THREE.Mesh(
        new THREE.PlaneGeometry(700, 700),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
      );
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -150;
      floor.receiveShadow = true;

      scene.add(floor);
    }

    function createCube() {
      cube = new Cube();
    }

    // Cube
    const Cube = function () {
      let cubeTexture = new THREE.TextureLoader().load(
        imagePath(CANVAS_ASSETS.texture.cube)
      );
      cubeTexture.wrapS = THREE.RepeatWrapping;
      cubeTexture.wrapT = THREE.RepeatWrapping;
      let cubeMat = new THREE.MeshBasicMaterial({
        map: cubeTexture,
      });
      let cubeGeom = new THREE.BoxGeometry(100, 100, 100);
      this.cube = new THREE.Mesh(cubeGeom, cubeMat);
      this.cube.position.y = -50;
      this.cube.position.z = 0;
      this.cube.castShadow = true;
      this.cube.receiveShadow = false;

      scene.add(this.cube);
    };

    Cube.prototype.updateCube = function (speed) {
      this.cube.rotation.x += (this.rotX - this.cube.rotation.x) / speed;
      this.cube.rotation.y += (this.rotY - this.cube.rotation.y) / speed;
      this.cube.position.x += (this.posX - this.cube.position.x) / speed;
      this.cube.position.y += (this.posY - this.cube.position.y) / speed;
      this.cube.position.z += (this.posZ - this.cube.position.z) / speed;
    };

    Cube.prototype.look = function (xTarget, yTarget) {
      this.rotX = rule3(yTarget, -200, 200, -Math.PI / 12, Math.PI / 12);
      this.rotY = rule3(xTarget, -200, 200, -Math.PI / 6, Math.PI / 16);
      this.posX = rule3(xTarget, -5, 5, 0, 0);
      this.posY = rule3(yTarget, -5, 5, 0, 0);
      this.posZ = 0;

      this.updateCube(20);
    };

    // Coin
    const createCoin = function () {
      let texture = new THREE.TextureLoader().load(
        imagePath(coinTextureAssets[0])
      );
      let coinBodyMat = [
        new THREE.MeshStandardMaterial({ color: 0xffde65 }),
        new THREE.MeshStandardMaterial({ color: 0xffde65 }),
        new THREE.MeshStandardMaterial({ color: 0xffde65 }),
      ];
      let coinSurfaceMat = [
        new THREE.MeshStandardMaterial({ color: 0xffde65 }),
        new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
        }),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
        }),
      ];

      const coinBodyGeom = new THREE.CylinderGeometry(45, 45, 10, 30);
      const coinSurfaceGeom = new THREE.CylinderGeometry(38, 38, 10.2, 30);

      coin = new THREE.Group();
      let coinBody = new THREE.Mesh(coinBodyGeom, coinBodyMat);
      let coinSurface = new THREE.Mesh(coinSurfaceGeom, coinSurfaceMat);

      coin.add(coinBody);
      coin.add(coinSurface);

      // Set Default
      setObjectDefault(coin, coinDefaultProps);

      // Shadow
      coin.castShadow = true;
      coin.receiveShadow = false;

      scene.add(coin);
    };

    function coinAnimation(speed) {
      const endPosY = 160;
      const endRotY = Math.PI / 4;
      coin.position.y += (endPosY - coin.position.y) / speed;
      coin.rotation.y += (endRotY - coin.rotation.y) / speed;
    }

    function updateCoin() {
      // Update Coin Textures
      coin.children[1].material[1].map = new THREE.TextureLoader().load(
        imagePath(coinTextureAssets[coinDefaultProps.textureMapIndex])
      );
      // Loop Textures
      if (coinDefaultProps.textureMapIndex + 1 < coinTextureAssets.length) {
        coinDefaultProps.textureMapIndex += 1;
      } else {
        coinDefaultProps.textureMapIndex = 0;
      }

      showCoin = true;
      setObjectDefault(coin, coinDefaultProps);
      toggleVisibility(coin, true);

      if (coinTimeoutId) {
        clearTimeout(coinTimeoutId);
      }

      coinTimeoutId = setTimeout(() => {
        showCoin = false;
      }, animationDuration);
    }

    // Raycasting to a Mesh and Find Intersections
    function isTargetIntersected(e, targetObject) {
      mousePos = { x: e.clientX, y: e.clientY };
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        if (intersects[0].object === targetObject) {
          return true;
        }
      } else {
        return false;
      }
    }

    function animate() {
      render();
      let xTarget = mousePos.x - windowHalfX + cameraPos.x - 50;
      let yTarget = mousePos.y - windowHalfY;
      if (!isMobile) {
        cube.look(xTarget, yTarget);
      }

      if (showCoin) {
        coinAnimation(10);
      }

      frameId = requestAnimationFrame(animate);
    }

    function render() {
      renderer.render(scene, camera);
    }

    function start() {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    }

    function stop() {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    function cleanUp() {
      // remove everything attached to window object and event listeners
      window.removeEventListener("resize", onWindowResize);
      mountNode.removeEventListener("mousemove", handleMouseMove);
      mountNode.removeEventListener("click", onTargetClick);
      mountNode.removeChild(renderer.domElement);
      scene.remove(cube.cube);
      scene.remove(coin);
      scene.remove(floor);
    }

    init();
    createLights();
    createFloor();
    createCube();
    createCoin();
    start();

    return () => {
      // componentwillUnmount
      stop();
      cleanUp();
    };
  }, []);

  return <CanvasContainer id="canvas" ref={mount}></CanvasContainer>;
};

export default Canvas;
