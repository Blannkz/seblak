<?php
$servername = "localhost"; // Ganti dengan host database kamu
$username = "root"; // Ganti dengan username database kamu
$password = ""; // Ganti dengan password database kamu
$dbname = "seblak_db"; // Ganti dengan nama database kamu

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$name = $_POST['name'];
$menu = $_POST['menu'];
$qty = $_POST['qty'];

$sql = "INSERT INTO orders (name, menu, qty) VALUES ('$name', '$menu', '$qty')";

if ($conn->query($sql) === TRUE) {
    echo "Pesanan berhasil disimpan!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
