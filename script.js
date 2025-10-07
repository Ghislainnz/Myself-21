<script>
    // Menggunakan DOMContentLoaded: Ini menjamin skrip hanya akan berjalan 
    // setelah seluruh elemen HTML (termasuk tombol) telah dimuat.
    document.addEventListener('DOMContentLoaded', () => {
        
        // Cek ID tombol: Pastikan ini cocok dengan <button id="sapaButton">
        const tombolSapa = document.getElementById('sapaButton');

        // Validasi: Hanya tambahkan listener jika tombol ditemukan
        if (tombolSapa) {
            tombolSapa.addEventListener('click', () => {
                alert('Halo, nama ku Arjun!');
            });
        } else {
            // Jika tombol tidak ditemukan, tampilkan pesan di Console
            console.error("Kesalahan: Elemen 'sapaButton' tidak ditemukan di halaman.");
        }
    });
</script>
