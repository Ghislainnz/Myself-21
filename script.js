<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Alert JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f9;
        }
        #sapaButton {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        #sapaButton:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <button id="sapaButton">Sapa Saya!</button>

    <script>
        /**
         * Menginisialisasi fungsionalitas tombol sapa.
         * Menggunakan DOMContentLoaded adalah praktik terbaik untuk memastikan
         * seluruh HTML telah dimuat sebelum mencoba memanipulasi elemen.
         */
        document.addEventListener('DOMContentLoaded', () => {
            const tombolSapa = document.getElementById('sapaButton');

            // **Validasi Elemen:** Pastikan elemen tombol benar-benar ditemukan
            if (tombolSapa) {
                // Menggunakan arrow function untuk handler event
                tombolSapa.addEventListener('click', () => {
                    // Alert standar
                    alert('Halo, nama ku Arjun!');
                });
            } else {
                // Opsional: Tulis pesan error ke console jika tombol tidak ditemukan
                console.error("Elemen dengan ID 'sapaButton' tidak ditemukan di DOM.");
            }
        });
    </script>

</body>
</html>
