document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));
    fetch('iniciar_sesion.php', {
        method: 'POST',
        body: formulario
    }).then(res => res.json())
  .then(({ success }) => {
      if (success === 1) {
          location.href = 'clientes.html';
      }
      
      else {
          alerta();
      }
  });

});
function alerta() {
    alert.innerHTML = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Datos Incorrectos</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  `;
}