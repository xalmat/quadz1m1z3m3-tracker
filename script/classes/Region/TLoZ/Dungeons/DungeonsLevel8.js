class DungeonsLevel8 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level8") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Lion",3392/Z1FACTOR,1072/Z1FACTOR,regionName), // Gleeok
	],this);

	this.boss = new BossGleeok();
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["The Lion"].glitchless = function() {
		  return boss.canBeat();
	  }

	  this.canEnter.glitchless = function() {
		  return canLightBushes();
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.locations["The Lion"].glitchless();
	  }
  }
}
