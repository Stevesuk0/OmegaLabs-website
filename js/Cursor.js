const customCursor = document.getElementById('roundcursor');
let timeoutId;

const hideCursor = () => {
    customCursor.style.opacity = '0';
};

const showCursor = () => {
    customCursor.style.opacity = '1';
};

let requestId;
document.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(() => {
        // Always show the cursor immediately when moving
        showCursor();
        clearTimeout(timeoutId);

        const element = document.elementFromPoint(e.clientX, e.clientY);
        timeoutId = setTimeout(hideCursor, 1000);  // Hide cursor after 1 second of inactivity

        // Set default custom cursor style
        customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;

        const rect = element.getBoundingClientRect();

        // JavaScript 部分
        if (element &&
            element.closest('.hyperlink') &&  // 使用 closest 检测嵌套元素
            element !== customCursor
        ) {    
            customCursor.style.backgroundColor = 'rgb(185, 0, 255)'; 
            customCursor.style.width = `${rect.width + 15}px`;
            customCursor.style.height = `${rect.height + 3}px`;
            customCursor.style.left = `${(rect.right + rect.left) / 2}px`;
            customCursor.style.top = `${(rect.bottom + rect.top) / 2}px`;
            customCursor.style.borderRadius = '5px';
            customCursor.style.opacity = '0.5';  // Slightly more transparent when hovering over link
        } else {     
            customCursor.style.backgroundColor = 'rgb(255, 0, 175)'; 
            customCursor.style.width = '35px';
            customCursor.style.height = '35px';
            customCursor.style.borderRadius = '50%';
            customCursor.style.opacity = '1';
        }
    });
});
