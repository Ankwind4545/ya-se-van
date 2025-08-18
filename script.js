const endDate = new Date('December 10, 2025 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.querySelector('.days-arrieta').textContent = days > 0 ? days : 0;
    document.querySelector('.days-lopez').textContent = days > 0 ? days : 0;
    document.querySelector('.days-tetaz').textContent = days > 0 ? days : 0;
    document.querySelector('.days-pagano').textContent = days > 0 ? days : 0;
    document.querySelector('.days-lousteau').textContent = days > 0 ? days : 0;

    if (distance < 0) {
        document.querySelectorAll('.deputy-container p').forEach(p => {
            p.textContent = 'Mandato finalizado';
        });
    }
};

updateCountdown();
setInterval(updateCountdown, 1000);