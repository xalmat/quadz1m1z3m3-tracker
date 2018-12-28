class BossGanon extends Boss {
  constructor() {
    super("Ganon");
  }

  canBeat() {
	  let goals = ["ganon","ganonbrain","dungeons","pedestal","triforcehunt"];
	  let goal = "";
	  let complete = false;

	  for(let g in goals) {
		  if(goal == "" && has("goal." + g)) {
			  goal = g;
		  }
	  }

	  goal = "dungeons";

	  let pendants = 0;
	  let crystals = 0;
	  let aga1 = has("agahnim");
	  let aga2 = has("agahnim",2);
	  let mb = false;

	  for(let dungeonID in trackerData.zelda3.prizes) {
		  let prize = trackerData.zelda3.prizes[dungeonID];
		  let beaten = trackerData.zelda3.dungeonbeaten[dungeonID];
		  if(prize == GREENPENDANT || prize == OFFPENDANT) {
			  if(beaten) {
				  pendants++;
			  }
		  } else if(prize == CRYSTAL || prize == OJCRYSTAL) {
			  if(beaten) {
				  crystals++;
			  }
		  }
	  }

	  if(goal == "dungeons") {			// All Dungeons
		return pendants == 3 && crystals == 7 && aga1 && aga2;
	  } else if(goal == "crystals") {	// Crystals
		return crystals == 7;
	  } else if(goal == "pendants") {	// Pendants
		return pendants == 3;
	  } else {							// Defeat Ganon
		return crystals == 7 && aga2;
	  }
  }
}
