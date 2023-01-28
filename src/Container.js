import React from "react";
import "./style.css";
import Test from "./Test";
import { Canvas } from "@react-three/fiber";

function Container() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Test />
      </Canvas>
    </div>
  );
}

export default Container;
