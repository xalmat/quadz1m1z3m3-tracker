class KraidMain extends Kraid {
  constructor(name = "Kraid", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Left of First Doors",66,444,regionName),										// 0x1504
		new Location("","Right of First Doors",171,444,regionName),										// 0x1509
		new Location("","Right of Second Doors",192,465,regionName),									// 0x160A
		new Location("","Room next to Tower of Breakable Blocks",192,528,regionName),					// 0x190A
		new Location("","Left of Second Doors Below Fake Lava then to the Right",84,570,regionName),	// 0x1B05
		new Location("","Kraid's Room",131,612,regionName),												// 0x1D08
		new Location("Event","Kraid",149,612,regionName)
	],this);
  }

  initCasual() {
	  this.locations["Left of First Doors"].casualLogic = function() {
		  return (has("ice") && canHiJump()) || canUseMorphBombs();
	  }
	  this.locations["Right of Second Doors"].casualLogic = function() {
		  return canUseMorphBombs();
	  }
	  this.locations["Room next to Tower of Breakable Blocks"].casualLogic = function() {
		  return has("ice");
	  }
	  this.locations["Kraid's Room"].casualLogic =
	  this.locations["Kraid"].casualLogic = function() {
		  return (has("ice") && canMorph()) || canUseMorphBombs();
	  }
  }
}
