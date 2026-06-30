import React from 'react';

const ProfileCard = ({ name, avatarUrl, bio }) => {
  return (
    <div className="profile-card">
      <div className="profile-avatar-container">
        <img 
          src={avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop'} 
          alt={`${name}'s avatar`} 
          className="profile-avatar"
        />
        <div className="avatar-ring"></div>
      </div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
