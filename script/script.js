document.addEventListener('DOMContentLoaded', function () {
    // Company status data
    const totalRevenueData = {
        startVal: 0,
        endVal: 150000, // Set your total revenue value
        duration: 2, // Set the duration of the animation in seconds
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    };

    const customersServedData = {
        startVal: 0,
        endVal: 10000, // Set your customers served value
        duration: 2,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    };

    const projectsCompletedData = {
        startVal: 0,
        endVal: 200, // Set your projects completed value
        duration: 2,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    };

    // Initialize CountUp instances
    const totalRevenue = new CountUp('total-revenue', totalRevenueData);
    const customersServed = new CountUp('customers-served', customersServedData);
    const projectsCompleted = new CountUp('projects-completed', projectsCompletedData);

    // Start CountUp animations
    totalRevenue.start();
    customersServed.start();
    projectsCompleted.start();
});


