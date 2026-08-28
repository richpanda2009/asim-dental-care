import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Info, RotateCw, ZoomIn, ZoomOut, Sparkles, Layers, ShieldCheck, Activity } from 'lucide-react';

interface AnatomyPoint {
  id: string;
  name: string;
  urduName: string;
  layer: string;
  description: string;
  clinicalSignificance: string;
  position: [number, number, number];
  color: string;
}

const ANATOMY_POINTS: AnatomyPoint[] = [
  {
    id: 'enamel',
    name: 'Dental Enamel',
    urduName: 'دانت کی بیرونی حفاظتی تہہ',
    layer: 'Enamel',
    description: 'The hardest mineralized substance in the human body (96% minerals), protecting the tooth from chewing forces and thermal wear.',
    clinicalSignificance: 'Protected by fluoride and laser whitening. When damaged by sugar acid, cavities begin here.',
    position: [0, 1.3, 0.9],
    color: '#38bdf8'
  },
  {
    id: 'dentin',
    name: 'Dentin Layer',
    urduName: 'ڈینٹین (حساس درمیانی تہہ)',
    layer: 'Dentin',
    description: 'Microscopic tubules connecting the enamel to the inner nerve. Softer than enamel and yellow-tinted.',
    clinicalSignificance: 'Exposed dentin causes sharp sensitivity to cold chai, ice cream, or sweets.',
    position: [0, 0.4, 0.8],
    color: '#fbbf24'
  },
  {
    id: 'pulp',
    name: 'Pulp Chamber & Nerves',
    urduName: 'دانت کا اندرونی اعصاب اور خون کا نظام',
    layer: 'Pulp',
    description: 'The living heart of the tooth containing blood vessels, connective tissue, and pain receptors.',
    clinicalSignificance: 'Infection here causes unbearable throbbing night toothaches, treated painlessly with our Single-Visit RCT.',
    position: [0, 0.2, 0],
    color: '#ef4444'
  },
  {
    id: 'root-canal',
    name: 'Root Canal & Apex',
    urduName: 'جڑ کی نالیاں اور ہڈی کا جوڑ',
    layer: 'Canals',
    description: 'Extends deep into the alveolar jawbone, anchoring the tooth with periodontal ligament fibers.',
    clinicalSignificance: 'Our German rotary endodontics disinfects and hermetically seals these canals to save natural teeth.',
    position: [0.4, -1.2, 0.2],
    color: '#10b981'
  }
];

