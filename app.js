const passwordInput = document.getElementById("password");
const lenght = 12; // 8, 12, 16 arasında olabilir burası sana kalmış...

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowerCase = "abcdefghijklmnopqrstuvwyz";
const number = "0123456789";
const symbol = "@#$^%$*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

/*
upperCase[Math.floor(Math.random() * upperCase.length)] ifadesi, rastgele seçilen büyük harfi içeren bir dize elemanını temsil eder.
Bu büyük harf, mevcut password değişkenine eklenir.
*/

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordInput.value = password;
}

function copyPassword(){
   passwordInput.select();
 document.execCommand('copy');
   }

   /*
   
   execCommand, artık önerilmeyen bir özelliktir ve kullanılmamalıdır. Bu yöntem, web sayfalarında çeşitli komutları uygulamak için kullanılır. Bazıları panoya erişim sağlar, diğerleri form girdilerini düzenlemek, contenteditable öğelerini düzenlemek veya belgeleri (tasarım moduna geçildiğinde) düzenlemek içindir. Panoya erişim için daha yeni bir yöntem olan Clipboard API, execCommand'dan daha önerilir.
   
   
   */