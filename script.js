function exibirCampos() {
  const tipo = document.getElementById('tipoConta').value;
  const form = document.getElementById('formularioLogin');
  form.innerHTML = '';

  if (tipo === 'fisica') {
    form.innerHTML = `
      <label>Nome:<input type="text"></label>
      <label>Email:<input type="email"></label>
      <label>Telefone:<input type="tel"></label>
      <label>CPF ou RG:<input type="text"></label>
      <label>País:<input type="text"></label>
      <label>Estado:<input type="text"></label>
      <label>Cidade:<input type="text"></label>
      <label>CEP:<input type="text"></label>
      <label>Tipo de Acesso:
        <select>
          <option>Residencial / Pessoal</option>
          <option>Multi-Residencial</option>
        </select>
      </label>`;
  } else {
    form.innerHTML = `
      <label>Razão Social:<input type="text"></label>
      <label>Nome Fantasia:<input type="text"></label>
      <label>CNPJ / Número de Identificação:<input type="text"></label>
      <label>País:<input type="text"></label>
      <label>Estado:<input type="text"></label>
      <label>Cidade:<input type="text"></label>
      <label>CEP:<input type="text"></label>`;
  }
}

function carregarSistema() {
  document.getElementById('carregando').style.display = 'block';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
}