import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(255, 192, 203, 0.8), rgba(255, 255, 255, 1));
`;

const ParallaxLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  transform: translateZ(0);
  will-change: transform;
  transition: transform 0.5s ease;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const ParallaxSection: React.FC<{ image: string; children: React.ReactNode }> = ({ image, children }) => {
  return (
    <ParallaxContainer>
      <ParallaxLayer image={image} />
      <Content>{children}</Content>
    </ParallaxContainer>
  );
};

export default ParallaxSection;