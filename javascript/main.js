function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="assets/icons/icon-${player1}.svg"
        alt="Bandeira ${player1}" />
        <strong>${hour}</strong>
        <img src="assets/icons/icon-${player2}.svg"
        alt="Bandeira ${player2}" />
    </li>
    `
}

function createCard(date, day, games) {
    return `
        <div class="card">
            <h2>${date}<span>${day}</span></h2>
                <ul>
                ${games}
                </ul>
        </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="assets/logo.svg">
    </header>
    <main id="cards">
        ${createCard('24/11', 'quinta', 
            createGame('switzerland', '07:00', 'cameroon') + 
            createGame('south_korea', '10:00', 'uruguay') + 
            createGame('portugal', '13:00', 'ghana') + 
            createGame('brazil', '16:00', 'serbia')
        )}
        ${createCard('28/11', 'segunda', 
            createGame('brazil', '13:00', 'switzerland'))}
        ${createCard('02/12', 'sexta', 
            createGame('cameroon', '16:00', 'brazil'))}
    </main>
`