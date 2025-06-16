// Gerar chave Pix aleatória
function gerarChavePix() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let chave = '';
    for (let i = 0; i < 20; i++) {
        chave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return chave + '@pix.com';
}

// Gerar QR Code Pix
function gerarQRCodePix(chave, valor) {
    const payload = `PIX chave:${chave} | Valor: R$${valor}`;
    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: payload,
        size: 200,
    });
}

// Abrir modal Pix
function abrirModalPix(valorTotal) {
    const chavePix = gerarChavePix();
    document.getElementById('chave-pix').textContent = chavePix;
    gerarQRCodePix(chavePix, valorTotal);
    document.getElementById('pix-modal').style.display = 'flex';
}

// Fechar modal Pix
function fecharModalPix() {
    document.getElementById('pix-modal').style.display = 'none';
}

// Simulação botão comprar
document.getElementById('comprar').addEventListener('click', () => {
    const pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked');
    const total = document.getElementById('total-value').textContent;

    if (!pagamentoSelecionado) {
        alert('Selecione uma forma de pagamento!');
        return;
    }

    if (pagamentoSelecionado.value === 'pix') {
        abrirModalPix(total);
    } else {
        alert('Compra realizada com sucesso!');
    }
});
