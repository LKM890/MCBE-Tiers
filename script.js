const players = [
  { name: "PlayerOne", tier: "HT1", points: 1000 },
  { name: "PlayerTwo", tier: "HT2", points: 900 },
  { name: "PlayerThree", tier: "HT3", points: 800 },
  { name: "PlayerFour", tier: "HT4", points: 700 },
  { name: "PlayerFive", tier: "HT5", points: 600 },

  { name: "Example1", tier: "LT1", points: 500 },
  { name: "Example2", tier: "LT2", points: 400 },
  { name: "Example3", tier: "LT3", points: 300 },
  { name: "Example4", tier: "LT4", points: 200 },
  { name: "Example5", tier: "LT5", points: 100 }
];

const tiers = [
  "HT1",
  "HT2",
  "HT3",
  "HT4",
  "HT5",
  "LT1",
  "LT2",
  "LT3",
  "LT4",
  "LT5"
];

function displayTiers(list = players) {
  const container = document.getElementById("tierList");
  container.innerHTML = "";

  tiers.forEach(tier => {
    const tierPlayers = list.filter(player => player.tier === tier);

    const row = document.createElement("div");
    row.className = "tier";

    const name = document.createElement("div");
    name.className = "tier-name " + tier.toLowerCase();
    name.textContent = tier;

    const playerContainer = document.createElement("div");
    playerContainer.className = "players";

    tierPlayers.forEach(player => {
      const playerElement = document.createElement("div");
      playerElement.className = "player";
      playerElement.textContent = player.name;

      playerElement.onclick = () => showPlayer(player);

      playerContainer.appendChild(playerElement);
    });

    row.appendChild(name);
    row.appendChild(playerContainer);

    container.appendChild(row);
  });
}

function displayRankings() {
  const container = document.getElementById("rankingList");

  const sorted = [...players].sort((a, b) => b.points - a.points);

  container.innerHTML = "";

  sorted.forEach((player, index) => {
    const element = document.createElement("div");
    element.className = "ranking";

    element.innerHTML = `
      <span>#${index + 1} ${player.name}</span>
      <strong>${player.points} points</strong>
    `;

    container.appendChild(element);
  });
}

function displayPlayers(list = players) {
  const container = document.getElementById("playerList");

  container.innerHTML = "";

  list.forEach(player => {
    const element = document.createElement("div");
    element.className = "profile";

    element.innerHTML = `
      <h3>${player.name}</h3>
      <p>Tier: <strong>${player.tier}</strong></p>
      <p>Points: ${player.points}</p>
    `;

    container.appendChild(element);
  });
}

function searchPlayers() {
  const search = document
    .getElementById("search")
    .value
    .toLowerCase();

  const filtered = players.filter(player =>
    player.name.toLowerCase().includes(search)
  );

  displayTiers(filtered);
}

function showPlayer(player) {
  alert(
    `${player.name}\n\nTier: ${player.tier}\nPoints: ${player.points}`
  );
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(section => {
    section.classList.add("hidden");
  });

  document.getElementById(page).classList.remove("hidden");

  if (page === "rankings") {
    displayRankings();
  }

  if (page === "players") {
    displayPlayers();
  }
}

displayTiers();
displayRankings();
displayPlayers();
