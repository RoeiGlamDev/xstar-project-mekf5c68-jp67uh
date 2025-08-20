import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2); // semi-transparent white
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px); // glass effect
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: #fff; // text color
  border: 1px solid rgba(255, 255, 255, 0.5); // subtle border
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #ff69b4; // pink color
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #fff; // text color
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;