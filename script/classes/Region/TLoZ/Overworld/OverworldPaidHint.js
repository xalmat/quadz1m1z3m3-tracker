class OverworldPaidHint extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "PaidHint") {
	super(name,subname);
	let regionName = name + subname;

	// Both Quests
	this.locations = new LocationCollection([
		new Location("Paid Hint","Unnamed Paid Hint 1",	2656/Z1FACTOR,	 240/Z1FACTOR,regionName,{equipment:"%%recorder%%"}),	// 0x1A	// paidhint1
		new Location("Paid Hint","Unnamed Paid Hint 2",	 176/Z1FACTOR,	1248/Z1FACTOR,regionName),								// 0x70	// paidhint2
	],this);
  }

  initNoMajorGlitches() {
	  this.locations["Unnamed Paid Hint 1"].glitchless = function() {
		  return has("recorder");
	  }
  }
}
