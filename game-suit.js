var tanya = true;
while (tanya) {
    // menampilkan pilihan player
    var p = prompt('Pilih  : Gunting, Batu, Kertas');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'Gunting';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Batu';
    } else {
        comp = 'Kertas';
    }

    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'Gunting') {
        // if (comp == 'Kertas') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH'
        // }
        hasil = (comp == 'Kertas') ? 'MENANG' : 'KALAH';
    } else if (p == 'Batu') {
        // if (comp == 'Gunting') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'Gunting') ? 'MENANG' : 'KALAH';
    } else if (p == 'Kertas') {
        // if (comp == 'Batu') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'Batu') ? 'MENANG' : 'KALAH';
    } else {
        hasil = ('salah memasukkan pilihan!');
    }
    alert('Anda memilih : ' + p + '\nKomputer memilih : ' + comp + '\nMaka hasilnya : Anda ' + hasil);
    tanya = confirm('Ingin bermain lagi?');
}
alert('Terima Kasih!');