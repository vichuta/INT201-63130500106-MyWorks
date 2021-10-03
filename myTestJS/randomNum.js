function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1; //สุ่มตัวเลขระหว่าง1-100 โดยใช้การ random
  }
  
  function sum(a,b,c){
    return a+b+c // เป็นfunctionไว้รวมผลบวก
  }
  
  function max(a,b,c){
    if(a>b&&a>c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่ามากสุด 
    else if(b>a&&b>c) return b
    else if(c>a&&c>b) return c
  }
  
  function min(a,b,c){
    if(a<b&&a<c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่าน้อยสุด 
    else if(b<a&&b<c) return b
    else if(c<a&&c<b) return c
    }
  
  function find(a,b,c){
    const sum_fin = sum(a,b,c) 
    const min_fin = min(a,b,c)
    const max_fin = max(a,b,c)
    console.log(`sum is ${sum_fin}`) 
    console.log(`min is ${min_fin}`) 
    console.log(`max is ${max_fin}`) 
  }
  
  function main(){
    const a = getRandomNumber();
    const b = getRandomNumber();
    const c = getRandomNumber();
    console.log(`number1 is ${a}`) 
    console.log(`number2 is ${b}`) 
    console.log(`number3 is ${c}`) 
    find(a,b,c)
  }
  
  main()


  let players = [
    {
      name: 'Jom',
      scores: [],
      results: [],
    },
    {
      name: 'Toey',
      scores: [],
      results: [],
    },
  ] // กำหนด Object
  
  const randomDiceScore = () => Math.floor(Math.random() * 6) + 1
  
  function play(all_game = 1, all_round = 3) {
    for (let game = 0; game < all_game; game++) {
      for (let round = 0; round < all_round; round++) {
        let diceP1 = 0,
          diceP2 = 0
        for (const [index, player] of players.entries()) {
          let diceScore = randomDiceScore()
          index === 0 ? (diceP1 = diceScore) : (diceP2 = diceScore)
          player.scores.push(diceScore)
        }
        if (diceP1 > diceP2) {
          players[0].results.push('Win')
          players[1].results.push('Lose')
        } else if (diceP1 === diceP2) {
          players[0].results.push('Draw')
          players[1].results.push('Draw')
        } else {
          players[0].results.push('Lose')
          players[1].results.push('Win')
        }
      }
    }
  }
  
  play()
  
  let total_score_p1 = players[0].scores.reduce((prev, curv) => curv + prev, 0)
  let total_score_p2 = players[1].scores.reduce((prev, curv) => curv + prev, 0)
  console.log(players)
  let win_message =
    total_score_p1 > total_score_p2
      ? console.log(`${players[0].name} Win`)
      : total_score_p1 < total_score_p2
      ? console.log(`${players[1].name} Win`)
      : console.log('Draw')