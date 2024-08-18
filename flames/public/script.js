document.getElementById('flames-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    fetch('/flames', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name1, name2 }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('result').textContent = `Result: ${data.result}`;
        })
        .catch(error => {
            // console.error('Error:', error);
            document.getElementById('result').textContent = 'Failed to fetch result. Check console for details.';
        });
});
