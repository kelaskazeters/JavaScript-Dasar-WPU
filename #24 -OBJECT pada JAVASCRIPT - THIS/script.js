// this
// var a = 10;
// console.log(window.a)



// Membuat object

// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log("Hello World!");
// }

// halo()

// cara 2 - object literal
// var obj = {a : 10, nama : "Rafliano"}
// obj.halo = function () {
//     console.log(this)
//     console.log("Halo");
// }
// obj.halo();
// this mengembalikan object yarg bersangkutan

// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log("Hello World!");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat