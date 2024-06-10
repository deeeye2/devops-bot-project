import React, { useState } from 'react';

const CLISection = () => {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add CLI execution functionality here
        setOutput(`Executed: ${command}`);
    };

    return (
        <div className="cli-section">
            <h2>Command Line Interface</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} placeholder="Enter CLI command" />
                <button type="submit">Execute</button>
            </form>
            <pre id="cliOutput">{output}</pre>
        </div>
    );
};

export default CLISection;
