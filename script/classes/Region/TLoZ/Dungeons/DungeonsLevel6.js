class DungeonsLevel6 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level6") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Dragon",572/Z1FACTOR,372/Z1FACTOR,regionName), // Gohma
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
