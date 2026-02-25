document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const title = document.getElementById('title');
    const btn = document.getElementById('cta-btn');

    // Subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    // Reset rotation when mouse leaves
    document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

    // Button click animation
    btn.addEventListener('click', () => {
        title.innerHTML = 'Hello Future';
        title.style.background = 'linear-gradient(to right, #ec4899, #a855f7)';
        title.style.webkitBackgroundClip = 'text';
        
        btn.innerHTML = 'Clicked!';
        btn.style.background = '#06b6d4';
        
        setTimeout(() => {
            alert('Welcome to the modern web implementation!');
        }, 100);
    });
});
