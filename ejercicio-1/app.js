const fs = require('fs');
const path = require('path');
let dni = "";

/** Leer README */

const fileContent = fs.readFileSync("hacienda.json", "utf-8");
const contributors = JSON.parse(fileContent);
// Iteracion 1
// console.log(contributors);
contributors.forEach(contributor => {
    // Iteracion 2
    // console.log(contributor.nombre);
    let texto = '';
    // Iteracion 3
    if (contributor.dni == process.argv[2]){
        if (contributor.notificacionesPendientes){
            texto = `El/La contribuyente ${contributor.nombre} tiene notificaciones pendientes. Se le enviará un correo a ${contributor.email}.\n`;            
            console.log(texto);

        } else {
            texto = `El/La contribuyente ${contributor.nombre} NO tiene notificaciones pendientes.\n`;            
            console.log(texto);
        }
    }
    fs.writeFileSync("notificaciones.txt", texto, { flag: 'a', encoding: 'utf-8' });

});
