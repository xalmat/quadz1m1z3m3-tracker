class DungeonsLevel3 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level3") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Manji",1088/Z1FACTOR,1248/Z1FACTOR,regionName), // Manhandla
	],this);
  }
}
