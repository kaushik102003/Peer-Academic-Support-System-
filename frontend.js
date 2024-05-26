document.getElementById('studyGroupForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        groupName: formData.get('groupName'),
        description: formData.get('description')
    };

    try {
        const response = await fetch('/api/createStudyGroup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create study group');
        }

        const result = await response.json();
        console.log(result);
        // Display success message to user
        alert('Study group created successfully!');
    } catch (error) {
        console.error('Error:', error);
        // Display error message to user
        alert('An error occurred while creating the study group. Please try again later.');
    }
});
