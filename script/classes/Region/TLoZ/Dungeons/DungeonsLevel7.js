class DungeonsLevel7 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level7") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Demon",572/Z1FACTOR,720/Z1FACTOR,regionName), // Aquamentus
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
