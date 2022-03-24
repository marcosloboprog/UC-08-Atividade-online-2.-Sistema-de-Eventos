// Cadastrando os Eventos

console.log("Cadastre seu evento aqui!")
var dataAtual = new Date ()
let dataDoEvento = "2022-03-22"
let nomeDoEvento = "Workshop API's"
let nomeDoPalestrante = "Caique"
listaDePalestrantes = ["Caique", "Filomeno", "Rubenilda"]

    if (dataDoEvento == dataAtual){
        console.log("Data inválida.")
    } else {
        console.log(nomeDoEvento+" do palestrante "+nomeDoPalestrante+ " foi agendado com sucesso. Dia "+ dataDoEvento +".")
    }

// Cadastro do Participante

console.log ("SAVINI EVENTOS")
console.log ("Para participar de uma de nossas palestras faça aqui o seu cadastro.")
console.log ("Insira sua idade.")
let idade = 72
    if(idade > 18) {
        console.log ("Agora insira seu nome.")
    }else {
        console.log ("Evento não é permitido para menores.")
    }
    let nomeDoParticipante = "Carimbo da Silva" 
    

    //lista de participantes

    var listaDeParticipantes = ["Helena", "Chico", "Mário", "José", "Maria", "Marcos"+"," + nomeDoParticipante];

    if (listaDeParticipantes.length < 100) {
        console.log(nomeDoParticipante + ", você está inscrito no evento: " + nomeDoEvento+ ".")}else {
            console.log("Limite de vagas esgotado.")
        }
	   
	    console.log("Lista de participantes:" + listaDeParticipantes +".");
        console.log ("Lista de palestrantes: "+ listaDePalestrantes +".")


