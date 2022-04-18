let array = []//Generamos la matriz
let maxHeight = 100;
let maxWidth = 100;
for( let x =0; x < maxWidth; x++){
	array[x] = []
	for( let y = 0; y < maxHeight; y ++){
	array [x][y] = Math.floor(Math.random() * 100);
	}
}

console.log(maximo);

function maximo(){ //punto a)
	let maximo 
	for( let x =0; x < maxWidth; x++){
		for( let y = 0; y < maxHeight; y ++){
			if(array[x][y] > maximo){
				maximo = array[x][y]
			}
		
		}	
	}
	console.log(maximo)	
}

parImpar();
function parImpar(){
	let maximo  = 0;
	let minimo = 0;
	for( let x =0; x < maxWidth; x++){
		for( let y = 0; y < maxHeight; y ++){
			if(x % 2 == 0 && array[x][y] >maximo){
				maximo = array[x][y];
			}else if(x % 2 != 0 && array[x][y] < minimo || minimo == 0){
				minimo = array[x][y];
			}
		
		}	
	}
	console.log("maximo:" + maximo);
	console.log("minimo:" + minimo);
}