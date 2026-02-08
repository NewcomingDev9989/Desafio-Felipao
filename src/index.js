let nome = "Férigo o Sinestro"
let nivelXP = 8400
let nivel= []
 switch (nivelXP){
    case nivelXP >= 0 && nivelXP <= 1000:
        nivel.push("Ferro")
        break
    case nivelXP >= 1001 && nivelXP <= 2000:
        nivel.push("Bronze")
        break
    case nivelXP >= 2001 && nivelXP <= 5000:
        nivel.push("Prata")
        break
    case nivelXP >= 5001 && nivelXP <= 7000:
        nivel.push("Ouro")
        break
    case nivelXP >= 7001 && nivelXP <= 8000:
        nivel.push("Platina")
        break
    case nivelXP >= 8001 && nivelXP <= 9000:
        nivel.push("Ascendente")
        break
    case nivelXP >= 9001 && nivelXP <= 10000:
        nivel.push("imortal")
        break
    case nivelXP >= 10001:
        nivel.push("lendário")
        break
    default:
      console.log("Nível não reconhecido.")
      
for (let index = 0; index < nivel.length; index++) {
    const element = nivel[index];
    console.log(`Parabéns ${nome}, você tem ${nivelXP} de XP e esta no nível ${element}`)
}
  }
  
  

                                  