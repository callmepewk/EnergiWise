document.getElementById('toggleSenha').addEventListener('click', function () {
  const senhaInput = document.getElementById('senha');
  const icon = this.querySelector('i');

  if (senhaInput.type === 'password') {
    senhaInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
    this.setAttribute('aria-label', 'Ocultar senha');
  } else {
    senhaInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
    this.setAttribute('aria-label', 'Mostrar senha');
  }
});
