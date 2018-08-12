class DungeonsLevel5 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level5") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Lizard",2882/Z1FACTOR,0,regionName), // Digdogger
	],this);
  }
}
