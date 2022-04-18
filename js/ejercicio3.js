"use strict";
let ctx = /** @type {CanvasRenderingContext2D} */ (document.getElementById("myCanvas").getContext("2d"));
let width = 500;
let height = 500; 
let imageData = ctx.createImageData(width,height);

//instancio los colores
let r = 0;
let g = 0;
let b = 0;
let a = 255;//no hay transparencia

function drawRect(imageData, r, g, b, a){
    for(let x = 0; x < width; x++){//itero dentro del ancho
		//esto es para que el degrade sea hasta el final		
        for(let y = 0; y < height; y++){//itero dentro del largo
            let coeficiente = (255/ width); //coeficiente de avance
		    //degrade
		    let r = coeficiente * y;
            let g = coeficiente * y;
            let b = coeficiente * y;
		    let a = 255;
            setPixel(imageData, x, y, r, g, b, a);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a){
	let index = (x + y * imageData.width) * 4;
	imageData.data[index + 0] = r;
	imageData.data[index + 1] = g;
	imageData.data[index + 2] = b;
	imageData.data[index + 3] = a;
}

drawRect(imageData, r, g, b, a);//esto dibuja el rectangulo
ctx.putImageData(imageData, 0, 0);//en esta posicion