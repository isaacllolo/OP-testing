document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));
    fetch('index.php', {
        method: 'POST',
        body: formulario
    })
  .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            location.href ="clientes.html";
        } else {
            console.log(data);
        }
    });

});
