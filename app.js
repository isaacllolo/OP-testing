document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));
    let contraseña=getElementById('contraseña');
    let contraseña2=getElementById('contraseña2');
    let flag= true;
    if (contraseña==contraseña2) {
        flag=true;
    }
    else{
        flag=false;
    }
    fetch('registrar.php', {
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data => {
       
        if(data == 'true'&& flag==true) {
            document.getElementById('usuario').value = '';
            document.getElementById('contraseña').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            document.getElementById('msg').innerHTML = 'Las contraseñas no coinciden'
            console.log(data);

        }
    });

});