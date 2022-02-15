let arr = [];

function create () {

let size = parseInt(document.getElementById('len').value);

for (let i=0; i<size; i++) {
	
	arr[i] = Math.floor(Math.random()*10);
}
print ()
} 

function zero ()
{
let size = parseInt(document.getElementById('len').value);

for (let i=0; i<size; i++)
{
	arr[i] = 0;
} 
print ()
}


function print(){
	let div =document.getElementById('massiv')
div.innerHTML = ' '
for (let i=0; i<arr.length; ++i) {
	
	div.innerHTML += arr[i] + ', ';
	}
}

/*console.log (arr[0]);

console.log (arr[1]);
console.log (arr[2]);
console.log (arr[3]);
console.log (arr[4]);
console.log (arr[5]);
console.log (arr[6]);*/