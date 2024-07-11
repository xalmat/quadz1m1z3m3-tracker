class DungeonsLevel7 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level7") {
	super(name,subname);
	let regionName = name + subname;
	let x = 0;
	let y = 0;
	if(questid == 1) {
		x =  572;
		y =  720;
	} else if(questid == 2) {
		x = 3152,
		y = 1088;
	}
	this.locations = new LocationCollection([
		new Location("Event","The Demon",x/Z1FACTOR,y/Z1FACTOR,regionName), // Aquamentus
	],this);

	this.boss = new BossAquamentus();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Demon"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canEnter.glitchless = function() {
		  return has("recorder");
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Demon"].glitchless();
	  }
  }
}
