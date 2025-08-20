'use client';

import React, { useEffect } from 'react';
import { Particle } from '@tsparticles/react'; // Assuming a particles library is used
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; // Behind other components
`;

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    // Additional setup if needed
  }, []);

  return (
    <Container>
      <Particle
        params={{
          particles: {
            number: {
              value: 100, // Number of particles
            },
            size: {
              value: 3, // Size of particles
            },
            color: {
              value: '#FFC0CB', // Pink color
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#FFFFFF', // White color for lines
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
            },
          },
        }}
      />
    </Container>
  );
};

export default ParticleBackground;