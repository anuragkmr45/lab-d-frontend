'use client';

import { useEffect, useState } from 'react';
import { getProfile } from '@/services/user';

const Profile = () => {
  // State to hold profile data and editable fields
  const [profile, setProfile] = useState(null); // Initially null until fetched
  const [editableProfile, setEditableProfile] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    dob: '',
    bloodgrp: '',
  });

  useEffect(() => {
    const handleFetchUserData = async () => {
      const fetchedProfile = await getProfile();
      console.log('Profile:', fetchedProfile);

      setProfile(fetchedProfile);

      // Set initial values for the editable profile
      setEditableProfile({
        email: fetchedProfile.email || '',
        phoneNumber: fetchedProfile.phoneNumber || '',
        password: '', // Password should ideally not be pre-filled for security reasons
        dob: fetchedProfile.dob || '',
        bloodgrp: fetchedProfile.bloodgrp || '',
      });
    };

    handleFetchUserData();
  }, []);

  // Handle input change
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setEditableProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle save button click
  const handleSave = () => {
    console.log('Edited Profile:', editableProfile);
  };

  if (!profile) {
    // Show loading until profile is fetched
    return <div>Loading profile...</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Profile Details</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            value={editableProfile.email}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <br />
        <label>
          <strong>Phone Number:</strong>
          <input
            type="text"
            name="phoneNumber"
            value={editableProfile.phoneNumber}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <br />
        <label>
          <strong>Password:</strong>
          <input
            type="password"
            name="password"
            value={editableProfile.password}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <br />
        <label>
          <strong>Date of Birth:</strong>
          <input
            type="date"
            name="dob"
            value={editableProfile.dob}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <br />
        <label>
          <strong>Blood Group:</strong>
          <input
            type="text"
            name="bloodgrp"
            value={editableProfile.bloodgrp}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      <button
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
