const fs = require('fs');
const path = require('path');
// const file = "2abril_participants_94849208356.csv"
const directory = './files';

// const zoomInfo = fs.readFileSync(file, "utf-8");
// // Iteracion 1
// console.log(zoomInfo);
// const parsedData = zoomInfo.split('\r\n');
// console.log(parsedData);

// // Iteracion 2 y 3
// parsedData.forEach(student => {
//     let texto = `${student.split(",,")[0]} ha venido hoy a clase ${student.split(",")[2]} minutos\n`;
//     console.log(texto);
//     fs.writeFileSync("informe.txt", texto, { flag: 'a', encoding: 'utf-8' });
// });


fs.readdir(directory, (err, files) => {
    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const zoomInfo = fs.readFileSync(filePath, "utf-8");
        const parsedData = zoomInfo.split('\r\n');
        fs.appendFileSync("informe.txt", `\n ********* ${file} ********* \n`);
        parsedData.forEach(student => {
            let texto = `${student.split(",,")[0]} ha venido hoy a clase ${student.split(",")[2]} minutos\n`;
            console.log(texto);
            fs.appendFileSync("informe.txt", texto);
        });
    });
});