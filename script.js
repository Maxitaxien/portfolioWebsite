const boxes = document.querySelectorAll('.project-container div');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.width = '300px';
        box.style.height = '125px';
    });

    box.addEventListener('mouseleave', () => {
        box.style.width = '250px';
        box.style.height = '100px';
    });
})
