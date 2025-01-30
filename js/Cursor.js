const customCursor = document.getElementById('roundcursor');
let timeoutId; 

const hideCursor = () => {
    customCursor.style.opacity = '0';
};

const showCursor = () => {
    customCursor.style.opacity = '1';
};

document.addEventListener('mousemove', (e) => {
    showCursor();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideCursor, 1000); 
    customCursor.style.transform = 'translate(-50%, -50%) scale(1)'; 
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;

    const element = document.elementFromPoint(e.clientX, e.clientY);
    
    if (
        element &&
        element !== document.documentElement &&
        element !== customCursor &&
        !element.classList.contains('container') &&
        !element.classList.contains('welcomeOnMotd') &&
        !element.classList.contains('motd') &&
        !element.classList.contains('desc') &&
        !element.classList.contains('links')
    ) {
        const rect = element.getBoundingClientRect();
        customCursor.style.width = `${rect.width + 30}px`;
        customCursor.style.height = `${rect.height + 3}px`;
        customCursor.style.left = `${(rect.right + rect.left) / 2}px`;
        customCursor.style.top = `${(rect.bottom + rect.top) / 2}px`;
        customCursor.style.borderRadius = '10px';
        customCursor.style.opacity = '0.5';
    } else {
        customCursor.style.width = '35px';
        customCursor.style.height = '35px';
        customCursor.style.borderRadius = '50%';
        customCursor.style.opacity = '1';
    }
});

hideCursor(); 