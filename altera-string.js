let email = document.querySelector('.email');
let emailString = email.textContent = "bruno.braga@bbmprojects.com.br";

let emailSeparado = emailString.split("@");
console.log(emailSeparado);
const emailPrefixo = emailSeparado[0];
console.log(emailPrefixo);
const prefixoTamanho = emailPrefixo.length;
console.log(prefixoTamanho);
const inicioPrefixo = emailPrefixo.substring(0,2);
console.log(inicioPrefixo);
const repeatString = '*'.repeat(prefixoTamanho - 2);
console.log(repeatString);
const emailModificado = `${inicioPrefixo}${repeatString}@${emailSeparado[1]}`;
console.log(emailModificado);
let resultado = email.textContent = emailModificado;
console.log(resultado);
//comentário para subida github