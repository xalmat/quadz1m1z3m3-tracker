class OverworldItem extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Item") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Cave",	"Letter Cave",					3664/Z1FACTOR,   64/Z1FACTOR,regionName),	// 0x0E	// item1
		new Location("Cave",	"Wooden Sword Cave",			1856/Z1FACTOR, 1248/Z1FACTOR,regionName),	// 0x77	// item2
		new Location("Cave",	"White Sword Cave",				2592/Z1FACTOR,   16/Z1FACTOR,regionName),	// 0x0A	// item3
		new Location("Cave",	"Magical Sword Cave",			 400/Z1FACTOR,  432/Z1FACTOR,regionName)	// 0x21	// item4
	],this);
  }

  initMinorGlitches() {
	  this.locations["Magical Sword Cave"].glitchless = function() {
		  return has("heartcontainer",3+9);
	  }
	  this.locations["White Sword Cave"].glitchless = function() {
		  return has("heartcontainer",3+2);
	  }
  }
}
