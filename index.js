let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

function addToCart(userId){
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let addUser = user.find((item) => item.id === userId)

    cart.push(addUser)

    localStorage.setItem("cart", JSON.stringify(cart))
}

function displayCard(users){
    let container = document.querySelector(".div-container")
    users.forEach((user) =>{
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<h2>Name: ${user.name}</h2>
        <br>
        <h4>Username: ${user.username}</h4>
        <h4>Email: ${user.email}</h4>
        <br>
        <button class="btn1" onclick="addToCart(${user.id})">Add to cart</button>`

        container.append(card)
    })
}

displayCard(user)