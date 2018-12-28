class DungeonsLevel1 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level1") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Eagle",1856/Z1FACTOR, 556/Z1FACTOR,regionName), // Aquamentus
	],this);

	this.boss = new BossAquamentus();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Eagle"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Eagle"].glitchless();
	  }
  }
}
