let homeScore = 0;
let guestScore = 0;

function incrementHome(points) {
    homeScore += points;
    document.getElementById("score1").textContent = homeScore;
}

function incrementGuest(points) {
    guestScore += points;
    document.getElementById("score2").textContent = guestScore;
}
