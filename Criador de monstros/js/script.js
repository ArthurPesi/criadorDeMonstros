

function criarBotao()
{
    var elementoPai = document.getElementById("depois")
    var botao = document.createElement("button")
    elementoPai.appendChild(botao)
    botao.innerHTML = "+"
    botao.id = "botao"
    botao.setAttribute( "onClick", "criarMonstro()" );
}
function barrasAleatorias(monstroComBarras)
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
        var atributo = document.createElement("p")
        atributo.className = "atributo"
        atributo.id = "atributo"
        monstroComBarras.appendChild(linha)
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

function criarMonstro()
{
    var oGerenteTaMaluco = "ocultarEsseMonteDeIf"
    var oGiranteTaMaluco = "ocultarEsseMonteDeLink"

    var elementoPai = document.getElementById("antes")
    elementoFilho = document.createElement("div")
    elementoFilho.id = "elementoFilho"

    var espaco = document.createElement("br")
    var monstroComBarras = document.createElement("div");
    monstroComBarras.id = "monstroComBarras"
    elementoPai.appendChild(elementoFilho)
    elementoFilho.appendChild(monstroComBarras)
    var divDoMonstro = document.createElement("div")
    divDoMonstro.id = "divDoMonstro"
    monstroComBarras.appendChild(divDoMonstro)
    
    var cabeca = document.createElement("img");
    cabeca.className = "cabeca"
    var corpo = document.createElement("img");
    corpo.className = "corpo"
    var braco = document.createElement("img");
    braco.className = "braco"
    var perna = document.createElement("img");
    perna.className = "perna"




    divDoMonstro.appendChild(cabeca)
    divDoMonstro.appendChild(corpo)
    divDoMonstro.appendChild(braco)
    divDoMonstro.appendChild(perna)

    cabeca.style.display = "none"
    corpo.style.display = "none"
    braco.style.display = "none"
    perna.style.display = "none"

    var sorteioCabeca = Math.floor(Math.random() * 5) + 1;
    var sorteioCorpo = Math.floor(Math.random() * 5) + 1;
    var sorteioBraco = Math.floor(Math.random() * 5) + 1;
    var sorteioPerna = Math.floor(Math.random() * 5) + 1;
    if (oGiranteTaMaluco == "ocultarEsseMonteDeLink")
    {
        var cabecaTortuga = "sprites/Tortuga/cabecaTortuga.png";
        var corpoTortuga = "sprites/Tortuga/corpoTortuga.png";
        var bracoTortuga = "sprites/Tortuga/bracoTortuga.png";
        var pernaTortuga = "sprites/Tortuga/pernaTortuga.png";

        var cabecaGriffin = "sprites/Griffin/cabecaGriffin.png";
        var corpoGriffin = "sprites/Griffin/corpoGriffin.png";
        var bracoGriffin = "sprites/Griffin/bracoGriffin.png";
        var pernaGriffin = "sprites/Griffin/pernaGriffin.png";
        
        var cabecaOlhudo = "sprites/Olhudo/cabecaOlhudo.png";
        var corpoOlhudo = "sprites/Olhudo/corpoOlhudo.png";
        var bracoOlhudo = "sprites/Olhudo/bracoOlhudo.png";
        var pernaOlhudo = "sprites/Olhudo/pernaOlhudo.png";

        var cabecaZumbi = "sprites/Zumbi/cabecaZumbi.png";
        var corpoZumbi = "sprites/Zumbi/corpoZumbi.png";
        var bracoZumbi = "sprites/Zumbi/bracoZumbi.png";
        var pernaZumbi = "sprites/Zumbi/pernaZumbi.png";

        var cabecaFantasma = "sprites/Fantasma/cabecaFantasma.png";
        var corpoFantasma = "sprites/Fantasma/corpoFantasma.png";
        var bracoFantasma = "sprites/Fantasma/bracoFantasma.png";
        var pernaFantasma = "sprites/Fantasma/pernaFantasma.png";
    }
    if (oGerenteTaMaluco == "ocultarEsseMonteDeIf")
    {
        if (sorteioCabeca == 1)
        {
            cabeca.src = cabecaTortuga
        }
        else if (sorteioCabeca == 2)
        {
            cabeca.src = cabecaGriffin
        }
        else if (sorteioCabeca == 3)
        {
            cabeca.src = cabecaOlhudo
        }
        else if (sorteioCabeca == 4)
        {
            cabeca.src = cabecaZumbi
        }
        else if (sorteioCabeca == 5)
        {
            cabeca.src = cabecaFantasma
        }

        if (sorteioCorpo == 1)
        {
            corpo.src = corpoTortuga
        }
        else if (sorteioCorpo == 2)
        {
            corpo.src = corpoGriffin
        }
        else if (sorteioCorpo == 3)
        {
            corpo.src = corpoOlhudo
        }
        else if (sorteioCorpo == 4)
        {
            corpo.src = corpoZumbi
        }
        else if (sorteioCorpo == 5)
        {
            corpo.src = corpoFantasma
        }

        if (sorteioBraco == 1)
        {
            braco.src = bracoTortuga
        }
        else if (sorteioBraco == 2)
        {
            braco.src = bracoGriffin
        }
        else if (sorteioBraco == 3)
        {
            braco.src = bracoOlhudo
        }
        else if (sorteioBraco == 4)
        {
            braco.src = bracoZumbi
        }
        else if (sorteioBraco == 5)
        {
            braco.src = bracoFantasma
        }

        if (sorteioPerna == 1)
        {
            perna.src = pernaTortuga
        }
        else if (sorteioPerna == 2)
        {
            perna.src = pernaGriffin
        }
        else if (sorteioPerna == 3)
        {
            perna.src = pernaOlhudo
        }
        else if (sorteioPerna == 4)
        {
            perna.src = pernaZumbi
        }
        else if (sorteioPerna == 5)
        {
            perna.src = pernaFantasma
        }
    }
    monstroComBarras.appendChild(espaco);

    cabeca.style.position = "absolute";
    corpo.style.position =  "absolute";
    braco.style.position =  "absolute";
    perna.style.position =  "absolute";

    setTimeout(function(){ if (sorteioCabeca == 2)
    {
        var alturaCabeca = cabeca.clientHeight - 30;
    }
    else if (sorteioCabeca == 3)
    {
        var alturaCabeca = cabeca.clientHeight + 10;

    }
    else if (sorteioCabeca != 2 && sorteioCabeca != 3)
    {
    var alturaCabeca = cabeca.clientHeight;
    }
    var alturaCorpo = corpo.clientHeight;
    var larguraCorpo = corpo.clientWidth;
    if (sorteioBraco == 4)
    {
        larguraBraco = 60 + larguraCorpo;
    }
    else if (sorteioBraco != 4)
    {
    var larguraBraco = braco.clientWidth;
    }
    var larguraCabeca = cabeca.clientWidth;

    var larguraPerna = perna.clientWidth;



    corpo.style.top = alturaCabeca - 10;
    if (sorteioBraco == 2)
    {
        braco.style.top = alturaCabeca - 50;
    }
    else if (sorteioBraco != 2)
    {
    braco.style.top = alturaCabeca + 20;
    }
    perna.style.top = alturaCabeca + alturaCorpo - 10;

    cabeca.style.left = ((larguraBraco - larguraCabeca) / 2);
    corpo.style.left = ((larguraBraco - larguraCorpo) / 2); 

    if (sorteioPerna == 5)
    {
        perna.style.left = ((larguraBraco - larguraPerna) / 2) - 25;
    }
    else if (sorteioPerna != 5)
    {
    perna.style.left = ((larguraBraco - larguraPerna) / 2); 
    }

    if (sorteioCorpo == 1)
    {
        perna.style.top = perna.style.top - 10;
    }
    console.log("cabeca: " + alturaCabeca + " X " + larguraCabeca);
    console.log("corpo: " + alturaCorpo + " X " + larguraCorpo);
    console.log("largura do braco: " + larguraBraco);
    console.log("largura da perna: " + larguraPerna);
    console.log("");
    barrasAleatorias(monstroComBarras);},50);
    cabeca.style.display = "block"
    corpo.style.display = "block"
    braco.style.display = "block"
    perna.style.display = "block"
    

}
