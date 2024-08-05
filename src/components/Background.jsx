import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import LeftSide from "./home/LeftSide";
import RightSide from "./home/RightSide";
export default function Background() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "#020c17",
          }}
        >
          <Stars />
        </Canvas>
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 flex flex-col md:flex-row">
            <div className="flex-1 flex items-center justify-center">
              <LeftSide />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#f76be9"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
