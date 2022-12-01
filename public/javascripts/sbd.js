let catSelectEl = document.getElementById('cat')
catSelectEl.addEventListener('click', getName)

let nameSelectEl = document.getElementById('name')
console.log(nameSelectEl)



function getName(evt) {
    nameSelectEl.innerHTML = ""
    let category = evt.target.value
    categories[category].forEach(name => {
        let opEl = document.createElement('option')
        opEl.value = name
        opEl.innerHTML = name 
        nameSelectEl.appendChild(opEl)      
    })   
}

let categories = {
    Squat: ['Comp Squat', 'Paused Squat', 'Tempo Squat'],
    Bench: ['Comp Bench', 'Paused Bench', 'Tempo Bench'],
    Deadlift: ['Comp Deadlift', 'Paused Deadlift', 'Sumo Deadlift'],
}


