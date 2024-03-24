// function  selamlama () {
//     console.log("merhabalar")
//     console.log("selamlar")
// }
//  console.log("SA")
//  selamlama()

//  function yasHesapla (dogumYili) {
//     console.log (new Date().getFullYear() - dogumYili) ;
//  }
//   yasHesapla(2006);
//   yasHesapla(2000);

//   function emekliliğeKaçYilKaldi (dogumYili ,isim) {
//     let yas = yasHesapla(dogumYili)


//   }

/*   function kelimeYazdir ( kelime , adet)  {
  for ( let i=0 ; i <    adet; i++ ) {
    console.log(kelime);
  }
  }
   
   let sonuç = kelimeYazdir("sanane aq", 5 );


   function yaziTura ( yazi , tura) {
    let yazi = Math.random

   } */

   let eklenecekSayi = randomSayi()
   const ad = prompt ("Adınız nedir")
   alert ("Oyun başlıyor")
   alert ("Aklından bir sayı tut")
   alert ("sayıyı ikiyle çarp")
   alert ( `Sonuca ${eklenecekSayi} ekle`)
   alert ("Çıkan sonucu ikiye böl")
   alert ("Sonuçtan ilk başta tuttuğun sayıyı çıkar")
   alert (`Cevap ${eklenecekSayi / 2 } `)
   alert ( `güle güle ${ad}`)
   
   function randomSayi() {
    const numbers = [2, 4, 6, 8];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}