export const ToothExplorer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<string>('all');
  const [activeSimulation, setActiveSimulation] = useState<'healthy' | 'decay' | 'rct' | 'crown' | 'implant'>('healthy');
  const [selectedPoint, setSelectedPoint] = useState<AnatomyPoint | null>(ANATOMY_POINTS[0]);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  // References to THREE objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const toothGroupRef = useRef<THREE.Group | null>(null);
  const crownMeshRef = useRef<THREE.Mesh | null>(null);
  const rootLeftMeshRef = useRef<THREE.Mesh | null>(null);
  const rootRightMeshRef = useRef<THREE.Mesh | null>(null);
  const pulpMeshRef = useRef<THREE.Mesh | null>(null);
  const implantMeshRef = useRef<THREE.Mesh | null>(null);
  const crownCapMeshRef = useRef<THREE.Mesh | null>(null);
  const decayMeshRef = useRef<THREE.Mesh | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.5, 6);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Clean previous children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    fillLight.position.set(-5, 3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x0ea5e9, 0.8);
    rimLight.position.set(0, -4, -4);
    scene.add(rimLight);

    // Root Group
    const toothGroup = new THREE.Group();
    scene.add(toothGroup);
    toothGroupRef.current = toothGroup;

    // --- Build Procedural Anatomical 3D Tooth ---
    
    // 1. Crown Geometry (Organic Molar Cusp shape)
    const crownGeo = new THREE.CylinderGeometry(1.15, 0.95, 1.4, 32, 16);
    // Deform vertices for realistic molar cusp morphology
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);
      if (y > 0.3) {
        // Cusp indentation
        const distFromCenter = Math.sqrt(x * x + z * z);
        const cuspBump = Math.sin(x * 3.5) * Math.cos(z * 3.5) * 0.15;
        pos.setY(i, y + cuspBump);
        if (distFromCenter < 0.4) {
          pos.setY(i, y - 0.18); // central fossa depression
        }
      }
    }
    crownGeo.computeVertexNormals();

    const crownMat = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      roughness: 0.12,
      metalness: 0.05,
      transmission: 0.15, // slight realistic enamel translucency
      thickness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9
    });

    const crownMesh = new THREE.Mesh(crownGeo, crownMat);
    crownMesh.position.y = 0.7;
    crownMesh.castShadow = true;
    crownMesh.receiveShadow = true;
    toothGroup.add(crownMesh);
    crownMeshRef.current = crownMesh;

    // 2. Roots (Mesial & Distal Bifurcation)
    const rootGeo = new THREE.ConeGeometry(0.45, 2.2, 24, 16);
    const rootMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a, // yellowish natural root dentin
      roughness: 0.45,
      metalness: 0.02
    });

    const rootLeft = new THREE.Mesh(rootGeo, rootMat);
    rootLeft.position.set(-0.45, -1.0, 0);
    rootLeft.rotation.z = -0.12;
    rootLeft.rotation.y = 0.2;
    rootLeft.castShadow = true;
    toothGroup.add(rootLeft);
    rootLeftMeshRef.current = rootLeft;

    const rootRight = new THREE.Mesh(rootGeo, rootMat);
    rootRight.position.set(0.45, -1.0, 0);
    rootRight.rotation.z = 0.12;
    rootRight.rotation.y = -0.2;
    rootRight.castShadow = true;
    toothGroup.add(rootRight);
    rootRightMeshRef.current = rootRight;

    // 3. Inner Pulp Chamber (Vascular & Nerve core)
    const pulpGeo = new THREE.CylinderGeometry(0.35, 0.2, 1.8, 16);
    const pulpMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0x991b1b,
      emissiveIntensity: 0.35,
      roughness: 0.3,
      transparent: true,
      opacity: 0.85
    });
    const pulpMesh = new THREE.Mesh(pulpGeo, pulpMat);
    pulpMesh.position.y = -0.1;
    pulpMesh.visible = false;
    toothGroup.add(pulpMesh);
    pulpMeshRef.current = pulpMesh;

    // 4. Decay Cavity Simulation Mesh
    const decayGeo = new THREE.SphereGeometry(0.38, 16, 16);
    const decayMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      roughness: 0.9,
      metalness: 0.1
    });
    const decayMesh = new THREE.Mesh(decayGeo, decayMat);
    decayMesh.position.set(0.35, 1.2, 0.35);
    decayMesh.visible = false;
    toothGroup.add(decayMesh);
    decayMeshRef.current = decayMesh;

    // 5. Crown Cap (Zirconia restoration simulation)
    const crownCapGeo = new THREE.CylinderGeometry(1.2, 1.0, 1.5, 32);
    const crownCapMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.05,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.05
    });
    const crownCapMesh = new THREE.Mesh(crownCapGeo, crownCapMat);
    crownCapMesh.position.y = 0.72;
    crownCapMesh.visible = false;
    toothGroup.add(crownCapMesh);
    crownCapMeshRef.current = crownCapMesh;

    // 6. Dental Implant Fixture (Titanium screw simulation)
    const implantGeo = new THREE.CylinderGeometry(0.5, 0.3, 2.2, 24);
    const implantMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.25
    });
    const implantMesh = new THREE.Mesh(implantGeo, implantMat);
    implantMesh.position.set(0, -1.0, 0);
    implantMesh.visible = false;
    toothGroup.add(implantMesh);
    implantMeshRef.current = implantMesh;

    // 7. Base Pedestal with subtle glow
    const baseGeo = new THREE.CylinderGeometry(2.4, 2.6, 0.15, 48);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.8,
      metalness: 0.2
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -2.3;
    baseMesh.receiveShadow = true;
    toothGroup.add(baseMesh);

    // Mouse / Touch Interaction Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !toothGroupRef.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      toothGroupRef.current.rotation.y += deltaX * 0.008;
      toothGroupRef.current.rotation.x = Math.max(-0.4, Math.min(0.4, toothGroupRef.current.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handlePointerDown);
    domEl.addEventListener('touchstart', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (toothGroupRef.current && isRotating && !isDragging) {
        toothGroupRef.current.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domEl.removeEventListener('mousedown', handlePointerDown);
      domEl.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isRotating]);

  // Update simulation views
  useEffect(() => {
    if (!crownMeshRef.current || !rootLeftMeshRef.current || !rootRightMeshRef.current || !pulpMeshRef.current || !decayMeshRef.current || !crownCapMeshRef.current || !implantMeshRef.current) return;

    // Reset default visibilities
    crownMeshRef.current.visible = true;
    rootLeftMeshRef.current.visible = true;
    rootRightMeshRef.current.visible = true;
    pulpMeshRef.current.visible = false;
    decayMeshRef.current.visible = false;
    crownCapMeshRef.current.visible = false;
    implantMeshRef.current.visible = false;

    // Reset materials
    const crownMat = crownMeshRef.current.material as THREE.MeshPhysicalMaterial;
    crownMat.opacity = 1.0;
    crownMat.transparent = false;
    crownMat.color.setHex(0xf8fafc);

    const rootMat = rootLeftMeshRef.current.material as THREE.MeshStandardMaterial;
    rootMat.color.setHex(0xfef08a);

    const pulpMat = pulpMeshRef.current.material as THREE.MeshStandardMaterial;

    if (activeSimulation === 'decay') {
      decayMeshRef.current.visible = true;
      pulpMeshRef.current.visible = true;
      pulpMat.color.setHex(0xef4444);
      pulpMat.emissive.setHex(0xb91c1c);
      crownMat.color.setHex(0xe2e8f0);
    } else if (activeSimulation === 'rct') {
      pulpMeshRef.current.visible = true;
      pulpMat.color.setHex(0x10b981); // bio-ceramic gutta percha fill
      pulpMat.emissive.setHex(0x047857);
      crownMat.opacity = 0.55;
      crownMat.transparent = true;
    } else if (activeSimulation === 'crown') {
      crownMeshRef.current.visible = false;
      crownCapMeshRef.current.visible = true;
    } else if (activeSimulation === 'implant') {
      rootLeftMeshRef.current.visible = false;
      rootRightMeshRef.current.visible = false;
      implantMeshRef.current.visible = true;
      crownCapMeshRef.current.visible = true;
      crownMeshRef.current.visible = false;
    }

    // Layer filter overrides
    if (activeLayer === 'enamel') {
      crownMat.opacity = 0.95;
      rootMat.color.setHex(0x94a3b8);
    } else if (activeLayer === 'dentin') {
      crownMat.opacity = 0.25;
      crownMat.transparent = true;
      rootMat.color.setHex(0xf59e0b);
    } else if (activeLayer === 'pulp') {
      crownMat.opacity = 0.15;
      crownMat.transparent = true;
      pulpMeshRef.current.visible = true;
    } else if (activeLayer === 'canals') {
      crownMat.opacity = 0.2;
      crownMat.transparent = true;
      pulpMeshRef.current.visible = true;
      rootLeftMeshRef.current.visible = true;
      rootRightMeshRef.current.visible = true;
    }
  }, [activeSimulation, activeLayer]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const delta = direction === 'in' ? -0.8 : 0.8;
    cameraRef.current.position.z = Math.max(3.5, Math.min(8.5, cameraRef.current.position.z + delta));
  };

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-4 md:p-6 text-white shadow-2xl border border-slate-800/80 overflow-hidden">
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-base md:text-lg text-white flex items-center gap-2">
              Interactive 3D Dental Explorer
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                WebGL 360°
              </span>
            </h3>
            <p className="text-xs text-slate-400">Click and drag to rotate • Select layer or treatment simulation below</p>
          </div>
        </div>

        {/* Viewport Control Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`p-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
              isRotating
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Toggle Auto-Rotation"
          >
            <RotateCw className={`h-4 w-4 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline">{isRotating ? 'Auto Rotate' : 'Paused'}</span>
          </button>
          <button
            onClick={() => handleZoom('in')}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            title="Zoom In"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            title="Zoom Out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-4">
        {/* 3D Canvas Container */}
        <div className="lg:col-span-7 relative h-[340px] md:h-[420px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing">
          <div ref={mountRef} className="w-full h-full" />

          {/* Quick Interaction Hint */}
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-[11px] text-slate-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
            <RotateCw className="h-3 w-3 text-sky-400" />
            <span>Drag 360° to inspect root & crown anatomy</span>
          </div>
        </div>

        {/* Anatomical Card & Layer Detail */}
        <div className="lg:col-span-5 space-y-4">
          {/* Simulation Mode Tabs */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Simulate Clinical Treatment:
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800">
              {[
                { id: 'healthy', label: 'Healthy', icon: ShieldCheck },
                { id: 'decay', label: 'Infection', icon: Activity },
                { id: 'rct', label: 'RCT Seal', icon: Layers },
                { id: 'crown', label: 'Crown', icon: Sparkles },
                { id: 'implant', label: 'Implant', icon: ShieldCheck }
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => {
                    setActiveSimulation(mode.id as any);
                    setActiveLayer('all');
                  }}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-medium transition-all ${
                    activeSimulation === mode.id
                      ? 'bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* Anatomy Hotspot Details */}
          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-4 border border-slate-700/70 shadow-lg">
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div>
                <span className="text-[11px] font-medium text-sky-400 tracking-wide uppercase">
                  {selectedPoint?.layer} Layer Insight
                </span>
                <h4 className="text-base font-bold text-white">{selectedPoint?.name}</h4>
                <p className="text-xs text-sky-200/80 font-urdu">{selectedPoint?.urduName}</p>
              </div>
              <div
                className="w-3.5 h-3.5 rounded-full ring-4 ring-slate-800"
                style={{ backgroundColor: selectedPoint?.color || '#38bdf8' }}
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">{selectedPoint?.description}</p>

            <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/50 text-xs text-slate-200 flex items-start gap-2.5">
              <Info className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-sky-300">Asim Dental Care Protocol: </span>
                <span>{selectedPoint?.clinicalSignificance}</span>
              </div>
            </div>
          </div>

          {/* Hotspot Anatomy Selector Pills */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Explore Layer Anatomy:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ANATOMY_POINTS.map(point => (
                <button
                  key={point.id}
                  onClick={() => {
                    setSelectedPoint(point);
                    setActiveLayer(point.id);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedPoint?.id === point.id
                      ? 'bg-sky-500/20 border-sky-400 text-white shadow-sm shadow-sky-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-semibold">{point.name}</span>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: point.color }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
