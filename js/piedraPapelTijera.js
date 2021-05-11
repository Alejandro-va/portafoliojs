export default function piedarPapelTijera(rock, paper, scissors){


  const ROCK = "rock",
    PAPER = "paper",
    SCISSORS = "scissors";

  const TIE = 0,
    WIN = 1,
    LOST = 2;

  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn = document.getElementById("scissors");
  const resultText = document.getElementById("start-text");
  const userImg = document.getElementById("user-img");
  const machineImg = document.getElementById("machine-img");
  let ganadas = 0,
    perdidas = 0,
    empatadas = 0;

  rockBtn.addEventListener('click', (e) => {
    play(ROCK);
  })

  paperBtn.addEventListener('click', (e) => {
    play(PAPER);
  })

  scissorsBtn.addEventListener('click', (e) => {
    play(SCISSORS);
  })



//jugar
  const play = (userOption) => {
    userImg.src = "../images/" + userOption + ".svg";

    //mientas la maquina piensa
    resultText.innerHTML = "Pensando!!"

    //para q cambien las imagenes mietras piensa
    const interval = setInterval(() => {
      const machineOption = calMachineOption();
      machineImg.src = "../images/" + machineOption + ".svg";
    }, 200);

    //para q la maquina piense y no elija de una vez
    setTimeout(() => {

      clearInterval(interval); //limpio el intervalo

      const machineOption = calMachineOption();
      console.log(machineOption)

      const result = calcResult(userOption, machineOption);
let num=0;
      machineImg.src = "../images/" + machineOption + ".svg";
      switch (result) {
        case TIE:
          resultText.innerHTML = "Estas empatado!!"
          empatadas++;
          console.log("empatadas", empatadas)
          break;
        case WIN:
          resultText.innerHTML = "Gasnastee!!"
          ganadas++
          console.log("ganadas", ganadas)
          break;
        case LOST:
          resultText.innerHTML = "Perdistee!!"
          perdidas++;
          console.log("perdidas", perdidas)
          break;
         }
         //capturo los div de los resultados
          const divW = document.getElementsByClassName("win")[0]
          const divL = document.getElementsByClassName("lost")[0]
          const divT = document.getElementsByClassName("tie")[0]
          
          divW.textContent=ganadas
          divL.textContent=perdidas
          divT.textContent=empatadas          
    }, 2000);

  }

  //function que transforma los numeros en imagenes
  function calMachineOption() {

    const number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0:
        return ROCK;
      case 1:
        return PAPER;
      case 2:
        return SCISSORS;
    }
  }

  //calcula el resulatdo
  function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
      return TIE;

    } else if (userOption === ROCK) {
      //SI LA MAQUINA ELIGE PAPEL TU PIERDES
      if (machineOption === PAPER) return LOST;
      //SI LA MAQUINA ELIGE TIJERA TU GANAS
      if (machineOption === SCISSORS) return WIN;

    } else if (userOption === PAPER) {

      if (machineOption === SCISSORS) return LOST;
      if (machineOption === ROCK) return WIN;

    } else if (userOption === SCISSORS) {

      if (machineOption === ROCK) return LOST;
      if (machineOption === PAPER) return WIN;
    }
  }



}