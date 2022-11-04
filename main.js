function createGame(player1, hour, player2) {
  return `
   <li>
              <img src="./assets/icon-${player1}.svg" alt="" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="" />
            </li>

`
}
let delay = -0.4;
function createCard(date, day, games) {
  delay =delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul style="list-style: none">
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
      </header>
      <main id="cards">
      ${createCard("24/11", "QUINTA",   createGame('suiça','7:00','camaron') + createGame ("portugal","13:00","ghana") + 
      createGame('brazil', '16:00', 'serbia'))}
      ${createCard("28/11", "SEGUNDA", createGame("south korea","10:00","camaron") + createGame('brazil' , "13:00", 'suiça') 
      + createGame("portugal","16:00","uruguay"))}
      ${createCard("02/12", "SEXTA", createGame('south korea',"12:00",'portugal') + createGame('ghana',"12:00","uruguay") +
      createGame('brazil','16:00','camaron'))}
      </main>
`
