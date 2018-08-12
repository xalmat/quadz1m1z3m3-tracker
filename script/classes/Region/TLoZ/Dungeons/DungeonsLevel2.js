class DungeonsLevel2 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level2") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Moon",3130/Z1FACTOR,    556/Z1FACTOR,regionName), // Dodongo
	],this);
  }
}
