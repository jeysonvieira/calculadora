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

    var teste = []

    var teste2 = []

    var expressao = []

    var contador = 0


    function adc(){
        var tecla = event.target.dataset

        var tela = document.getElementById("tela_valores")

        if(tecla.valor){

                valores.push(tecla.valor)

                var valoresTela = Number(valores.join(''))

                tela.innerHTML += tecla.valor

                console.log(valoresTela)

                teste.push(valores[0])

                console.log(teste)

                valores.pop()

        }

        else{

            var operador = tecla.funcao

            expressao.push(operador)

            tela.innerHTML += ' ' + operador + ' '

            teste2.push(teste.join(''))

            var tamanho1 = teste.length

            console.log(operador)

            console.log(expressao)

            //console.log(teste)

            console.log(teste2)

            teste.splice(0, teste.length)

            contador++

            if(contador == 2){

                contador = 0

                if(expressao[0] == '+'){
                    var soma = Number(teste2[0]) + Number(teste2[1])
                    expressao.splice(0, expressao.length)

                    tela.innerHTML += soma + '| '


                }

                else if(expressao[0] == '-'){
                    var subtracao = Number(teste2[0]) - Number(teste2[1])
                    expressao.splice(0, expressao.length)

                    tela.innerHTML += subtracao + '| '

                }

                else if(expressao[0] == '*'){
                    var multiplicacao = Number(teste2[0]) * Number(teste2[1])
                    expressao.splice(0, expressao.length)

                    tela.innerHTML += multiplicacao + '| '

                }

                else if(expressao[0] == '/'){
                    var divisao = Number(teste2[0]) / Number(teste2[1])
                    expressao.splice(0, expressao.length)

                    tela.innerHTML += divisao + '| '
                }

                teste2.splice(0, teste2.length)

            }

            






        }
    }





}