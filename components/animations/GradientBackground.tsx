import React from 'react';
import { styled } from '@mui/system';

const GradientBackgroundContainer = styled('div')({
  height: '100vh', // Full height
  background: 'linear-gradient(to right, #FFC0CB, #FFFFFF)', // Pink to white gradient
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const GradientBackground: React.FC = () => {
  return (
    <GradientBackgroundContainer>
      {/* Content can be added here */}
    </GradientBackgroundContainer>
  );
};

export default GradientBackground;