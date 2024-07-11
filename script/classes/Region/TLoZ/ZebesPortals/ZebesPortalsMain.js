class ZebesPortalsMain extends ZebesPortals {
  constructor(name = "ZebesPortals", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Portal","Metroid Portal: Death Mountain West",	304/Z1FACTOR,	192/Z1FACTOR,"OverworldCaves")
	],this);
  }

  initCasual() {
  }
}
