



function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

/*
Encierro todo en una función asíncrona para poder usar async y await cómodamente
*/


async function getUpdateData() {
    // Llamar a nuestra API. Puedes usar cualquier librería para la llamada, yo uso fetch, que viene nativamente en JS
    const respuestaRaw = await fetch("./assets/js/src/json_enco.php");
    // Decodificar como JSON
    const respuesta = await respuestaRaw.json();
    // Ahora ya tenemos las etiquetas y datos dentro de "respuesta"
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    const etiquetas = respuesta.DateRead; // <- Aquí estamos pasando el valor traído usando AJAX
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const GSR_Data = {
        label: "GSR_Sensor",
        // Pasar los datos igualmente desde PHP
        data: respuesta.GSR_Sensor, // <- Aquí estamos pasando el valor traído usando AJAX
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1, // Ancho del borde
    };
    //window.alert("Holaaas")
    const Temp_Data = {
        label: "Sensor_Pulso",
        // Pasar los datos igualmente desde PHP
        data: respuesta.Temp_Sensor, // <- Aquí estamos pasando el valor traído usando AJAX
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1, // Ancho del borde
    };
    const chart = Chart.getChart("grafica");
    if (chart)
    {
        console.log("Chart");
        chart.destroy();
        new Chart($grafica, {
            type: 'line', // Tipo de gráfica
            data: {
                labels: etiquetas,
                datasets: [
                    GSR_Data,
                    Temp_Data,
                    // Aquí más datos...
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
    }
    else
    {
        console.log("No chart");
        new Chart($grafica, {
            type: 'line', // Tipo de gráfica
            data: {
                labels: etiquetas,
                datasets: [
                    GSR_Data,
                    Temp_Data,
                    // Aquí más datos...
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
    }
    

    //addData(mainChart, 'labels', );

}
//getUpdateData();

function updateData() {
    console.log("Update Data");
    getUpdateData();
    setTimeout(updateData,5000);
  }

  updateData();
  

