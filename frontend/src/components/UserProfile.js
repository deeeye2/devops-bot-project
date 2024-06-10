import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        // Fetch user profile from the backend and set it
        setProfile({
            username: 'admin',
            email: 'admin@example.com'
        });
    }, []);

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <pre id="userProfile">{JSON.stringify(profile, null, 2)}</pre>
        </div>
    );
};

export default UserProfile;
