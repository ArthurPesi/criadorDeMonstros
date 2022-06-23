const cabecas = ["Tortuga/cabecaTortuga.png",
                "Griffin/cabecaGriffin.png",
                "Olhudo/cabecaOlhudo.png",
                "Zumbi/cabecaZumbi.png",
                "Fantasma/cabecaFantasma.png"];
const corpos = ["Tortuga/corpoTortuga.png",
                "Griffin/corpoGriffin.png",
                "Olhudo/corpoOlhudo.png",
                "Zumbi/corpoZumbi.png",
                "Fantasma/corpoFantasma.png"];
const bracos = ["Tortuga/bracoTortuga.png",
                "Griffin/bracoGriffin.png",
                "Olhudo/bracoOlhudo.png",
                "Zumbi/bracoZumbi.png",
                "Fantasma/bracoFantasma.png"];
const pernas = ["Tortuga/pernaTortuga.png",
                "Griffin/pernaGriffin.png",
                "Olhudo/pernaOlhudo.png",
                "Zumbi/pernaZumbi.png",
                "Fantasma/pernaFantasma.png"];

const ImgMembros = [cabecas,corpos,bracos,pernas];

const offsetCabecas = [0,-30,10,0,0]
const offsetTopPerna = [0,-10,0,0,-10]
const offsetTopBracos = [20,-60,20,20,20]
const offsetLeftBracos = [0,0,0,10,0]
const offsetLeftPernas = [0,0,0,0,-25]

const prefix = "sprites/";

const atributos = ["vida","velocidade","forca","constituicao"];


function criarMonstro()
{
    var elementoPai = document.getElementById("monstros");
    var carta = document.createElement("div"); 
    var monstro = document.createElement("div"); 
    var stats = document.createElement("div"); 
    carta.className = "carta"
    monstro.className = "monstro"
    stats.className = "stats"
    carta.style.width = "300px"
    elementoPai.appendChild(carta);
    carta.appendChild(monstro);
    carta.appendChild(stats);

    var sorteios = sortearMembros();
    var membros = criarMembros(sorteios, monstro);

    setTimeout(posicionar,100,sorteios, membros, carta);

    criarBarras(stats);
}

function sortearMembros() {
    var sorteios = [];
    for(var i = 0; i < 4; i++) {
        sorteios[i] = Math.floor(Math.random() * ImgMembros[i].length);
    }
    return sorteios;
}

function criarMembros(sorteios, monstro) {
    var membros = []
    for(var i = 0; i < 4; i++) {
        membros[i] = document.createElement("img");
        membros[i].className = "membros"
        if(i === 0 || i === 3) {
            membros[i].style.zIndex = 1
        }
        monstro.appendChild(membros[i])
        membros[i].src = prefix + ImgMembros[i][sorteios[i]];
    }
    return membros;
}

function posicionar(sorteios, membros, monstro) {
    var padding = parseInt(getComputedStyle(monstro).getPropertyValue('padding-left'))
    console.log(padding)
    var alturaCabeca = membros[0].clientHeight + offsetCabecas[sorteios[0]];
    var larguraCabeca = membros[0].clientWidth
    var alturaCorpo = membros[1].clientHeight;
    var larguraCorpo = membros[1].clientWidth;
    var larguraBraco = membros[2].clientWidth;
    var larguraPerna = membros[3].clientWidth;

    var leftBraco = ((parseInt(monstro.style.width) - larguraBraco) / 2) + padding;
    var topCorpo = alturaCabeca -10;
    var topBraco = alturaCabeca + offsetTopBracos[sorteios[2]];
    var topPerna = alturaCabeca + alturaCorpo -10 + offsetTopPerna[sorteios[3]];
    var leftCabeca = ((larguraBraco - larguraCabeca) / 2) + leftBraco;
    var leftCorpo = ((larguraBraco - larguraCorpo) / 2) + leftBraco;
    var leftPerna = ((larguraBraco - larguraPerna) / 2) + offsetLeftPernas[sorteios[3]] + leftBraco;
    leftBraco += offsetLeftBracos[sorteios[2]]
    membros[1].style.top = topCorpo.toString() + "px";
    membros[2].style.top = topBraco.toString() + "px";
    membros[3].style.top = topPerna.toString() + "px";

    membros[0].style.left = leftCabeca.toString() + "px";
    membros[1].style.left = leftCorpo.toString() + "px";
    membros[2].style.left = leftBraco.toString() + "px";
    membros[3].style.left = leftPerna.toString() + "px";
}
function criarBarras(stats) {
    for(var i = 0; i < 4; i++)
    {
        var sorteio = Math.floor(Math.random() * 101);
        var stat = document.createElement("div")
        var barra = document.createElement("div");
        var recheio = document.createElement("div");
        var atributo = document.createElement("p");
        stats.appendChild(stat)
        stat.appendChild(atributo)
        stat.appendChild(barra)
        barra.appendChild(recheio)
        stat.className = "stat"
        atributo.className = "atributo"
        barra.className = "barra"
        recheio.className = "recheio"
        atributo.innerHTML = atributos[i]
        recheio.style.width = sorteio.toString() + "%"
    }
}
