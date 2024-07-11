class DungeonsLevel8 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level8") {
	super(name,subname);
	let regionName = name + subname;
	let x = 0;
	let y = 0;
	if(questid == 1) {
		x = 3392;
		y = 1072;
	} else if(questid == 2) {
		x = 2368,
		y =  224;
	}
	this.locations = new LocationCollection([
		new Location("Event","The Lion",x/Z1FACTOR,y/Z1FACTOR,regionName), // Gleeok
	],this);

	this.boss = new BossGleeok();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Lion"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canEnter.glitchless = function() {
		  return canLightBushes();
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Lion"].glitchless();
	  }
  }
}
