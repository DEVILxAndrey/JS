function sayHello(){
	alert('Hello, I am your pet rock')
}

function touchRock(){
	let userName = prompt('Как вас зовут?','Введите Ваше имя')

	if(userName){
			alert('Рад Вас видеть '+userName+'!')
			document.getElementById('NORM').src = 'Ulibka.png'
			setTimeout('document.getElementById("NORM").src = "NORM.png"',5000)
	}
}