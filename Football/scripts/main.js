"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function init() {
  //get html elements into variables
  const footballTeamsSelect = document.getElementById("football-teams-select");
  const displayInfoButton = document.getElementById("display-info-button");
  const displayParagraph = document.getElementById("display-paragraph");

  //write functions
  function loadTeamsList() {
    for (const team of teams) {
      let option = new Option(team.name, team.code);
      footballTeamsSelect.appendChild(option);
    }
  }

  function getTeamByCode(code) {
    for (const team of teams) {
      if (team.code == code) {
        return team;
      }
    }
  }

  function displayInfo(event) {
    event.preventDefault();
    //displayParagraph.innerText = "";
    let selectedTeam = getTeamByCode(footballTeamsSelect.value);
    console.log(selectedTeam); // Debug: Check the selected team object

    displayParagraph.innerText = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
  }

  loadTeamsList();

  if (displayInfoButton) {
    displayInfoButton.onclick = displayInfo;
  }
}

window.onload = init;
