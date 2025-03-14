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
    document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let menu = document.getElementById("menu").value;
    let qty = document.getElementById("qty").value;

    let order = { name, menu, qty };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    displayOrders();
    document.getElementById("orderForm").reset();
});

function displayOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let orderList = document.getElementById("orderList");
    orderList.innerHTML = "";
    
    orders.forEach(order => {
        let newOrder = document.createElement("li");
        newOrder.innerText = `${order.name} memesan ${order.qty} ${order.menu}`;
        orderList.appendChild(newOrder);
    });
}

// Menampilkan pesanan saat halaman dibuka kembali
document.addEventListener("DOMContentLoaded", displayOrders);
