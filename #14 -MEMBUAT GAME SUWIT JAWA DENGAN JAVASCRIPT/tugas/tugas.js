let lagi = true;
var kesempatan = 3;
alert("Tebak Angka dari 1 - 10\nKamu punya " + kesempatan + " kali kesempatan");

while (lagi) {
    var angka = Math.floor(Math.random() * 10) + 1;
    for (kesempatan; kesempatan > 0; kesempatan--) {
        var p = prompt("Kesempatan ke- " + kesempatan);
        var j = kesempatan - 1;
        if (p == angka) {
            alert('Angka yg kamu masukkan : ' + p + '\nSelamat Kamu Benar');
            break;
        } else if (p < angka) {
            if (j == 0) {
                alert('Anda gagal.\nAngka yang dipilih computer : ' + angka);
            } else {
                alert('Terlalu Rendah...\nAyo kamu masih punya ' + j + 'x Kesempatan!');
            }
        } else if (p > angka) {
            if (j == 0) {
                alert('Anda gagal.\nAngka yang dipilih computer : ' + angka);
            } else {
                alert('Terlalu Tinggi...\nAyo kamu masih punya ' + j + 'x kesempatan!');
            }
        }
        
    }
    lagi = confirm("Main Lagi?");
}
