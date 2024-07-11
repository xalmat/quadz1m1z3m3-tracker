class DungeonsLevel4 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level4") {
	super(name,subname);
	let regionName = name + subname;
	let x = 0;
	let y = 0;
	if(questid == 1) {
		x = 1343;
		y =  724;
	} else if(questid == 2) {
		x = 2882,
		y =  200;
	}
	this.locations = new LocationCollection([
		new Location("Event","The Snake",x/Z1FACTOR,y/Z1FACTOR,regionName), // Gleeok
	],this);

	this.boss = new BossGleeok();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Snake"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canEnter.glitchless = function() {
		  return canSwimZ1();
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Snake"].glitchless();
	  }
  }
}
