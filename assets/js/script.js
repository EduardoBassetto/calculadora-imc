const botao = document.querySelector("[data-botao]")

botao.addEventListener("click", calculo)

function calculo(){
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector("#altura").value
    const peso = document.querySelector("#peso").value
    const main = document.querySelector("[data-main]")
    const altura2 = altura*2
    const imc = peso/altura2
    const imc2 = imc*100

    const caixaTexto = document.querySelector(".textoResultado")
    
    if (imc2 <18.5){
        caixaTexto.innerHTML =  nome+ " seu IMC é de: " + imc2.toFixed(2) + "." + `<br>` + "Você está abaixo do peso ideal."
    } else if (imc2 < 24.9) {
        caixaTexto.innerHTML = nome+ " seu IMC é de: " + imc2.toFixed(2) + "." + `<br>` + "Você está no peso ideal."
    } else if (imc2 < 29.9) {
        caixaTexto.innerHTML = nome+ " seu IMC é de: " + imc2.toFixed(2) + "." + `<br>` + "Você está com sobrepeso."
    } else if (imc2 < 34.9) {
        caixaTexto.innerHTML = nome+ " seu IMC é de: " + imc2.toFixed(2) + "." + `<br>` + "Você está com Obesidade Grau 1"
    } else if (imc2 < 39.9) {
        caixaTexto.innerHTML = nome+ " seu IMC é de: " + imc2.toFixed(2) + "." + `<br>` + "Você está com Obesidade Grau 2"
    } else {
        caixaTexto.innerHTML = nome+ " seu IMC é de: " + imc2.toFixed(2) + "." + `<br>` + "Você está com Obesidade Grau 3"
    }

   const button = document.createElement("button")
   main.appendChild(button).innerHTML = "Novo"
   button.classList.add('novo')
   botao.style.display = "none" 
  
   const novo = document.querySelector(".novo")

   console.log(novo)
    novo.addEventListener("click", refresh)

    function refresh(){
        location.reload()
    }
}

