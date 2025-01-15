async function getData() {
    const data = await fetch("https://fakestoreapi.com/products").then(res => res.json())
    // console.log(data);

    for (i = 0; i < data.length; i++) {
        let card = document.createElement("card");
        card.innerHTML = `<img src="${data[i].image}" width="250"/>
        <p>${data[i].title}</p>`
        // img.src = `${data[i].image} `
        console.log(data)
        document.body.append(card)
    }
    console.log(data);
}
getData()