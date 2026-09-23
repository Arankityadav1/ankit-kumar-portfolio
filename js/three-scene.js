/**
 * Three.js 3D Hero Scene - "Data Intelligence Core"
 * A floating 3D network of data nodes connected by dynamic lines and particles
 */

function initThreeScene() {
  const container = document.getElementById('heroThreeCanvas');
  if (!container) return;

  // WebGL Support Check
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  if (!isWebGLAvailable() || typeof THREE === 'undefined') {
    container.style.display = 'none';
    return;
  }

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 32;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Group for rotation and parallax
  const networkGroup = new THREE.Group();
  scene.add(networkGroup);

  // Geometry configuration based on device
  const nodeCount = isMobile ? 35 : 75;
  const maxDistance = isMobile ? 8 : 9;
  const nodePositions = [];

  // Create Nodes
  const nodeGeometry = new THREE.SphereGeometry(0.22, 12, 12);
  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const highlightMaterial = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
  const emeraldMaterial = new THREE.MeshBasicMaterial({ color: 0x10b981 });

  const nodeInstanced = new THREE.Group();
  networkGroup.add(nodeInstanced);

  for (let i = 0; i < nodeCount; i++) {
    const x = (Math.random() - 0.5) * 35;
    const y = (Math.random() - 0.5) * 24;
    const z = (Math.random() - 0.5) * 20;
    nodePositions.push({ x, y, z, vx: (Math.random() - 0.5) * 0.02, vy: (Math.random() - 0.5) * 0.02, vz: (Math.random() - 0.5) * 0.02 });

    const mat = i % 7 === 0 ? emeraldMaterial : (i % 3 === 0 ? highlightMaterial : nodeMaterial);
    const mesh = new THREE.Mesh(nodeGeometry, mat);
    mesh.position.set(x, y, z);
    nodeInstanced.add(mesh);
  }

  // Connecting Lines Material & Geometry
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x0284c7,
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending
  });

  const lineGeometry = new THREE.BufferGeometry();
  const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  networkGroup.add(linesMesh);

  // Outer Ambient Particles
  const particleCount = isMobile ? 60 : 150;
  const particlesGeo = new THREE.BufferGeometry();
  const particleCoords = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particleCoords[i] = (Math.random() - 0.5) * 45;
    particleCoords[i + 1] = (Math.random() - 0.5) * 35;
    particleCoords[i + 2] = (Math.random() - 0.5) * 30;
  }
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3));

  const particlesMat = new THREE.PointsMaterial({
    color: 0x818cf8,
    size: 0.15,
    transparent: true,
    opacity: 0.4
  });
  const particleSystem = new THREE.Points(particlesGeo, particlesMat);
  networkGroup.add(particleSystem);

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  if (!prefersReducedMotion) {
    window.addEventListener('mousemove', (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    });
  }

  // Window Resize
  function onWindowResize() {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  window.addEventListener('resize', onWindowResize);

  // Visibility optimization - Pause when scrolled out of view
  let isVisible = true;
  const heroSection = document.getElementById('hero');
  if ('IntersectionObserver' in window && heroSection) {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(heroSection);
  }

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    if (!prefersReducedMotion) {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      networkGroup.rotation.y += 0.0012;
      networkGroup.rotation.x = targetY * 2;
      networkGroup.rotation.y += targetX * 0.5;
    }

    // Update node positions and compute dynamic lines
    const linePositions = [];
    const children = nodeInstanced.children;

    for (let i = 0; i < nodeCount; i++) {
      const p = nodePositions[i];
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      // Bounce within bounds
      if (Math.abs(p.x) > 18) p.vx *= -1;
      if (Math.abs(p.y) > 12) p.vy *= -1;
      if (Math.abs(p.z) > 10) p.vz *= -1;

      children[i].position.set(p.x, p.y, p.z);

      // Check distance with nearby nodes for connecting lines
      for (let j = i + 1; j < nodeCount; j++) {
        const p2 = nodePositions[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dz = p.z - p2.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(p.x, p.y, p.z);
          linePositions.push(p2.x, p2.y, p2.z);
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    renderer.render(scene, camera);
  }

  animate();
}

window.initThreeScene = initThreeScene;
