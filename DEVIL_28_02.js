let students= [
	{'id':1,'name':'Андрей', 'surname': 'Твердохлеб'},
	{'id':2,'name':'Юрий', 'surname': 'Соколов'},
	{'id':3,'name':'Никита', 'surname': 'Зимовец'},
	{'id':4,'name':'Аркадий', 'surname': 'Паровозов'},
	{'id':5,'name':'Генадий', 'surname': 'Кантаев'}
]

function loadStudents(){
	let table = document.getElementById('tbl_all')

	for (let i = 0; i < students.length; i++){
		let tr = document.createElement('tr')
			let td1 = document.createElement('td')
			let td2 = document.createElement('td')
			let td3 = document.createElement('td')
		td1.textContent = students[i].id
		td2.textContent = students[i].name
		td3.textContent = students[i].surname
			tr.appendChild(td1)
			tr.appendChild(td2)
			tr.appendChild(td3)

		table.appendChild(tr)
	}
}
