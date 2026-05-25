const menuRestoran = [
    { nama: "Nasi Goreng Spesial", harga: 25000, kategori: "Makanan", deskripsi: "Nasi goreng dengan bumbu rempah pilihan." },
    { nama: "Sate Ayam Madura", harga: 30000, kategori: "Makanan", deskripsi: "Sate ayam dengan bumbu kacang khas Madura." },
    { nama: "Gado-Gado Jakarta", harga: 20000, kategori: "Makanan", deskripsi: "Salad sayur segar dengan saus kacang." },
    { nama: "Rendang Daging", harga: 35000, kategori: "Makanan", deskripsi: "Daging sapi empuk dengan bumbu rendang autentik." },
    { nama: "Es Teh Manis", harga: 5000, kategori: "Minuman", deskripsi: "Teh manis segar dengan es batu." },
    { nama: "Es Jeruk Segar", harga: 7000, kategori: "Minuman", deskripsi: "Jeruk peras segar tanpa gula tambahan." }
];

function renderMenu() {
    const wadah = document.querySelector("#menu");
    wadah.innerHTML = "";

    const judul = document.createElement("h2");
    judul.textContent = "Menu Unggulan";
    wadah.appendChild(judul);

    menuRestoran.forEach((item) => {
        const kartu = document.createElement("article");

        const nama = document.createElement("h3");
        nama.textContent = item.nama;
        kartu.appendChild(nama);

        wadah.appendChild(kartu);
		}
    );
}
renderMenu();