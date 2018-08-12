class DungeonsLevel6 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level6") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Dragon",572/Z1FACTOR,372/Z1FACTOR,regionName), // Gohma
	],this);
  }
}
