class DungeonsLevel5 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level5") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Lizard",2882/Z1FACTOR,0,regionName), // Digdogger
	],this);

	this.boss = new BossDigdogger();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Lizard"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canEnter.glitchless = function() {
		  return canSwimZ1();
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Lizard"].glitchless();
	  }
  }
}
