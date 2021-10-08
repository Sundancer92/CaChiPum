

// Bienvenida.
alert('¿Estas listo para el desafío?')

// Declaración de variables.
let jugadaUsuario
let vecesJugar

// Bucle DoWhile para pedir la cantidad de partidas, solo puede ser un número.
do{
  vecesJugar = parseInt(prompt("Ingresa tus vidas:",'Recuerda que no puedes ser inmortal'));
} while (isNaN(vecesJugar));


// Desarrollo enfrentamientos.
for(i=1; i<=vecesJugar;i++){

  // Variables de texto porque, practica.
  const ganaste = 'Fuiste el ganador!'
  const perdiste = 'Fuiste el perdor TT-TT'
  const empataste = 'Han empatado...'

  // Bucle DoWhile para elegir tu jugada, solo puede elegir piedra, papel o tijera.
    do {
      jugadaUsuario = prompt('Elige tu jugada, Piedra Papel o Tijera').toLowerCase();
    } while (jugadaUsuario !== 'piedra' && jugadaUsuario !== 'papel' && jugadaUsuario !== 'tijera'); 
      
        // Math.random para elegir la jugada de la máquina.
        let jugadaMaquina= Math.floor(Math.random()*3);
        
        // Transforma el número a String.
        if(jugadaMaquina == 0){
          jugadaMaquina = 'piedra'
        }else if(jugadaMaquina == 1){
          jugadaMaquina = 'papel'
        }else {
          jugadaMaquina = 'tijera'
        }
        
        // Compara resultado y declara ganador, vencedor o empate.
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