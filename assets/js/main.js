
alert('¿Estas listo para el desaío?')

let jugadaUsuario
let vecesJugar

do{
  vecesJugar = parseInt(prompt("Ingresa tus vidas:",'Recuerda que no puedes ser inmortal'));
} while (isNaN(vecesJugar));

for(i=1; i<=vecesJugar;i++){

  const ganaste = 'Fuiste el ganador!'
  const perdiste = 'Fuiste el perdor TT-TT'
  const empataste = 'Han empatado...'

    do {
      jugadaUsuario = prompt('Elige tu jugada, Piedra Papel o Tijera').toLowerCase();
    } while (jugadaUsuario !== 'piedra' && jugadaUsuario !== 'papel' && jugadaUsuario !== 'tijera'); 
      
        
        let jugadaMaquina= Math.floor(Math.random()*3);
        
        if(jugadaMaquina == 0){
          jugadaMaquina = 'piedra'
        }else if(jugadaMaquina == 1){
          jugadaMaquina = 'papel'
        }else {
          jugadaMaquina = 'tijera'
        }
        
        if (jugadaUsuario === jugadaMaquina) {  
          alert(ganaste)
          console.log(`En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}, ${ganaste.toLowerCase()}`);
        } else if ((jugadaUsuario === "piedra" && jugadaMaquina === 'tijera') || (jugadaUsuario === "papel" && jugadaMaquina === 'piedra') || (jugadaUsuario === "tijera" && jugadaMaquina === 'papel')) {
          alert(perdiste)
          console.log(`En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}, ${perdiste.toLowerCase()}`);
        } else {
          alert(empataste)
          console.log(`En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}, ${empataste.toLowerCase()}`);
        }
}