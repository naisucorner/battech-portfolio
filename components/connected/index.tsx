import { Canvas } from "@react-three/fiber";
import {
  Container,
  Left,
  Right,
  Girl,
  Boy,
  Box,
  BoxTitle,
  BoxSub,
  Center,
  CanvasContainer,
  CenterBase,
} from "./styles";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ["./images/map1.jpg"]
  );

  return (
    <>
      <ambientLight intensity={3} color="#0047AB" />
      {/* <directionalLight /> */}
      <mesh>
        <sphereBufferGeometry args={[3, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

const Connected = () => (
  <Container>
    <Left>
      <img
        src="./images/base.png"
        width="100%"
        height="100%"
        style={{ opacity: "70%" }}
      />
      <Girl src="./images/girl.png" />
    </Left>

    <Center>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls autoRotate enableZoom={false} />
          </Suspense>
        </Canvas>
      </CanvasContainer>

      <CenterBase>
        <img
          src="./images/chan-qua-cau.png"
          width="100%"
          height="100%"
          style={{ opacity: "70%" }}
        />
      </CenterBase>
    </Center>

    <Right>
      <img
        src="./images/base.png"
        width="100%"
        height="100%"
        style={{ opacity: "70%" }}
      />
      <Boy src="./images/boy.png" />
    </Right>

    <Box>
      <BoxTitle>Feel Connected</BoxTitle>

      <BoxSub>
        From the first virtual handshake, Battech makes people feel like they
        are closer together, boosting team cohesion and engagement
      </BoxSub>
    </Box>
  </Container>
);

export default Connected;
