import React from 'react';

const Header = ({ onLogout }) => {
    return (
        <div className="header">
            <img src="https://share.icloud.com/photos/02bMLnttFbPjAHPr8Xp1zavVA" alt="DevOps Bot" />
            <a href="#" onClick={onLogout} style={{ color: 'green' }}>Logout</a>
        </div>
    );
};

export default Header;
