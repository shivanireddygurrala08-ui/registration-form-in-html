// This file contains the JavaScript code that handles client-side interactions, such as form submissions and displaying results from the resume analysis.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resultContainer = document.getElementById('result');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const resumeFile = formData.get('resume');

        if (resumeFile) {
            const response = await analyzeResume(resumeFile);
            displayResults(response);
        } else {
            alert('Please upload a resume file.');
        }
    });

    async function analyzeResume(file) {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            body: file
        });
        return response.json();
    }

    function displayResults(data) {
        resultContainer.innerHTML = `
            <h2>Analysis Results</h2>
            <p>${data.feedback}</p>
            <h3>Extracted Information:</h3>
            <pre>${JSON.stringify(data.extractedInfo, null, 2)}</pre>
        `;
    }
});