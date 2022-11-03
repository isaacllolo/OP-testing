document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));
    fetch('registrar.php', {
        method: 'POST',
        body: formulario
    })
  .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            alert('El usuario se insertó correctamente.');
            document.getElementById('usuario').value = '';
            document.getElementById('contraseña').value = '';
            document.getElementById('contraseña2').value = '';
            
          
        } else {
            console.log(data);
        }
    });

});