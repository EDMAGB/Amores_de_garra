let block = document.querySelector('.jlehmann'),
    mas = document.getElementsByClassName('layer'),
    j = 0,
    delta = 0,
    h = mas[j].offsetHeight,
    z = 500,
    s = 0.3;

for (let i = 0; i < mas.length; i++) {
    z = z - 1;
    mas[i].style.zIndex = z;
}

function scrollBlock(event) {
    event.preventDefault();
    let deltaY;

    if (event.type === 'touchmove') {
        deltaY = event.touches[0].clientY - event.touches[1].clientY;
    } else {
        deltaY = event.deltaY;
    }

    delta = delta + Math.round(deltaY);
    mas[j].style.top = `${-(delta * s)}px`;

    if ((delta * s) >= h) {
        j = j + 1;
        delta = 0;
    }

    if ((-delta * s) > 0 && j !== 0) {
        mas[j].style.top = null;
        j = j - 1;
        delta = (h * 10) / (s * 10);
        mas[j].style.top = `${-(delta * s)}px`;
    }

    if (j == mas.length - 1) {
        mas[j].style.top = null;
        delta = 0;
    }

    if (j == 0) {
        if ((-delta * s) > 0) {
            mas[j].style.top = null;
            delta = 0;
        }
    }
}

block.addEventListener('wheel', scrollBlock);
block.addEventListener('touchstart', scrollBlock);
block.addEventListener('touchmove', scrollBlock);
block.addEventListener('touchend', scrollBlock);
