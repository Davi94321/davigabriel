const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Jubileu estava na escola como normalmente, até que a professora é interrompida por jovens universitários que estavam passando de sala em sala apresentando uma palestra sobre As Queimas das Florestas no Brasil. Logo Jubileu ficara interesssado no assunto, pois era muito importante.",
        alternativas: [
            {
                texto: "Prestar atenção atentamente à palestra.",
                afirmacao: "afirmacao"
            },
            {
                texto: "To nem aí fi.",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Antes que todos da turma possam pensar em algo, os jovens universitários trazem consigo uma maquete ultra realista em 4k hd, fazendo com que todos olhem impressionados. Os jovens então, chamam todos para se aproximarem.",
        alternativas: [
            {
                texto: "Observar a maquete de perto.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não quero sabe vou ver de longe.",
                afirmacao: "afirmacao"
            },
            
        ]
    },
    {
        enunciado: "A palestra se segue com os universitários explicando e alertando sobre os perigos e riscos das queimadas, principalmente na amazônia e pantanal. Também conscientizaram a como ajudar a combater as mesmas, de que como que doando fundos às ONGs e instituições que auxiliam no combate dos incêndios pode ajudar efetivamente, assim como cobrar e criticar os representantes políticos.",
        alternativas: [
            {
                texto: "Caramba muito legal mesmo, realmente muito importante, ameeeei a aula.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Receba informação, muito interessante, adoro florestas.",
                afirmacao: "afirmacao"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "Com sua massa encefálica levemente mais pesada e sua visão de mundo mais amostoradinha, Jubileu etende os riscos, deveres e o que fazer para ajudar ao combate às queimadas da amazônia. Assim, os jovens encerram a palestra e se retiram da sala com uma salva de palmas.";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mastraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultados(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
