import React , {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {easing} from 'maath';
import { useSnapshot } from 'valtio';
import state from '../store';


const CameraRig = ({childern}) => {
const group=useRef();
const snap=useSnapshot(state);
useFrame ((state,delta)=>{
  const isBreakpoint= window.innerWidth<=1260;
  const isMobile=window.innerWidth<=600;
})


}

export default CameraRig