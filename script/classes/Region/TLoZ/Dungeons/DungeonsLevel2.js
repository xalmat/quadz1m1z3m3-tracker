class DungeonsLevel2 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level2") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Moon",3130/Z1FACTOR,    556/Z1FACTOR,regionName), // Dodongo
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
