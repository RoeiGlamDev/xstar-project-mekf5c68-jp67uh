import React from 'react';
import './TeamSection.css'; // Assuming you have a CSS file for styles

const teamMembers = [
  {
    name: 'Sophia Loren',
    position: 'Creative Director',
    image: '/images/sophia.jpg', // Replace with actual image path
  },
  {
    name: 'Liam Neeson',
    position: 'Head of Marketing',
    image: '/images/liam.jpg', // Replace with actual image path
  },
  {
    name: 'Emma Watson',
    position: 'Lead Designer',
    image: '/images/emma.jpg', // Replace with actual image path
  },
  {
    name: 'John Doe',
    position: 'Product Manager',
    image: '/images/john.jpg', // Replace with actual image path
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-position">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;