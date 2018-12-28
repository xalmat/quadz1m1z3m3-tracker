class DungeonsLevel9 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level9") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","Death Mountain",1326/Z1FACTOR,0,regionName), // Ganon
	],this);
  }

  initNoMajorGlitches() {
	  let boss = this.boss;
	  let dungeon = this;

	  this.canEnter.glitchless = function() {
		  let ret = true;

		  for(let i = 0; i < 8; i++) {
			  if(! trackerData.zelda1.dungeonbeaten[i]) {
				  ret = false;
			  }
		  }

		  return ret && has("bomb");
	  }
	  this.canComplete.glitchless = function() {
		  return dungeon.canEnter.glitchless();
	  }
  }
}
