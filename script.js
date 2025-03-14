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
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    // Coba autoplay saat halaman dimuat
    audio.volume = 0.5; // Set volume lebih kecil agar tidak terlalu berisik
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay diblokir, menunggu interaksi pengguna...");
        });
    }

    // Tombol untuk mute/unmute musik
    musicBtn.addEventListener("click", function () {
        if (audio.muted) {
            audio.muted = false;
            musicBtn.textContent = "Mute Musik";
        } else {
            audio.muted = true;
            musicBtn.textContent = "Play Musik";
        }
    });

    // Autoplay saat user pertama kali klik di halaman
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    }, { once: true });
});
