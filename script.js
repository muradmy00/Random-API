function findUser(){
    fetch("https://randomuser.me/api/")
    .then(Response => Response.json())
    .then(data => {document.getElementById("name").innerText = 
        `Hi! I am ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}
         I Live in ${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.country}
         
        `})


        //(`Hello`) = Template String
        
}


setInterval(findUser,4000);