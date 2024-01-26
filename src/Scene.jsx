import { Canvas } from '@react-three/fiber'
import {View,OrthographicCamera, Preload} from '@react-three/drei'


export default function Scene(){
    return (
        <>
          <Canvas
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
            }}
            eventSource={document.body}
          >
            <View.Port />
            <OrthographicCamera makeDefault position={[0, 0, 300]} zoom={1} />
            <Preload all />
          </Canvas>
        </>
    )
}