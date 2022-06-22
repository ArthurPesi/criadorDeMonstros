


function criarMonstro()
{
    var elementoPai = document.getElementById("monstros");
    var elementoFilho = document.createElement("div");    

    var sorteios = [];
    var membros = [];

    const prefix = "sprites/";
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

    const ImgMembros = [cabecas,corpos,bracos,pernas]

    elementoPai.appendChild(elementoFilho)

    for(var i = 0; i < 4; i++) {
        sorteios[i] = Math.floor(Math.random() * 5);

        membros[i] = document.createElement("img");
        membros[i].className = "membros"
        if(i === 0 || i === 3) {
            membros[i].style.zIndex = 1
        }
        elementoFilho.appendChild(membros[i])
        membros[i].src = prefix + ImgMembros[i][sorteios[i]];
    }

    setTimeout(posicionar,100,sorteios, membros);
    //barrasAleatorias(elementoFilho)
    

}
function posicionar(sorteios, membros) { 
    var numG = 0;
        if (sorteios[0] == 1)
        {
            var alturaCabeca = membros[0].clientHeight - 30;
        }
        else if (sorteios[0] == 2)
        {
            var alturaCabeca = membros[0].clientHeight + 10;

        }
        else
        {
        var alturaCabeca = membros[0].clientHeight;
        }
        var alturaCorpo = membros[1].clientHeight;
        var larguraCorpo = membros[1].clientWidth;
        if (sorteios[2] == 3)
        {
            larguraBraco = 60 + larguraCorpo;
        }
        else
        {
        var larguraBraco = membros[2].clientWidth;
        }
        var larguraCabeca = membros[0].clientWidth;

        var larguraPerna = membros[3].clientWidth;


        numG = alturaCabeca - 10;
        membros[1].style.top = numG.toString() + "px";
        if (sorteios[2] == 1)
        {
            var num = alturaCabeca - 50;
            membros[2].style.top = num.toString() + "px";
        }
        else
        {
            var num = alturaCabeca + 20;
            membros[2].style.top = num.toString() + "px";
        }
        numG = alturaCabeca + alturaCorpo - 10;
        membros[3].style.top = numG.toString() + "px";
        numG = ((larguraBraco - larguraCabeca) / 2);
        membros[0].style.left = numG.toString() + "px";
        numG = ((larguraBraco - larguraCorpo) / 2); 
        membros[1].style.left = numG.toString() + "px";

        if (sorteios[3] == 4)
        {
            num = ((larguraBraco - larguraPerna) / 2) - 25;
            membros[3].style.left =  num.toString() + "px";
        }
        else
        {
            var num =  ((larguraBraco - larguraPerna) / 2); 
            membros[3].style.left = num.toString() + "px";
        }

        if (sorteios[1] == 1)
        {
            var num  = membros[3].style.top - 10;
            membros[3].style.top = num.toString() + "px";
        }
    }
function barrasAleatorias(divMonstro)
{
    var sorteioVida = Math.floor(Math.random() * 101);
    var sorteioVelocidade = Math.floor(Math.random() * 101);
    var sorteioForca = Math.floor(Math.random() * 101);
    var sorteioConstituicao = Math.floor(Math.random() * 101); 
    for(var i = 0; i < 4; i++)
    {
        var barra = document.createElement("div");
        var linha = document.createElement("div");
        var recheio = document.createElement("div");
        var atributo = document.createElement("p");
        atributo.className = "atributo"
        atributo.id = "atributo"
        divMonstro.appendChild(linha)
        linha.appendChild(atributo)
        linha.appendChild(barra)
        barra.className = "barra"
        barra.id = "barra"
        barra.appendChild(recheio)
        recheio.className = "recheio"
        recheio.id = "recheio"
        if (i == 0)
        {
            atributo.innerHTML = "vida:"


            recheio.style.width = sorteioVida + "%"
        }

        if (i == 1)
        {
            atributo.innerHTML = "velocidade:"

            recheio.style.width = sorteioVelocidade + "%"
        }

        if (i == 2)
        {
            atributo.innerHTML = "forca:"
            recheio.style.width = sorteioForca + "%"
        }

        if (i == 3)
        {
            atributo.innerHTML = "constituicao:"

            recheio.style.width = sorteioConstituicao + "%"
        }
    }
}
