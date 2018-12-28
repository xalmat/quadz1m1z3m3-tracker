class DungeonsLevel4 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level4") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Snake",1346/Z1FACTOR,724/Z1FACTOR,regionName), // Gleeok
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
