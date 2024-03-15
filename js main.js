const botoes= querySelectorAll(".botao");

for(let i= 0; i< botoes.length; i++) {
    botoes[i].onclick = function(){
        for (j=; j< botoes.length; j++){
            botoes[j].remove ("ativo");
        }
    botoes[i].classlist.add("ativo");
    }
  
}
