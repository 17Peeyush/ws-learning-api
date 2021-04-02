

function show(){
fetch('http://localhost:3001/players/list')
.then(response => response.json())
.then(data => document.write(JSON.stringify(data)));
}