document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let menu = document.getElementById("menu").value;
    let qty = document.getElementById("qty").value;

    let orderList = document.getElementById("orderList");
    let newOrder = document.createElement("li");
    newOrder.innerText = `${name} memesan ${qty} ${menu}`;
    
    orderList.appendChild(newOrder);
    
    document.getElementById("orderForm").reset();
});
