

document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));
    fetch('clientes.php', {
        method: 'POST',
        body: formulario
    })
  .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            alert('La operacion se insertó correctamente.');
        } else {
            console.log(data);
        }
    });

});
