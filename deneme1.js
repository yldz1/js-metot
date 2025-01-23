//metot oluşturma nasıl olunur örneklerde yapalım bakalım .parametresiz ve geriye dönemeyen metot kodu yazalım bakalım .
function yazdir() {
    consoleçlog("yıldız.");
}
yazdir();//bu metot çalıştırır.

//parametreli metot nasıl rranımlanır 
function yazdir(isim, soyisim) {
    debugger;
    console.log(isim + " " + soyisim);


}
debugger;
yazdir("yıldız", "nur");
//çalıştırdığında isim soyisim şeklinde yazıcak burda 
//bu metot giibi örnekler yap mesela basit bir iki sayıyı toplayan bir metot yapalım 
function toplama(a, b) {
    return a + b;
}
const sonuc = toplama(5, 7);
console.log("Toplam:", sonuc);//basit ir toplama işlemi 


//mesaj gönderme metotu yapalım 
function mesajGonder(isim, mesaj) {
    console.log(`${isim},${mesaj}`);

}
mesajGonder("yıldız", "hoş geldin babysi");




//örnek
function selamVer(isim = "ziyaretçi") {
    console.log(`merhaba,${isim}!`);
}
selamVer("Ali");
selamVer();


//listeyi döngü işleme yapalım 
function listeyiYazdir(liste) {
    liste.forEach(function (eleman) {
        console.log(eleman);

    })
}
const meyveler = ["Elma", "Armut", "Kiraz"];
listeyiYazdir(meyveler);


//bir sayının porzitif mi yoksa negatifmi olduğunu kontrol etme metotu 
function porzitifMi(sayi) {
    if (sayi > 0) {
        return `${sayi} pozitif bir sayıdır.`;

    } else if (sayi < 0) {
        return `${sayi} negatif bir sayıdır.`;
    } else {
        return "sayı sıfırdır.";
    }
}//bundan sonra da yazdırılıcak rakamları yazıyosun console loga ve o da karar veriyor doğru mu diye 
console.log(porzitifMi(4));
console.log(porzitifMi(-8));
console.log(porzitifMi(-3));
//bunlara kendi karar veriyor




//iki sayı arasındaki en büyük sayı dğerini bulamk 
function enbuyukSayi(sayi1, sayi2) {
    return sayi1 > sayi2 ? sayi1 : sayi2;
}
const sonucu = enbuyukSayi(10, 40);
console.log("En büyük sayi:", sonuc);//en büyük sayıyı yazdırır ekrana





