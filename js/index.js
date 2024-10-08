// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate the letters of the name
const letters = document.querySelectorAll('#name-title span');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    letters.forEach(letter => {
        const letterRect = letter.getBoundingClientRect();
        const letterX = (letterRect.left + letterRect.right) / 2;
        const letterY = (letterRect.top + letterRect.bottom) / 2;

        const distanceX = Math.abs(mouseX - letterX);
        const distanceY = Math.abs(mouseY - letterY);

        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 100) {
            const offsetX = (mouseX - letterX) * 0.5;
            const offsetY = (mouseY - letterY) * 0.5;

            letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
            letter.style.transform = 'translate(0px, 0px)';
        }
    });
});
