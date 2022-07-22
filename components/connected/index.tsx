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
  Peoples,
} from "./styles";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import useWindowSize from "../../hook/useWindowSize";

function Scene() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ["./images/map1.jpg"]
  );

  return (
    <>
      <ambientLight intensity={3} color="#0047AB" />

      <mesh>
        <sphereBufferGeometry args={[2.5, 100, 100]} />
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

const Connected = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Center>
        <CanvasContainer>
          <Canvas>
            <Suspense fallback={null}>
              <Scene />
              <OrbitControls autoRotate enableZoom={false} />
            </Suspense>
          </Canvas>
        </CanvasContainer>

        <CenterBase
          src="./images/chan-qua-cau.png"
          width="100%"
          height="100%"
          style={{ opacity: "70%" }}
        />
      </Center>

      <Box>
        {width && width > 1020 && (
          <>
            <Left>
              <img
                src="./images/base.png"
                width="100%"
                height="100%"
                style={{ opacity: "70%" }}
              />
              <Girl src="./images/girl.png" />
            </Left>

            <Right>
              <img
                src="./images/base.png"
                width="100%"
                height="100%"
                style={{ opacity: "70%" }}
              />
              <Boy src="./images/boy.png" />
            </Right>
          </>
        )}

        <BoxTitle>Feel Connected</BoxTitle>

        <BoxSub>
          From the first virtual handshake, Battech makes people feel like they
          are closer together, boosting team cohesion and engagement
        </BoxSub>
      </Box>
    </Container>
  );
};

export default Connected;
