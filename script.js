// Menampilkan alert saat tombol WhatsApp diklik
document.addEventListener("DOMContentLoaded", function () {
    const waButton = document.querySelector(".btn");
    waButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah langsung berpindah halaman
        alert("Anda akan dialihkan ke WhatsApp untuk memesan!");
        window.location.href = waButton.href;
    });
});

// Efek hover pada menu
const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s";
    });

    item.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
