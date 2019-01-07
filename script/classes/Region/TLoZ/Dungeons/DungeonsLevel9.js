class DungeonsLevel9 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level9") {
	super(name,subname);
	let regionName = name + subname;
	let x = 0;
	let y = 0;
	if(questid == 1) {
		x = 1326;
		y =    0;
	} else if(questid == 2) {
		x =  160,
		y =   64;
	}
	this.locations = new LocationCollection([
		new Location("Event","Death Mountain",x/Z1FACTOR,y/Z1FACTOR,regionName), // Ganon
	],this);
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.canEnter.glitchless = function() {
		  let ret = true;

		  for(let i = 0; i < 8; i++) {
			  if(! trackerData.zelda1.dungeonbeaten[i]) {
				  ret = false;
			  }
		  }

		  return ret && has("bomb");
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.canEnter.glitchless();
	  }
  }
}
