window.onload = function(){

    //Click de números

    document.getElementById('numero_7').addEventListener("click", adc)

    document.getElementById('numero_8').addEventListener("click", adc)

    document.getElementById('numero_9').addEventListener("click", adc)

    document.getElementById('numero_4').addEventListener("click", adc)

    document.getElementById('numero_5').addEventListener("click", adc)

    document.getElementById('numero_6').addEventListener("click", adc)

    document.getElementById('numero_1').addEventListener("click", adc)

    document.getElementById('numero_2').addEventListener("click", adc)

    document.getElementById('numero_3').addEventListener("click", adc)

    document.getElementById('numero_0').addEventListener("click", adc)



    //Click de funções

    document.getElementById('divisao').addEventListener("click", adc)

    document.getElementById('multiplicacao').addEventListener("click", adc)

    document.getElementById('subtracao').addEventListener("click", adc)

    document.getElementById('ponto').addEventListener("click", adc)

    document.getElementById('igual').addEventListener("click", adc)

    document.getElementById('mais').addEventListener("click", adc)


    var valores = []


    function adc(){
        var obj = event.target.dataset

        var tela = document.getElementById("tela_valores")

        if(obj.valor || obj.funcao === Number){

            valores.push(obj.valor)

            tela.innerHTML = valores.join('')

            var valoresJuntos = valores.join('')

            console.log(Number(valoresJuntos))

            

        }

        else{
            tela.innerHTML = obj.funcao
            console.log(funcao)



        }
    }





}