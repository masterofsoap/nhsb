fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const standingsTable = document.getElementById("standings");
        data.teams.forEach(team => {
            let row = `<tr>
                <td><img src="${team.logo}" alt="Logo"></td>
                <td>${team.name}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.wins * 2}</td>
            </tr>`;
            standingsTable.innerHTML += row;
        });

        const statsTable = document.getElementById("player-stats");
        data.players.forEach(player => {
            let row = `<tr>
                <td><img src="${player.image}" alt="Player"></td>
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td>${player.goals}</td>
                <td>${player.assists}</td>
                <td>${player.pim}</td>
            </tr>`;
            statsTable.innerHTML += row;
        });
    });
