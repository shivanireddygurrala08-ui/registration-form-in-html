export const parseResume = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const text = event.target.result;
            // Here you can add logic to extract relevant information from the text
            resolve(text);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsText(file);
    });
};