function ind()
{
    var x=document.getElementById("num").value;
    var ad='http://localhost:3001/players/list/'+x;
    fetch(ad)
    .then(response=>response.json())
    .then(data=>document.write(JSON.stringify(data)));
}

