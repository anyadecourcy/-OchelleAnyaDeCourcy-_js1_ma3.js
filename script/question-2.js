//Question 2:
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");


async function getGames() {
    const response = await fetch(url);
    const data = await response.json();
    const games = data.results;
    console.log(data);
    console.log(games[0].tags.length);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);
        console.log(games[i].rating);

        if (i === 8) {
            break;
        }
        resultsContainer.innerHTML +=
            `<div class="result"> Name: ${games[i].name}
            Rating: ${games[i].rating}</div>`;
    }
}

getGames();
