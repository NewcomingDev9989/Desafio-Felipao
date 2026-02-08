let nome = "Férigo o Sinestro"
let nivelXP = 0
function ganharXP() {
    nivelXP += 7001
    for (let i= 7001; i <= nivelXP; i++) {
        console.log('Prabéns ' + nome + ', você avançou para o nível ' + i + '!')
        
    }
}