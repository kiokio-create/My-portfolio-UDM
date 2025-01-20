// Create the Back to Top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Top';
backToTopButton.id = 'backToTop';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    padding: 10px 15px;
    font-size: 14px;
    background-color: #0078d7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: opacity 0.3s ease;
`;

// Append the button to the body
document.body.appendChild(backToTopButton);

// Show or hide the button when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
        setTimeout(() => {
            if (window.scrollY <= 200) {
                backToTopButton.style.display = 'none';
            }
        }, 300);
    }
});

// Scroll smoothly to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
