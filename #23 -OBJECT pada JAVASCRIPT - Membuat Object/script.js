//  Membuat Object
// Object Literal
var mhs1 = {
    nama : "Rafliano Ziyad",
    nrp : "043040023",
    email : "raflianoza@fakultas.ui.ac.id",
    jurusan : "Tehnik Informatika"
}

var mhs2 = {
    nama : "Le Mineralea",
    nrp : "043040012",
    email : "lemenrelale@ugm.ac.id",
    jurusan : "Tehnik Nuklir"
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {}
        mhs.nama = nama;
        mhs.nrp = nrp;
        mhs.email = email;
        mhs.jurusan = jurusan;
        return mhs;
}

var mhs3 = buatObjectMahasiswa("Jahela Oka", "043040041", "jahelaok@fakul.itb.ac.id");

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {}; 
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}


var mhs4 = new Mahasiswa("Erik Jo Andri", "043040014", "johandri@gunadharma.ac.id", "Matematika")