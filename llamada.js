function todos() {
    fetch('todos.json')

    .then(data => data.text())

    .then(data => {​​console.log(data)
    })
}
