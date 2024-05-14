let kitab1 = { ad: "Cinayət və Cəza", yazar: "Fyodor Dostoyevsky", qiymət: 7, rəf: "1.5.RƏF" }
let kitab2 = { ad: "Səfillər", yazar: "Viktor Hügo", qiymət: 9, rəf: "2.3.RƏF" }
let kitab3 = { ad: "İnsan Nə İlə Yaşayır", yazar: "Lev Tolstoy", qiymət: 6, rəf: "3.4.RƏF" }
let kitab4 = { ad: "Relslər Üzərinə Uzanmış Adam", yazar: "Rövşən Abdullaoğlu", qiymət: 7, rəf: "4.1.RƏF" }
let kitab5 = { ad: "Yalnızlıqdan Şizofreniyaya", yazar: "OAR", qiymət: 6, rəf: "5.3.RƏF" }

let kitablar = [kitab1, kitab2, kitab3, kitab4, kitab5];


let rəf11 = { kod: "1.1.RƏF", göstər: false }
let rəf12 = { kod: "1.2.RƏF", göstər: false }
let rəf13 = { kod: "1.3.RƏF", göstər: false }
let rəf14 = { kod: "1.4.RƏF", göstər: false }
let rəf15 = { kod: "1.5.RƏF", göstər: false }

let rəf21 = { kod: "2.1.RƏF", göstər: false }
let rəf22 = { kod: "2.2.RƏF", göstər: false }
let rəf23 = { kod: "2.3.RƏF", göstər: false }
let rəf24 = { kod: "2.4.RƏF", göstər: false }
let rəf25 = { kod: "2.5.RƏF", göstər: false }

let rəf31 = { kod: "3.1.RƏF", göstər: false }
let rəf32 = { kod: "3.2.RƏF", göstər: false }
let rəf33 = { kod: "3.3.RƏF", göstər: false }
let rəf34 = { kod: "3.4.RƏF", göstər: false }
let rəf35 = { kod: "3.5.RƏF", göstər: false }

let rəf41 = { kod: "4.1.RƏF", göstər: false }
let rəf42 = { kod: "4.2.RƏF", göstər: false }
let rəf43 = { kod: "4.3.RƏF", göstər: false }
let rəf44 = { kod: "4.4.RƏF", göstər: false }
let rəf45 = { kod: "4.5.RƏF", göstər: false }

let rəf51 = { kod: "5.1.RƏF", göstər: false }
let rəf52 = { kod: "5.2.RƏF", göstər: false }
let rəf53 = { kod: "5.3.RƏF", göstər: false }
let rəf54 = { kod: "5.4.RƏF", göstər: false }
let rəf55 = { kod: "5.5.RƏF", göstər: false }


let rəflər = [
    [rəf51, rəf52, rəf53, rəf54, rəf55],
    [rəf41, rəf42, rəf43, rəf44, rəf45],
    [rəf31, rəf32, rəf33, rəf34, rəf35],
    [rəf21, rəf22, rəf23, rəf24, rəf25],
    [rəf11, rəf12, rəf13, rəf14, rəf15]
];


function rəfYarat() {

    console.clear();

    let sətir = "";

    for (let i = 0; i < rəflər.length; i++) {

        for (let j = 0; j < 5; j++) {
            sətir += "|" + (rəflər[i][j].göstər ? rəflər[i][j].kod : "---") + "|";

        }

        document.write(sətir);
        console.log(sətir)
        sətir = "";
    }

}

function kodTap(kitapAdı) {

    let rəfKod = null;

    kitablar.forEach(function (kitab) {

        if (kitab.ad.toUpperCase().includes(kitapAdı.toUpperCase(), 0)) {
            rəfKod = kitab.rəf;
        }

    });
    return rəfKod;
}

function rəfdəGöstər(rəfKodu) {

    for (let i = 0; i < rəflər.length; i++) {

        for (let j = 0; j < 5; j++) {

            if (rəflər[i][j].kod == rəfKodu) {
                rəflər[i][j].göstər = true;
                break;
            }

        }
    }
}

rəfYarat();

let kitabAdı = prompt("Zəhmət olmasa bir kitab adı daxil edin");
let rəfKod = kodTap(kitabAdı);

if (rəfKod != null) {
    rəfdəGöstər(rəfKod);
    rəfYarat();
}
else {
    alert("Adını daxil etdiyiniz kitab kitabxanamızda yoxdur");
}