import React, { useState } from 'react';

const ProblemSubmission = () => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add problem submission functionality here
        alert(`Problem submitted: ${description}`);
    };

    return (
        <div className="problem-submission">
            <h2>Submit a Problem</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your problem"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProblemSubmission;
