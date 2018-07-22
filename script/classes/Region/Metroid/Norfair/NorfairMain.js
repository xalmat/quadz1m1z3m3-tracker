class NorfairMain extends Norfair {
  constructor(name = "Norfair", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Upper Right Area Top Floor - Left",549,192,regionName),				// 0x0A1B
		new Location("","Upper Right Area Top Floor - Right",570,192,regionName),				// 0x0A1C
		new Location("","Upper Right Area Middle Floor - Left",528,213,regionName),				// 0x0B1A
		new Location("","Upper Right Area Middle Floor - Middle",549,213,regionName),			// 0x0B1B
		new Location("","Upper Right Area Middle Floor - Right",570,213,regionName),			// 0x0B1C
		new Location("Chozo","Ice Beam Room - Norfair",528,234,regionName),						// 0x0C1A
		new Location("","Left from Lobby",360,276,regionName),									// 0x0E12
		new Location("","Left from Lobby, then Down, then Right",339,297,regionName),			// 0x0F11
		new Location("","Right from Lobby, then Down, then Left - Left",382,297,regionName),	// 0x0F13
		new Location("","Right from Lobby, then Down, then Left - Right",402,297,regionName),	// 0x0F14
		new Location("Chozo","Screw Attack Room",297,318,regionName),							// 0x100F
		new Location("Chozo","High Jump Boots Room",549,339,regionName),						// 0x111B
		new Location("","Past Gumdrop Cavern, then under the Fake Lava",528,381,regionName),	// 0x131A
		new Location("","Above Wave Beam Room, to the Right",568,402,regionName),				// 0x141C
		new Location("Chozo","Wave Beam Room",362,423,regionName),								// 0x1512
		new Location("","Below the Wave Beam Room - Left",380,444,regionName),					// 0x1613
		new Location("","Below the Wave Beam Room - Right",400,444,regionName)					// 0x1614
	],this);
  }

  initCasual() {
	  this.locations["Upper Right Area Top Floor - Left"].casualLogic =
	  this.locations["Upper Right Area Top Floor - Right"].casualLogic = function() {
		  return canHiJump() || (has("ice") && canUseMorphBombs());
	  }
	  this.locations["Upper Right Area Middle Floor - Left"].casualLogic =
	  this.locations["Upper Right Area Middle Floor - Middle"].casualLogic =
	  this.locations["Upper Right Area Middle Floor - Right"].casualLogic = function() {
		  return has("ice") || canHiJump();
	  }
	  this.locations["Ice Beam Room - Norfair"].casualLogic = function() {
		  return (has("ice") || canHiJump()) || canUseMorphBombs();
	  }
	  this.locations["Left from Lobby, then Down, then Right"].casualLogic = function() {
		  return canUseMorphBombs();
	  }
	  this.locations["Right from Lobby, then Down, then Left - Left"].casualLogic =
	  this.locations["Right from Lobby, then Down, then Left - Right"].casualLogic =
	  this.locations["Screw Attack Room"].casualLogic =
	  this.locations["Past Gumdrop Cavern, then under the Fake Lava"].casualLogic =
	  this.locations["Above Wave Beam Room, to the Right"].casualLogic =
	  this.locations["Wave Beam Room"].casualLogic =
	  this.locations["Below the Wave Beam Room - Left"].casualLogic =
	  this.locations["Below the Wave Beam Room - Right"].casualLogic = function() {
		  return has("ice") && canUseMorphBombs();
	  }
  }
}
