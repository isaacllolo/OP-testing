

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
document.querySelector('form')
        .addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries(
                new FormData(e.target)
            )

            //aquí se mete la operación y se envía a la base de datos cada vez que se haga una
            const operacion = {
                num1: data.num1,
                num2: data.num2,
                
                suma: data.num1 + data.num2,
                resta: data.num1 - data.num2,
                multiplicacion: data.num1 * data.num2,
                division: data.num1 / data.num2
            }

            document.getElementById('resultados').innerHTML = 
            `<h2>Operaciones entre `+operacion.num1+` y `+operacion.num2+`</h2><br>
            <h3>Suma = `+operacion.suma+`</h3>
            <h3>Resta = `+operacion.resta+`</h3>
            <h3>Multiplicación = `+operacion.multiplicacion+`</h3>
            <h3>División = `+operacion.division+`</h3>`;
        
        });