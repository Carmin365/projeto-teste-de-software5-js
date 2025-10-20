let estoque = 10; 


function reduzirEstoque(quantidade) {
    if (estoque >= quantidade) {
        estoque -= quantidade;
        document.getElementById('estoqueAtual').textContent = estoque;
        return true; 
    }
    return false; 
}

document.getElementById('criarPedidoBtn').addEventListener('click', () => {
    const quantidadeInput = document.getElementById('quantidade');
    const quantidade = parseInt(quantidadeInput.value);
    const resultado = document.getElementById('resultado');

    if (isNaN(quantidade) || quantidade <= 0) {
        resultado.textContent = 'Quantidade inválida.';
        resultado.style.color = 'red';
        return;
    }

    
    const sucessoIntegracao = reduzirEstoque(quantidade);

    if (sucessoIntegracao) {
        resultado.textContent = `Pedido de ${quantidade} itens criado com sucesso!`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `Falha ao criar pedido: Estoque insuficiente (apenas ${estoque} restantes).`;
        resultado.style.color = 'red';
    }
});

document.getElementById('estoqueAtual').textContent = estoque;