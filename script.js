
    const button = document.getElementById('toggle-mode');
    const body = document.body;
    const icon = document.getElementById('icon');

    // Define um tema padrão
    if (!body.classList.contains('lightmode') && !body.classList.contains('darkmode')) {
        body.classList.add('lightmode');
        icon.textContent = '☀️';
    }

    button.addEventListener('click', () => {
        const isDark = body.classList.contains('darkmode');

        body.classList.toggle('darkmode');
        body.classList.toggle('lightmode');

        // Troca o ícone
        icon.textContent = isDark ? '☀️' : '🌙';
    });