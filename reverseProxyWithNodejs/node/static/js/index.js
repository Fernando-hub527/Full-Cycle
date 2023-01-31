
function sendUser(){
    const nameField = document.getElementById("nome")
    axios.post('http://localhost:8080/user', {name: nameField.value}).then(()=>{
        nameField.value = ""
        loadUsers()
    })
}

function loadUsers(){
    axios.get('http://localhost:8080/user')
        .then((res)=>{
            console.log(res.data)
            names = res.data.user
            var list = document.getElementById('userIds')
            var namesHtml = ""
            names.forEach(element => {
                namesHtml += `<li>${element.name}</li>`
            });
            list.innerHTML = namesHtml
        })
}
loadUsers()