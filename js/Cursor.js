const c = document.createElement('div');
c.id = 'o';
document.body.append(c);

const s = document.createElement('style');
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
    c.style.position = 'absolute';
    c.style.pointerEvents = 'none';
    c.style.width = '30px';
    c.style.height = '30px';
    c.style.backgroundColor = '#66cdaa';
    c.style.backdropFilter = 'blur(8px) saturate(180%)';
    c.style.borderRadius = '50%';
    c.style.zIndex = '9999999999';
    c.style.border = '2px solid #fff';
    c.style.transition = 'opacity 0.3s ease, transform 0.3s ease, width 0.25s, height 0.5s, left 0.05s, top 0.05s, backdrop-filter 0.5s, background-color 0.2s';

    const hoveredElement = document.elementFromPoint(e.x, e.y);
    const linkRect = hoveredElement?.closest('a')?.getBoundingClientRect();

    if (linkRect) {
      c.style.zIndex = '-9999';
      c.style.backgroundColor = 'rgb(143, 1, 251)';
      c.style.width = linkRect.width + 15 + 'px';
      c.style.height = linkRect.height + 5 + 'px';
      c.style.left = (linkRect.left + linkRect.right) / 2 + 'px';
      c.style.top = (linkRect.top + linkRect.bottom) / 2 + 'px';
      c.style.borderRadius = '5px';
      c.style.opacity = '0.3';
    } else {
      c.style.zIndex = '9999';
      c.style.backgroundColor = 'rgb(255, 0, 175)';
      c.style.width = '35px';
      c.style.height = '35px';
      c.style.borderRadius = '50%';
      c.style.opacity = '0.9';
    }
  });
});

document.documentElement.style.cursor = 'none';
