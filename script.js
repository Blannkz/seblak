document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let menu = document.getElementById("menu").value;
    let qty = document.getElementById("qty").value;
    
    document.getElementById("orderResult").innerText = 
        `Terima kasih, ${name}! Pesanan ${qty} ${menu} Anda sedang diproses.`;
});
