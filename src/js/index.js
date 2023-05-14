const botaotema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");

const  imagemlua = document.querySelector(".imge-botao");
botaotema.addEventListener("click",()=>{ const modoEscuroA = body.classList.contains("modo-escuro");
   body.classList.toggle("modo-escuro");

   if(modoEscuroA) {
   imagemlua.setAttribute("src","./src/imagens/sun.png");}
   else{
      imagemlua.setAttribute("src","./src/imagens/moon.png");
       }
      });