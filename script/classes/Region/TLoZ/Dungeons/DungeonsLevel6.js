class DungeonsLevel6 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level6") {
	super(name,subname);
	let regionName = name + subname;
	let x = 0;
	let y = 0;
	if(questid == 1) {
		x =  572;
		y =  372;
	} else if(questid == 2) {
		x =   96,
		y =  608;
	}
	this.locations = new LocationCollection([
		new Location("Event","The Dragon",x/Z1FACTOR,y/Z1FACTOR,regionName), // Gohma
	],this);

	this.boss = new BossGohma();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Dragon"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canEnter.glitchless = function() {
		  return canSwimZ1();
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Dragon"].glitchless();
	  }
  }
}
