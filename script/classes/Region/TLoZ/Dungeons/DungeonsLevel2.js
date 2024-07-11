class DungeonsLevel2 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level2") {
	super(name,subname);
	let regionName = name + subname;
	let x = 0;
	let y = 0;
	if(questid == 1) {
		x = 3130,
		y =  556;
	} else if(questid == 2) {
		x = 1048;
		y =  562;
	}
	this.locations = new LocationCollection([
		new Location("Event","The Moon",x/Z1FACTOR,y/Z1FACTOR,regionName), // Dodongo
	],this);

	this.boss = new BossDodongo();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Moon"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Moon"].glitchless();
	  }
  }
}
