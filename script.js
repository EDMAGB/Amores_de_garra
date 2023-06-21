let block = document.querySelector('.jlehmann');
let mas = document.getElementsByClassName('layer');
let j = 0;
let delta = 0;
let h = mas[j].offsetHeight;
let z = 50;
let s = 0.3;

for (let i = 0; i < mas.length; i++) {
  z = z - 1;
  mas[i].style.zIndex = z;
}

function scrollBlock(event) {
  event = event || window.event;

  // Obtener la posición y el desplazamiento del gesto táctil
  let touch = event.touches[0] || event.changedTouches[0];
  let deltaY = touch.clientY - startY;

  delta = delta + Math.round(deltaY);
  mas[j].style.top = `${-(delta * s)}px`;

  if ((delta * s) >= h) {
    j = j + 1;
    delta = 0;
  }

  if ((-delta * s) > 0 && j !== 0) {
    mas[j].style.top = null;
    j = j - 1;
    delta = h * 10 / (s * 10);
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

let startY = 0;

block.addEventListener('touchstart', function(event) {
  // Obtener la posición inicial del gesto táctil
  let touch = event.touches[0] || event.changedTouches[0];
  startY = touch.clientY;
});

block.addEventListener('touchmove', scrollBlock);

// let block = document.querySelector('.jlehmann'),
// 	mas = document.getElementsByClassName('layer'),
// 	j = 0,
// 	delta = 0,
// 	h = mas[j].offsetHeight, //height of blocks
// 	z = 500, // z-index value
// 	s = 0.3//  speed of scrool

// 	for (let i = 0; i < mas.length; i++) {
// 		z = z - 1;
// 		mas[i].style.zIndex = z;
// 	}

// function scrollBlock (event) {
// 	event = event || window.event;
// 	delta = delta + Math.round(event.deltaY);
// 	mas[j].style.top = `${-(delta*s)}px`;
// 	//IF SCROLL DOWN
// 	if ((delta*s) >= h) {
// 		j = j + 1;
// 		delta = 0;
// 	}
// 	//IF SCROLL UP
// 	if ((-delta*s) > 0 && j !== 0) {
// 		mas[j].style.top = null;
// 		j = j - 1;
// 		delta = h*10/(s*10)
// 		mas[j].style.top = `${-(delta*s)}px`;
// 	}
// 	//IF SCROLL DOWN ON THE LAST BLOCK
// 	if (j == mas.length - 1) {
// 		mas[j].style.top = null;
// 		delta = 0;
// 	}
// 	//IF SCROLL UP ON THE FIRST BLOCK
// 	if (j == 0) {
// 		if ((-delta*s) > 0) {
// 			mas[j].style.top = null;
// 			delta = 0;
// 		}
// 	}
// }

// block.addEventListener('mousewheel', scrollBlock)