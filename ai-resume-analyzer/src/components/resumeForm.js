import React, { useState } from 'react';

const ResumeForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setError('');
        } else {
            setError('Please upload a valid PDF file.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (file) {
            // Logic to handle file submission goes here
            console.log('File submitted:', file);
        } else {
            setError('Please select a file before submitting.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload Your Resume</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Analyze Resume</button>
        </form>
    );
};

export default ResumeForm;