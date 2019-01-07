class RidleyMain extends Ridley {
  constructor(name = "Ridley", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Ridley's Attic",360,507,regionName),							// 0x1812
		new Location("","Leftmost Vertical Shaft 1",297,528,regionName),				// 0x190E
		new Location("","White Room with Pit",339,528,regionName),						// 0x1911
		new Location("","Leftmost Vertical Shaft 2",297,570,regionName,{vanilla:false}),// 0x1B0E
		new Location("","Room after the Stupid Jump",486,570,regionName),				// 0x1B18
		new Location("","Central Purple Hallway",510,570,regionName,{vanilla:false}),	// 0x1B19
		new Location("","Behind Ridley's Room",294,612,regionName),						// 0x1D0F
		new Location("","Bottom of Leftmost Vertical Shaft",297,633,regionName),		// 0x1E0E
		new Location("","Ridley's Basement",402,633,regionName),						// 0x1E14
		new Location("Event","Ridley",336,612,regionName)
	],this);

	this.locations = new LocationCollection([
		new Location("","Ridley's Attic",						 324,	 414,regionName),	// 0x1812
		new Location("","Leftmost Vertical Shaft 1",			 252,	 432,regionName),	// 0x190E
		new Location("","White Room with Pit",					 306,	 432,regionName),	// 0x1911
		new Location("","Leftmost Vertical Shaft 2",			 252,	 468,regionName),	// 0x1B0E
		new Location("","Room after the Stupid Jump",			 432,	 468,regionName),	// 0x1B18
		new Location("","Central Purple Hallway",				 450,	 468,regionName),	// 0x1B19
		new Location("","Behind Ridley's Room",					 270,	 504,regionName),	// 0x1D0F
		new Location("","Bottom of Leftmost Vertical Shaft",	 252,	 522,regionName),	// 0x1E0E
		new Location("","Ridley's Basement",					 360,	 522,regionName),	// 0x1E14
		new Location("Event","Ridley",289,505,regionName)
	],this);
  }

  initCasual() {
	  this.locations["Ridley's Attic"].casualLogic = function() {
		  let ret = false;

		  if(canHiJump()) {
			  ret = true;
		  }

//		  if(canHiJump() || canUseMorphBombs()) {
//			  ret = true;
//		  }

//		  if(canHiJump() || canMorph()) {
//			  ret = true;
//		  }

		  return ret;
	  }
	  this.locations["White Room with Pit"].casualLogic =
	  this.locations["Leftmost Vertical Shaft 1"].casualLogic =
	  this.locations["Leftmost Vertical Shaft 2"].casualLogic = function() {
	  	let ret = false;

	  	if(canOpenRedDoors() && canUseMorphBombs()) {
			ret = true;
		}

//		if(canMorph()) {
//			ret = true;
//		}

	  	return ret;
	  }
	  this.locations["Room after the Stupid Jump"].casualLogic = function() {
		  let ret = false;

		  if(canUseMorphBombs()) {
			  ret = true;
		  }

//		  if(canMorph()) {
//			  ret = true;
//		  }

		  return ret;
	  }
	  this.locations["Behind Ridley's Room"].casualLogic = function() {
		  return canUseMorphBombs();
	  }
  }
}
