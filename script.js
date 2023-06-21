let block = document.querySelector('.jlehmann'),
	mas = document.getElementsByClassName('layer'),
	j = 0,
	delta = 0,
	h = mas[j].offsetHeight, //height of blocks
	z = 500, // z-index value
	s = 0.3//  speed of scrool

	for (let i = 0; i < mas.length; i++) {
		z = z - 1;
		mas[i].style.zIndex = z;
	}

    function scrollBlock(event) {
        event = event || window.event;
        let deltaY;
    
        if (event.deltaY) {
            deltaY = event.deltaY;
        } else if (event.touches) {
            deltaY = event.touches[0].clientY - event.touches[1].clientY;
        } else {
            deltaY = 0;
        }
    
        delta = delta + Math.round(deltaY);
        mas[j].style.top = `${-(delta * s)}px`;
    
        // IF SCROLL DOWN
        if ((delta * s) >= h) {
            j = j + 1;
            delta = 0;
        }
    
        // IF SCROLL UP
        if ((-delta * s) > 0 && j !== 0) {
            mas[j].style.top = null;
            j = j - 1;
            delta = (h * 10) / (s * 10);
            mas[j].style.top = `${-(delta * s)}px`;
        }
    
        // IF SCROLL DOWN ON THE LAST BLOCK
        if (j == mas.length - 1) {
            mas[j].style.top = null;
            delta = 0;
        }
    
        // IF SCROLL UP ON THE FIRST BLOCK
        if (j == 0) {
            if ((-delta * s) > 0) {
                mas[j].style.top = null;
                delta = 0;
            }
        }
    }
    
    block.addEventListener("wheel", scrollBlock);
    block.addEventListener("touchmove", scrollBlock);
    