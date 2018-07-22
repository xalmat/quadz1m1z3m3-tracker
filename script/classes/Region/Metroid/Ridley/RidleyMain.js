class RidleyMain extends Ridley {
  constructor(name = "Ridley", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Ridley's Attic",360,507,regionName),				// 0x1812
		new Location("","White Room with Pit",339,528,regionName),			// 0x1911
		new Location("","Room after the Stupid Jump",486,570,regionName),	// 0x1B18
		new Location("","Behind Ridley's Room",294,612,regionName),			// 0x1D0F
		new Location("","Ridley's Basement",402,633,regionName),			// 0x1E14
		new Location("Event","Ridley",336,612,regionName)
	],this);
  }

  initCasual() {
	  this.locations["Ridley's Attic"].casualLogic = function() {
		  return canHiJump() && canUseMorphBombs();
	  }
	  this.locations["White Room with Pit"].casualLogic =
	  this.locations["Room after the Stupid Jump"].casualLogic = function() {
		  return canUseMorphBombs();
	  }
	  this.locations["Behind Ridley's Room"].casualLogic = function() {
		  return canMorph();
	  }
  }
}
