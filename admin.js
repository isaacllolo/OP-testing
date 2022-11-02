 //estas operaciones son para probar, hay que llamar el arreglo de las operaciones hechas desde la base de datos
        const operacion1 = {
                usuario: "César",
                num1: 1234,
                num2: 1234,
                
                suma: 241124,
                resta: 124124,
                multiplicacion: 124124,
                division: 124124
            }
        const operacion2 = {
                usuario: "Isaac",
                num1: 234,
                num2: 23,
                
                suma: 124124,
                resta: 124124,
                multiplicacion: 124124,
                division: 12412412
            }
        const operaciones = [operacion1, operacion2]

        for(i=0; i<=operaciones.length; i++){
            document.getElementById('op').innerHTML +=
            `<section class="mb-4" style="background: #D2B1EA; border-radius: 20px;">
            <card  class="d-flex">
            <div class="m-5" style=" margin:auto">
            <h1>Operación de `+operaciones[i].usuario+`</h1>
            <h2>Operaciones entre `+operaciones[i].num1+` y `+operaciones[i].num2+`</h2><br>
            <h3>Suma = `+operaciones[i].suma+`</h3>
            <h3>Resta = `+operaciones[i].resta+`</h3>
            <h3>Multiplicación = `+operaciones[i].multiplicacion+`</h3>
            <h3>División = `+operaciones[i].division+`</h3>
            </div>
            </card>
            </section>`;
        }