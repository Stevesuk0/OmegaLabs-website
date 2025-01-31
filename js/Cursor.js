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
    const rect = element.getBoundingClientRect();
    // JavaScript 部分
    if (
        element &&
        element !== document.documentElement &&
        element !== customCursor &&
        element.classList.contains('hyperlink')
    ) {    
        customCursor.style.backgroundColor = 'rgb(185, 0, 255)'; 
        customCursor.style.width = `${rect.width + 15}px`;
        customCursor.style.height = `${rect.height + 3}px`;
        customCursor.style.left = `${(rect.right + rect.left) / 2}px`;
        customCursor.style.top = `${(rect.bottom + rect.top) / 2}px`;
        customCursor.style.borderRadius = '5px';
        customCursor.style.opacity = '0.5';
    } else {     
        customCursor.style.backgroundColor = 'rgb(255, 0, 175)'; 
        customCursor.style.width = '35px';
        customCursor.style.height = '35px';
        customCursor.style.borderRadius = '50%';
        customCursor.style.opacity = '1';
    }
});

hideCursor(); 