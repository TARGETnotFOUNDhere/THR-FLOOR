const zones=[
 {n:"01",name:"THE SPEED",game:"CARD RUSH",icon:"⚡",cls:"g1",color:"#ff4137",short:"Speed + reaction",players:"2–4 players per run",time:"2–3 minutes",setup:"Prepare a deck of numbered, coloured or symbol cards. Place a target sequence card where players can see it.",how:"A sequence is shown for a few seconds. The player/team must recreate it using the cards. Fastest correct sequence wins.",rules:"Only one player touches the cards at a time. A wrong sequence means a time penalty. The referee confirms the final answer.",win:"Fastest correct completion captures Zone 1.",score:"Winner: 100 zone points • Runner-up: 60 • Others: 30"},
 {n:"02",name:"THE MIND",game:"PUZZLE BREAK",icon:"🧠",cls:"g2",color:"#1dc2ff",short:"Logic + memory",players:"3–5 players per run",time:"5 minutes",setup:"Give every team the same packet containing short riddles, patterns, codes and one final answer.",how:"Teams solve as many clues as possible. Every correct clue gives a letter/number. Combine them to unlock the final answer.",rules:"Teams stay at their station. No phones. The referee checks answers. A hint can be requested, but costs points/time.",win:"First team to solve the final answer correctly captures Zone 2.",score:"Winner: 100 zone points • Each solved clue adds bonus points"},
 {n:"03",name:"THE AIM",game:"BLINDFOLD CUP AIM",icon:"🎯",cls:"g3",color:"#ffd21f",short:"Trust + precision",players:"4 players per run",time:"3 minutes",setup:"Arrange cups/targets at different distances. One player is blindfolded. Three teammates stand behind the line.",how:"The blindfolded player must hit or place the cups/targets using only teammate instructions.",rules:"Teammates cannot touch the player. No physical guidance. Referee controls the start/stop. Each target has a different value.",win:"Highest target score within the time limit captures Zone 3.",score:"Target values: 10 / 20 / 30 / 50 / 100. Highest total wins."},
 {n:"04",name:"THE CHAOS",game:"WHISPER CHALLENGE",icon:"💥",cls:"g4",color:"#8dff39",short:"Communication",players:"5–8 players per run",time:"3 minutes",setup:"Players stand in a line. The first player receives a secret phrase related to business, college life or pop culture.",how:"The phrase is whispered once from player to player. The final player says the phrase aloud.",rules:"Repeat is not allowed. Players cannot show the phrase. The final answer is compared with the original.",win:"Most accurate final phrase wins. If tied, the fastest team wins.",score:"Exact: 100 • Minor mistake: 60 • Major change: 30"},
 {n:"05",name:"THE CREATIVE",game:"PRODUCT PITCH",icon:"✦",cls:"g5",color:"#ec8cff",short:"Creativity + charisma",players:"4–6 players",time:"2 minutes pitch",setup:"Give the team a random everyday object/product. Give them a short preparation window.",how:"The team must turn the random product into a crazy new product, create a name/tagline and pitch it to the judges.",rules:"Every team member must contribute. Pitch has a hard time limit. Judges score concept, delivery and audience reaction.",win:"Highest combined judge score captures Zone 5.",score:"Idea 40 • Pitch 30 • Creativity 20 • Teamwork 10"},
 {n:"06",name:"THE GLITCH",game:"THE GLITCH TWIST",icon:"⚠",cls:"g6",color:"#24eaff",short:"Random team twist",players:"Randomly selected players",time:"5 minutes",setup:"After Zone 5, the remaining eligible players are entered into a random selection pool. Selected players are displayed on screen.",how:"Players are randomly selected and immediately form a new temporary team. They receive a short final challenge combining elements from earlier zones.",rules:"No choosing teammates. No swapping. The new team must play with the selected members. The twist is announced only when Zone 6 opens.",win:"The newly formed team that completes the Glitch challenge first/correctly captures Zone 6.",score:"Zone 6 gives the winning Glitch team control of the final territory and a Day 2 advantage."}
];

let owners=["ALPHA","NOVA","FUSION","OMEGA","VORTEX","GLITCH"];

function renderGames(){
 document.getElementById("gamesGrid").innerHTML=zones.map((z,i)=>`
 <article class="game ${z.cls}">
  <div class="head"><b>ZONE ${z.n}</b><h3>${z.name}</h3></div>
  <div class="visual"><span>${z.icon}</span></div>
  <div class="body">
   <div class="game-name">GAME: ${z.game}</div>
   <p>${z.how}</p>
   <div class="chips"><span class="chip">${z.short}</span><span class="chip">${z.players}</span><span class="chip">${z.time}</span></div>
   <button class="view" onclick="showZone(${i})">FULL GAME DETAILS →</button>
  </div>
 </article>`).join("");
}

function showZone(i){
 const z=zones[i];
 document.getElementById("modalBody").innerHTML=`
 <div class="modal-zone" style="color:${z.color}">ZONE ${z.n} — ${z.name}</div>
 <div class="modal-game">${z.icon} GAME: ${z.game}</div>
 <div class="detail-grid">
  <div class="detail"><b>PLAYERS</b><p>${z.players}</p></div>
  <div class="detail"><b>TIME</b><p>${z.time}</p></div>
  <div class="detail"><b>SETUP</b><p>${z.setup}</p></div>
  <div class="detail"><b>WIN CONDITION</b><p>${z.win}</p></div>
 </div>
 <div class="modal-rule"><h4>HOW TO PLAY</h4><p>${z.how}</p></div>
 <div class="modal-rule"><h4>RULES</h4><p>${z.rules}</p></div>
 <div class="modal-rule"><h4>SCORING</h4><p>${z.score}</p></div>`;
 document.getElementById("modal").classList.add("open");
}

function closeModal(){document.getElementById("modal").classList.remove("open")}
function go(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}

function renderMap(){
 document.getElementById("map").innerHTML=zones.map((z,i)=>`
  <div class="map-cell"><b style="color:${z.color}">ZONE ${z.n}</b><span>TEAM ${owners[i]}</span></div>`).join("");
}

function renderLeaderboard(){
 const scores=[["ALPHA",300],["NOVA",200],["FUSION",100],["OMEGA",0],["VORTEX",0],["GLITCH",0]];
 document.getElementById("leaderboard").innerHTML=scores.map((t,i)=>`
  <div class="team-row"><b>${i+1}</b><span>TEAM ${t[0]}</span><strong>${t[1]} PTS</strong></div>`).join("");
}

document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
renderGames();renderMap();renderLeaderboard();
