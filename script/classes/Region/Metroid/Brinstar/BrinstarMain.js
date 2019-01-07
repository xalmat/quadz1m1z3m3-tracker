class BrinstarMain extends Brinstar {
  constructor(name = "Brinstar", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chozo","Varia Suit Room",297,3,regionName),				// 0x020F
		new Location("","First room in Green Area",486,24,regionName),			// 0x0318
		new Location("","Second room in Green Area",549,24,regionName),			// 0x031B
		new Location("Chozo","Long Beam Room",129,66,regionName),				// 0x0507
		new Location("Chozo","Morph Bombs Room",507,66,regionName),				// 0x0519
		new Location("","Waver Central",507,108,regionName),					// 0x0719
		new Location("","Below First Blue Bridge",297,150,regionName),			// 0x090F
		new Location("Chozo","Ice Beam Room - Brinstar",380,150,regionName),	// 0x0913
		new Location("","Near Entrance to Norfair",360,192,regionName),			// 0x0B12
		new Location("Chozo","Morph Ball Pedestal",24,297,regionName),			// 0x0E02
		new Location("","Ceiling by Giant Shrubbery",171,297,regionName)		// 0x0E09
	],this);

	this.locations = new LocationCollection([
		new Location("Chozo","Varia Suit Room",			 270,	  18,regionName),	// 0x020F
		new Location("","Unnamed 1",					 342,	  18,regionName),	// 0x0213
		new Location("","First room in Green Area",		 432,	  36,regionName),	// 0x0318
		new Location("","Second room in Green Area",	 486,	  36,regionName),	// 0x031B
		new Location("Chozo","Long Beam Room",			 126,	  72,regionName),	// 0x0507
		new Location("Chozo","Morph Bombs Room",		 450,	  72,regionName),	// 0x0519
		new Location("","Waver Central",				 450,	 108,regionName),	// 0x0719
		new Location("","Below First Blue Bridge",		 270,	 144,regionName),	// 0x090F
		new Location("Chozo","Ice Beam Room - Brinstar", 342,	 144,regionName),	// 0x0913
		new Location("","Near Entrance to Norfair",		 324,	 180,regionName),	// 0x0B12
		new Location("Chozo","Morph Ball Pedestal",		  36,	 234,regionName),	// 0x0E02
		new Location("","Ceiling by Giant Shrubbery",	 162,	 234,regionName)	// 0x0E09
	],this);
  }

  initCasual() {
	let region = this;

	this.locations["Unnamed 1"].casualLogic = function() {
		let ret = false;

		if((canMorph() && canHiJump()) && (canUseMorphBombs() || has("wave"))) {
			ret = true;
		}

//		if(canMorph() && canUseMorphBombs() && has("ice")) {
//			ret = true;
//		}

//		if(canMorph() && (canUseMorphBombs() || has("wave"))) {
//			ret = true;
//		}

		return ret;
	}
	this.locations["Varia Suit Room"].casualLogic = function() {
		return region.locations["Unnamed 1"].casualLogic() && canOpenRedDoors();
	}
	this.locations["First room in Green Area"].casualLogic = function() {
		return canMorph() && (canUseMorphBombs() || has("wave"));
	}
	this.locations["Second room in Green Area"].casualLogic = function() {
		let ret = false;

		if(canUseMorphBombs()) {
			ret = true;
		}

//		if(canUseMorphBombs || has("ice")) {
//			ret = true;
//		}

//		if(canMorph()) {
//			ret = true;
//		}

		return ret;
	}
	this.locations["Long Beam Room"].casualLogic =
	this.locations["Morph Bombs Room"].casualLogic = function() {
		return canOpenRedDoors();
	}
	this.locations["Below First Blue Bridge"].casualLogic = function() {
		let ret = false;

		if(canUseMorphBombs()) {
			ret = true;
		}

//		if(canMorph()) {
//			ret = true;
//		}

		return ret;
	}
	this.locations["Ice Beam Room - Brinstar"].casualLogic = function() {
		let ret = false;

		if(canOpenRedDoors() && canUseMorphBombs()) {
			ret = true;
		}

//		if(canOpenRedDoors() && canMorph()) {
//			ret = true;
//		}

		return ret;
	}
	this.locations["Ceiling by Giant Shrubbery"].casualLogic = function() {
		let ret = false;

		if(has("ice")) {
			ret = true;
		}

//		if(has("ice") || (canUseMorphBombs() && canHiJump())) {
//			ret = true;
//		}

		return ret;
	}

    this.canEnter.casualLogic = function() {
		return true;
    }
  }
}
