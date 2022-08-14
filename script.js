let prato = null;
let bebida = null;
let sobremesa = null;
let custo = 0;

function selecionar_caixa(classe, item) {
    const texto = classe + '.selecionado';
    const elemento_add = document.querySelector(item);
    const elemento_remove = document.querySelector(texto);
    
    if(elemento_remove !== null)
    {
        elemento_remove.classList.remove("selecionado");
        if(classe === '.prato')
        {
            prato = null;
        }
        else if(classe === '.bebida')
        {
            bebida = null;
        }
        else if(classe === '.sobremesa')
        {
            sobremesa = null;
        }
    }

    if(elemento_add !== elemento_remove)
    {
        elemento_add.classList.add("selecionado");
        if(classe === '.prato')
        {
            prato = elemento_add;
        }
        else if(classe === '.bebida')
        {
            bebida = elemento_add;
        }
        else if(classe === '.sobremesa')
        {
            sobremesa = elemento_add;
        }
    }

    if(prato!==null&&sobremesa!==null&&bebida!==null)
    {
        habilita_botao();
    }
    else
    {
        desabilita_botao();
    }
}

function habilita_botao() {
    const botao = document.querySelector('button');
    botao.innerHTML = 'Fechar pedido';
    botao.disabled = false;
}

function desabilita_botao() {
    const botao = document.querySelector('button');
    botao.innerHTML = 'Selecione os 3 itens <br>para fechar o pedido';
    botao.disabled = true;
}

function confirmar() {
    const confirmar = document.querySelector(".bloco-confirmar");
    confirmar.classList.remove("escondido");
    desabilitar(".barra-topo");
    desabilitar(".corpo-pagina");
    desabilitar(".barra-bottom");

    document.querySelector(".prato-escolhido .nome").innerHTML = prato.getElementsByClassName("nome_produto")[0].innerHTML;
    document.querySelector(".prato-escolhido .valor").innerHTML = prato.getElementsByClassName("valor")[0].innerHTML;
    custo = custo + Number(document.querySelector(".prato-escolhido .valor").innerHTML);
    document.querySelector(".bebida-escolhida .nome").innerHTML = bebida.getElementsByClassName("nome_produto")[0].innerHTML;
    document.querySelector(".bebida-escolhida .valor").innerHTML = bebida.getElementsByClassName("valor")[0].innerHTML;
    custo = custo + Number(document.querySelector(".bebida-escolhida .valor").innerHTML);
    document.querySelector(".sobremesa-escolhida .nome").innerHTML = sobremesa.getElementsByClassName("nome_produto")[0].innerHTML;
    document.querySelector(".sobremesa-escolhida .valor").innerHTML = sobremesa.getElementsByClassName("valor")[0].innerHTML;
    custo = custo + Number(document.querySelector(".sobremesa-escolhida .valor").innerHTML);

    document.querySelector(".final .total").innerHTML = "R$ " + custo.toFixed(2);
}

function desconfirmar() {
    const confirmar = document.querySelector(".bloco-confirmar");
    confirmar.classList.add("escondido");
    habilitar(".barra-topo");
    habilitar(".corpo-pagina");
    habilitar(".barra-bottom");
    custo = 0;
}

function desabilitar(classe) {
    const elemento = document.querySelector(classe);
    elemento.classList.add("desabilitado");    
}

function habilitar(classe) {
    const elemento = document.querySelector(classe);
    elemento.classList.remove("desabilitado");    
}

function enviar_pedido() {
    const nome = prompt("Qual o seu nome?");
    const endereco = prompt("Qual o seu endereço?");

    let meuTexto = `Olá, gostaria de fazer o pedido:\n`
    meuTexto = meuTexto + `- Prato: ${prato.getElementsByClassName("nome_produto")[0].innerHTML}\n`;
    meuTexto = meuTexto + `- Bebida: ${bebida.getElementsByClassName("nome_produto")[0].innerHTML}\n`;
    meuTexto = meuTexto + `- Sobremesa: ${sobremesa.getElementsByClassName("nome_produto")[0].innerHTML}\n`;
    meuTexto = meuTexto + `Total: R$ ${custo.toFixed(2)}\n\n`;
    meuTexto = meuTexto + `Nome: ${nome}\n`;
    meuTexto = meuTexto + `Endereço: ${endereco}`;

    const link = "https://wa.me/5585996378487?text=" + encodeURIComponent(meuTexto);

    location.href = link;
}