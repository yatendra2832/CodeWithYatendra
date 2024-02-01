// UserProfile.js

import React from "react";
import { useAuth } from "../store/auth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container mt-4">
      <h1 className="text-center">User Profile</h1>
      {user ? (
        <div>
          <p>
            <strong>Name:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
