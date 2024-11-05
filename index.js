    // Tugas 1
    function greeting(nama) {
        console.log("Halo, " + nama + "! Selamat datang!");
    }
    greeting("Budi");
    greeting("Andi");

    // Tugas 2
    function hitungLuasPersegi(sisi) {
        return sisi * sisi;
    }  
    let luas = hitungLuasPersegi(5);
    console.log(luas);
    // Tugas 3
    function angka(angka1, angka2) {
        return angka1 + angka2;
    }
    let hasil = angka(10, 5);
    console.log(hasil);
    // Tugas 4
    function cekGanjilGenap(angka) {
        if (angka % 2 === 0) {
            console.log(`Angka ${angka} adalah genap`);
        } else {
            console.log(`Angka ${angka} adalah ganjil`);
        }
    }
    cekGanjilGenap(7);
    cekGanjilGenap(4);
    //  Tugas 5
    function hitungDiskon(harga, diskon) {
        let potongan = (harga * diskon) / 100;
        return harga - potongan;
    }
    
    // Contoh penggunaan
    let hargaSetelahDiskon = hitungDiskon(100000, 20); 
         console.log(hargaSetelahDiskon);
    // Tugas 6
    function cekUsiaMengemudi(usia) {
        if (usia >= 17) {
            console.log("Selamat! Kamu boleh mengemudi.");
        } else {
            console.log("Maaf, kamu belum cukup umur untuk mengemudi.");
        }
    }
    cekUsiaMengemudi(16);
    cekUsiaMengemudi(18); 