const c = document.createElement('div');
c.id = 'o';
document.body.append(c);

const s = document.createElement('style');
s.textContent = `
  #o {
    pointer-events: none;
    position: absolute;
    width: 30px;
    height: 30px;
    background: #66cdaa;
    backdrop-filter: blur(8px) saturate(180%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999999;
    border: 2px solid #fff;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      width 0.25s,
      height 0.5s,
      left 0.05s,
      top 0.05s,
      backdrop-filter 0.5s,
      background-color 0.2s;
  }
`;
document.head.append(s);

let timeout, animationFrame;

document.addEventListener('mousemove', e => {
  cancelAnimationFrame(animationFrame);

  animationFrame = requestAnimationFrame(() => {
    c.style.opacity = '0.9';

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      c.style.opacity = '0';
    }, 1000);

    c.style.transform = 'translate(-50%, -50%) scale(1)';
    c.style.left = e.clientX + 'px';
    c.style.top = e.clientY + 'px';

    const hoveredElement = document.elementFromPoint(e.x, e.y);
    const linkRect = hoveredElement?.closest('a')?.getBoundingClientRect();

    if (linkRect) {
      Object.assign(c.style, {
        zIndex: -9999,
        background: rgb(102, 205, 170),
        width: linkRect.width + 15 + 'px',
        height: linkRect.height + 5 + 'px',
        left: (linkRect.left + linkRect.right) / 2 + 'px',
        top: (linkRect.top + linkRect.bottom) / 2 + 'px',
        borderRadius: '5px',
        opacity: '0.3'
      });
    } else {
      Object.assign(c.style, {
        zIndex: 9999,
        background: rgb(52, 205, 120),
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        opacity: '0.9'
      });
    }
  });
});

document.documentElement.style.cursor = 'none';
