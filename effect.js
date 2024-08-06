document.addEventListener('DOMContentLoaded', () => {

    function createStars() {
        const starContainer = document.querySelector('.stars');
        const numStars = 150; // Number of stars to be created
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            // Randomize position
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            // Append to container
            starContainer.appendChild(star);
        }
    }

    createStars();

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const content = document.querySelector('.content');
        const textDirection = document.querySelector('.content p span');

        // Calculate gradient colors
        const bottomColor = `rgb(${100 + (scrollPercent * 0)}, ${200 - (scrollPercent * 99)}, ${200 + (scrollPercent * 30)},5% )`; // Light to mid blue
        const topColor = `rgb(${0 + (scrollPercent * 25)}, ${0 + (scrollPercent * 210)}, ${139 + (scrollPercent * 116)})`; // Dark blue

        const textColor = scrollPercent < 0.5 ? '#ccc' : '#555'; 
        const textDescription= scrollPercent < 0.5 ? 'down' : 'up';

        // Calculate star visibility
        const starOpacity = Math.min(1, 1 - scrollPercent * 2); 

        document.documentElement.style.setProperty('--sky-color-top', topColor);
        document.documentElement.style.setProperty('--sky-color-bottom', bottomColor);
        document.querySelector('.stars').style.opacity = starOpacity;
        content.style.color = textColor;
        textDirection.innerHTML = textDescription;

        const sunPosition = -50 + (scrollPercent * 100);
        document.documentElement.style.setProperty('--sun-position', `${sunPosition}%`);
    });
})
