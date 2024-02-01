import EmergeMaterial from "../stuff/EmergeMaterial";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect } from "react";
import * as THREE from "three";
import useScreenSize from "../stuff/useScreenSize";
import { OrbitControls, View } from "@react-three/drei";

import { useControls } from 'leva'


const PIXELS =  [1, 1.5, 2, 2.5, 3, 1, 1.5, 2, 2.5, 3, 3.5, 4, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 20, 100].map((v) => v/100)


export default function EmergingImage({ ...props }) {

    const { fillColor } = useControls({ fillColor: '#f60', })
  
    const [refMesh, setRefMesh] = useState(null);
    const [texture, setTexture] = useState(null);
    const [textureSize, setTextureSize] = useState([0, 0]);
    const [elementSize, setElementSize] = useState([0, 0]);
    const ref = useRef();
    const screenSize = useScreenSize();
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      new THREE.TextureLoader().loadAsync(props.url).then((data) => {
        // data.colorSpace = THREE.LinearSRGBColorSpace;
        setTextureSize([data.source.data.width, data.source.data.height]);
        setTexture(data);
      });
    }, []);

    useEffect(() => {
      
      if(refMesh) {
        refMesh.material.uProgress = 0
        refMesh.material.uType = props.type
      }
    },[props.type])
  
    useGSAP(() => {
      if (refMesh?.material) {
        gsap.to(refMesh.material, {
          uProgress: isIntersecting ? 1 : 0,
          duration: 1.5,
          ease: "none",
        });
      }
    }, [isIntersecting,props.type]);
  
    // scroll check
    // only set intersecting if refMesh is available, important
    // Thanks Cody Bennett for this issue!
    useLayoutEffect(() => {
      if (refMesh) {
        let bounds = ref.current.getBoundingClientRect();
        setElementSize([bounds.width, bounds.height]);
        refMesh?.scale.set(bounds.width, bounds.height, 1);
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        });
        observer.observe(ref.current);
      }
    }, [refMesh]);
  
    // resize
    useEffect(() => {
      let bounds = ref.current.getBoundingClientRect();
      setElementSize([bounds.width, bounds.height]);
      refMesh?.scale.set(bounds.width, bounds.height, 1);
    }, [screenSize]);
  
    return (
      <View {...props} ref={ref}>
        <mesh ref={setRefMesh}>
          <emergeMaterial
            uFillColor={new THREE.Color(fillColor)}
            transparent={true}
            uTexture={texture}
            uPixels={PIXELS}
            uTextureSize={new THREE.Vector2(textureSize[0], textureSize[1])}
            uElementSize={new THREE.Vector2(elementSize[0], elementSize[1])}
          />
          <planeGeometry args={[1, 1]} />
        </mesh>
      </View>
    );
  }