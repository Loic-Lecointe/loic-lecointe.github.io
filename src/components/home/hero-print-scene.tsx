"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const LAYERS = 96;
const HEIGHT = 4;
const BUILD_SECONDS = 3.4;
const COLORS = { light: 0xc98a1a, dark: 0xf0b23e };

function radiusAt(t: number) {
  return (
    0.62 +
    0.5 * Math.sin(Math.PI * Math.pow(t, 0.85)) +
    0.04 * Math.sin(t * Math.PI * 9)
  );
}

type HeroPrintSceneProps = { className?: string };

/**
 * Vase torsadé « imprimé » couche par couche (mode vase d’une imprimante 3D).
 * Décoratif : masqué aux lecteurs d’écran, statique si les animations sont réduites.
 */
export function HeroPrintScene({ className }: HeroPrintSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const isDarkRef = useRef(false);
  const redrawRef = useRef<() => void>(() => {});
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    isDarkRef.current = resolvedTheme === "dark";
    redrawRef.current();
  }, [resolvedTheme]);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    let disposed = false;
    let cleanup = () => {};

    void import("three").then((THREE) => {
      if (disposed) {
        return;
      }

      const renderer = (() => {
        try {
          return new THREE.WebGLRenderer({ alpha: true, antialias: true });
        } catch {
          return null;
        }
      })();

      if (!renderer) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.cssText =
        "display:block;width:100%;height:100%";
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 1.7, 8.4);
      camera.lookAt(0, 0, 0);

      const geometry = new THREE.TorusGeometry(1, 0.04, 8, 6);
      const material = new THREE.MeshStandardMaterial({
        color: COLORS.light,
        roughness: 0.4,
        metalness: 0.15,
      });
      const vase = new THREE.InstancedMesh(geometry, material, LAYERS);

      const matrix = new THREE.Matrix4();
      const position = new THREE.Vector3();
      const scale = new THREE.Vector3();
      const quaternion = new THREE.Quaternion();
      const spin = new THREE.Quaternion();
      const flat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(Math.PI / 2, 0, 0),
      );
      const up = new THREE.Vector3(0, 1, 0);

      for (let index = 0; index < LAYERS; index += 1) {
        const t = index / (LAYERS - 1);
        const radius = radiusAt(t);

        position.set(0, (t - 0.5) * HEIGHT, 0);
        spin.setFromAxisAngle(up, t * 1.4);
        quaternion.copy(spin).multiply(flat);
        scale.set(radius, radius, radius);
        matrix.compose(position, quaternion, scale);
        vase.setMatrixAt(index, matrix);
      }

      vase.instanceMatrix.needsUpdate = true;

      const group = new THREE.Group();
      group.add(vase);
      scene.add(group);

      scene.add(new THREE.AmbientLight(0xffffff, 0.9));

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
      keyLight.position.set(3, 5, 4);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x8fb4ff, 1.1);
      rimLight.position.set(-4, 2, -3);
      scene.add(rimLight);

      const pointer = { x: 0, y: 0 };
      const smooth = { x: 0, y: 0 };
      let elapsed = reduceMotion ? BUILD_SECONDS : 0;
      let last = performance.now();
      let frame = 0;

      function draw() {
        const progress = Math.min(1, elapsed / BUILD_SECONDS);
        const eased = 1 - Math.pow(1 - progress, 3);

        material.color.setHex(isDarkRef.current ? COLORS.dark : COLORS.light);
        vase.count = Math.max(1, Math.ceil(eased * LAYERS));
        group.rotation.y = reduceMotion ? 0.5 : elapsed * 0.28 + smooth.x * 0.5;
        group.rotation.x = reduceMotion ? 0 : smooth.y * 0.12;
        renderer!.render(scene, camera);
      }

      function tick(now: number) {
        elapsed += Math.min((now - last) / 1000, 0.1);
        last = now;
        smooth.x += (pointer.x - smooth.x) * 0.06;
        smooth.y += (pointer.y - smooth.y) * 0.06;
        draw();
        frame = requestAnimationFrame(tick);
      }

      function handlePointerMove(event: PointerEvent) {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
      }

      const resizeObserver = new ResizeObserver(() => {
        const { clientWidth, clientHeight } = host;

        if (clientWidth === 0 || clientHeight === 0) {
          return;
        }

        renderer.setSize(clientWidth, clientHeight, false);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        draw();
      });

      const visibilityObserver = new IntersectionObserver(([entry]) => {
        cancelAnimationFrame(frame);

        if (entry.isIntersecting && !reduceMotion) {
          last = performance.now();
          frame = requestAnimationFrame(tick);
        }
      });

      redrawRef.current = draw;
      resizeObserver.observe(host);
      visibilityObserver.observe(host);

      if (!reduceMotion) {
        window.addEventListener("pointermove", handlePointerMove, {
          passive: true,
        });
      }

      cleanup = () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        visibilityObserver.disconnect();
        window.removeEventListener("pointermove", handlePointerMove);
        redrawRef.current = () => {};
        geometry.dispose();
        material.dispose();
        vase.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={hostRef} aria-hidden="true" className={className} />;
}
