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
  }

  initCasual() {
	this.locations["Varia Suit Room"].casualLogic = function() {
		let ret = false;
		if(canUseMorphBombs() && canHiJump()) {
			ret = true;
		}
		if(canMorph() && has("wave") && canHiJump()) {
			ret = true;
		}
		return ret;
	}
	this.locations["First room in Green Area"].casualLogic = function() {
		return canMorph() && (canUseMorphBombs() || has("wave"));
	}
	this.locations["Second room in Green Area"].casualLogic = function() {
		return canUseMorphBombs();
	}
	this.locations["Ice Beam Room - Brinstar"].casualLogic = function() {
		return canUseMorphBombs();
	}
	this.locations["Ceiling by Giant Shrubbery"].casualLogic = function() {
		return has("ice");
	}

    this.canEnter.casualLogic = function() {
		return true;
    }
  }
}
