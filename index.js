var fs = require ("fs");


    fs.writeFile('alumnos.txt','14401043 Eva Liliana Osuna Hdez 100 \n 14400034 Iris Adanelli Lopez Garcia 80 \n 15400101 Jose Sebastian Gamez Vaca 90 \n 15400101 Angel Adan Osuna Ramirez 100 \n 14401012 Jose Hilario Cabrera Astorga 85',(err)=>{
        if(err)
        throw err;
        console.log('Saved!');
      
});