class DungeonsLevel3 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level3") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Manji",1088/Z1FACTOR,1248/Z1FACTOR,regionName), // Manhandla
	],this);

	this.boss = new BossManhandla();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Manji"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Manji"].glitchless();
	  }
  }
}
