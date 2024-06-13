document.getElementById('income-form').addEventListener('input', updateResults);
document.getElementById('expenses-form').addEventListener('input', updateResults);

function updateResults() {
    const salary = parseFloat(document.getElementById('salary').value) || 0;
    const additionalIncome = parseFloat(document.getElementById('additional-income').value) || 0;
    const housing = parseFloat(document.getElementById('housing').value) || 0;
    const shopping = parseFloat(document.getElementById('shopping').value) || 0;
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const dining = parseFloat(document.getElementById('dining').value) || 0;
    const education = parseFloat(document.getElementById('education').value) || 0;

    const totalIncome = salary + additionalIncome;
    const totalExpenses = housing + shopping + transport + utilities + dining + education;
    const moneyLeftOver = totalIncome - totalExpenses;

    document.getElementById('total-income').textContent = `Total Income: ${totalIncome} €`;
    document.getElementById('total-expenses').textContent = `Total Expenses: ${totalExpenses} €`;
    document.getElementById('money-left-over').textContent = `Money Left Over: ${moneyLeftOver} €`;

    updateChart(totalExpenses, housing, shopping, transport, utilities, dining, education);
}

function updateChart(totalExpenses, housing, shopping, transport, utilities, dining, education) {
    const ctx = document.getElementById('expensesChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Housing', 'Shopping', 'Transport', 'Utilities', 'Dining', 'Education'],
            datasets: [{
                data: [housing, shopping, transport, utilities, dining, education],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#3357FF'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add contact form functionality here
});

$(document).ready(function() {
    $('#calendar').fullCalendar({
        defaultView: 'month',
        editable: true,
        events: []
    });
});

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('currentTime').textContent = currentTime;
}

setInterval(updateTime, 1000);
