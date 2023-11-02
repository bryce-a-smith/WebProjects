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

    //write functions
    function loadTeamsList() {
        for(const team of teams) {
            let option = new Option(team.name, team.code);
            footballTeamsSelect.appendChild(option);
        }

    }

    loadTeamsList();

}


window.onload = init;