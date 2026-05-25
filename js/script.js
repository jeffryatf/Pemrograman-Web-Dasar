// js/script.js - Data Menu Restoran Sederhana

const menuRestoran = [
    { nama: "Nasi Goreng Spesial", harga: 25000, kategori: "Makanan" },
    { nama: "Sate Ayam Madura", harga: 30000, kategori: "Makanan" },
    { nama: "Gado-Gado Jakarta", harga: 20000, kategori: "Makanan" },
    { nama: "Rendang Daging", harga: 35000, kategori: "Makanan" },
    { nama: "Es Teh Manis", harga: 5000, kategori: "Minuman" },
    { nama: "Es Jeruk Segar", harga: 7000, kategori: "Minuman" }
];

function tampilkanMenu() {
    console.log("=== Daftar Menu Restoran Sederhana ===");
    for (let i = 0; i < menuRestoran.length; i++) {
        const item = menuRestoran[i];
        console.log(`${i + 1}. ${item.nama} - Rp ${item.harga} [${item.kategori}]`);
    }
    console.log("=====================================");
}

tampilkanMenu();