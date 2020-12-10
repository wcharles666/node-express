import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import './index.less';
// import { dipatchLeftSide } from '@/config/commonMethods';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [localSrc, setLocalSrc]: any = useState('');
  const videoContain: any = useRef();
  const getMedia = () => {
    console.log(videoContain, 'sds');
    navigator.getUserMedia(
      {
        video: true,
      },
      stream => {
        videoContain.current.srcObject = stream;
      },
      err => {
        console.error(`getUserMedia() error: ${err.name}`);
      }
    );
  };

  return (
    <div className="homePage">
      <div className="left_container">
        <video autoPlay id="local" ref={videoContain}></video>
        <Button onClick={getMedia}>Get user media</Button>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
        <p>sdsd</p>
      </div>
      <div className="right_container"></div>
    </div>
  );
};

export default Home;
