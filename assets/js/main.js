const botao = document.querySelectorAll('.botao');
const numeros = document.querySelector('.numeros');
let contador = 0;

botao.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const numero = e.currentTarget.classList;
    if(numero.contains("aumenta")) {
      contador++;
    } else if(numero.contains("diminui")) {
      contador--;
    } else {
      contador = 0;
    }
    if (contador > 0) {
      numeros.style.color = 'green';
    }
    if (contador < 0) {
      numeros.style.color = 'red';
    }
    if (contador == 0) {
      numeros.style.color = 'black';
    }
    numeros.textContent = contador;
  });
});
  