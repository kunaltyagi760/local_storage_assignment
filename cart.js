let cart = JSON.parse(localStorage.getItem("cart")) || []

let container = document.querySelector(".div-container")

function deleteCard(userId){
    cart = cart.filter((item) => item.id !== userId)

    localStorage.setItem("cart", JSON.stringify(cart))

    location.reload()
}

if (cart.length === 0){
    container.innerHTML = `<p>Cart is empty!</p>`
}
else{
    function displayCard(users){
        users.forEach((user) =>{
            let card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `<h2>Name: ${user.name}</h2>
            <br>
            <h4>Username: ${user.username}</h4>
            <h4>Email: ${user.email}</h4>
            <br>
            <button class="btn1" onclick="deleteCard(${user.id})">Delete</button>`
    
            container.append(card)
        })
    }
    
    displayCard(cart)
}


