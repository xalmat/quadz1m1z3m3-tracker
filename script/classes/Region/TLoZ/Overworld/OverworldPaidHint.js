class OverworldPaidHint extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "PaidHint") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Paid Hint","Unnamed Paid Hint 1",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x1A	// paidhint1
		new Location("Paid Hint","Unnamed Paid Hint 2",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x70	// paidhint2
	],this);
  }
}
