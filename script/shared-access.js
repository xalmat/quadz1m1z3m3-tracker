function Availability(glitchless = 'unavailable', owGlitches = 'unavailable', majorGlitches = 'unavailable') {
    this._glitchless	= glitchless;
    this._casualLogic	= glitchless;
    this._owGlitches	= owGlitches;
    this._tourneyLogic	= owGlitches;
    this._majorGlitches	= majorGlitches;

    this.getClassName = function () {
        return this[trackerOptions[selectedGame].mapLogic];
    }
}

Object.defineProperty(Availability.prototype, 'casualLogic', {
    get: function () {
        return this._casualLogic;
    },
    set: function (value) {
		this._glitchless = value;
        this._casualLogic = value;
        this._owGlitches = value;
        this._majorGlitches = value;
    }
});

Object.defineProperty(Availability.prototype, 'glitchless', {
    get: function () {
        return this._glitchless;
    },
    set: function (value) {
        this._glitchless = value;
        this._owGlitches = value;
        this._majorGlitches = value;
    }
});

Object.defineProperty(Availability.prototype, 'owGlitches', {
    get: function () {
        return this._owGlitches;
    },
    set: function (value) {
        this._owGlitches = value;
        this._majorGlitches = value;
    }
});

Object.defineProperty(Availability.prototype, 'tourneyLogic', {
    get: function () {
        return this._tourneyLogic;
    },
    set: function (value) {
        this._owGlitches = value;
		this._tourneyLogic = value;
        this._majorGlitches = value;
    }
});

Object.defineProperty(Availability.prototype, 'majorGlitches', {
    get: function () {
        return this._majorGlitches;
    },
    set: function (value) {
        this._majorGlitches = value;
    }
});

function getHas(item) {
	var val = -1;
	if(trackerData[selectedGame] && trackerData[selectedGame].items && trackerData[selectedGame].items[item]) {
		val = trackerData[selectedGame].items[item];
	} else if(trackerData.zelda3 && trackerData.zelda3.items && trackerData.zelda3.items[item]) {
		val = trackerData.zelda3.items[item];
	} else if(trackerData.metroid3 && trackerData.metroid3.items && trackerData.metroid3.items[item]) {
		val = trackerData.metroid3.items[item];
	}
	return val;
}
function has(item, amount = -1) {
	var ret = false;
	var val = -1;
	if(trackerData[selectedGame] && trackerData[selectedGame].items && trackerData[selectedGame].items[item]) {
		ret = true;
		val = trackerData[selectedGame].items[item];
	} else if(trackerData.zelda3 && trackerData.zelda3.items && trackerData.zelda3.items[item]) {
		ret = true;
		val = trackerData.zelda3.items[item];
	} else if(trackerData.metroid3 && trackerData.metroid3.items && trackerData.metroid3.items[item]) {
		ret = true;
		val = trackerData.metroid3.items[item];
	}
	if(ret) {
		if(amount > -1 && val < amount) {
			ret = false;
		}
	}
	return ret;
}

// Helper functions to simplify logic.
// ALttP Ability Functions
function canDash() {
	return has("boots");
}

function canGrapple() {
	return has("hookshot");
}

function canInvul() {
	return has("cape") || has("byrna");
}

function canRead() {
	return has("book");
}

function canSwim() {
	return has("flippers");
}

function canLiftRocks() {
    return has("glove",1);
}

function canLiftDarkRocks() {
    return has("glove",2);
}

function canLightTorches() {
    return has("firerod") || has("lantern");
}

function canMeltThings() {
    return has("firerod") || (has("bombos") && has("sword",1));
}

function canFly() {
    return has("flute");
}

function canSpinSpeed() {
    return canDash() && (has("sword",1) || canGrapple());
}

function canShootArrows() {
    return has("bow");
}

function canBlockLasers() {
    return has("shield",3);
}

function canExtendMagic() {
    return has("mpupgrade",1) || has("bottle",1);
}

function glitchedLinkInDarkWorld() {
    return has("moonpearl") || has("bottle",1);
}

function canGoBeatAgahnim1(allowOutOfLogicGlitches) {
    return !has("agahnim")
            && (has("lantern") || allowOutOfLogicGlitches)
            && (has("cape") || has("sword",2))
            && has("sword",1);
}

function canEnterNorthEastDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return has("agahnim")
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (has("moonpearl")
                        && ((canLiftDarkRocks() && (canDash() || canSwim()))
                                || (has("hammer") && canLiftRocks())))
                || (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                        && (has("bottle",1)
                                || (has("mirror") && canSpinSpeed())
                                || (has("moonpearl") && (has("mirror") || canDash()))));
    }
    else if (logic === 'owGlitches') {
        return has("agahnim")
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (has("moonpearl")
                        && ((canLiftDarkRocks() && (canDash() || canSwim()))
                                || (has("hammer") && canLiftRocks())))
                || (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                        && ((has("mirror") && canSpinSpeed())
                                || (has("moonpearl") && (has("mirror") || canDash()))));
    }
    else if (logic === 'glitchless') {
        return has("agahnim")
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (has("hammer") && canLiftRocks() && has("moonpearl"))
                || (canLiftDarkRocks() && canSwim() && has("moonpearl"))
                || (canAccessDarkWorldPortal() && canSwim() && has("moonpearl"));
    }
}

function canEnterNorthWestDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches)
                || (has("moonpearl")
                        && (canLiftDarkRocks()
                                || (has("hammer") && canLiftRocks())
                                || ((has("agahnim") || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && canGrapple()
                                        && (has("hammer") || canLiftRocks() || canSwim()))));
    }
    else if (logic === 'owGlitches') {
        return canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches) && (has("mirror") || (canDash() && has("moonpearl")))
                || (has("moonpearl")
                        && (canLiftDarkRocks()
                                || (has("hammer") && canLiftRocks())
                                || ((has("agahnim") || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && canGrapple()
                                        && (has("hammer") || canLiftRocks() || canSwim()))));
    }
    else if (logic === 'glitchless') {
        return has("moonpearl")
                && ((canEnterNorthEastDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches) && (canGrapple() && (canSwim() || canLiftRocks() || has("hammer"))))
                        || (has("hammer") && canLiftRocks())
                        || canLiftDarkRocks());
    }
}

function canEnterSouthDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                || (has("moonpearl")
                        && (canLiftDarkRocks()
                                || (has("hammer") && canLiftRocks())
                                || ((has("agahnim") || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && (has("hammer") || (canGrapple() && (canSwim() || canLiftRocks()))))));
    }
    else if (logic === 'owGlitches') {
        return ((has("moonpearl")
        		&& (canLiftDarkRocks()
        				|| (has("hammer") && canLiftRocks())
        				|| (has("agahnim") && (has("hammer")
        						|| (canGrapple() && (canLiftRocks() || canSwim()))))))
        		|| ((has("mirror") || (canDash() && has("moonpearl")))
        				&& canEnterWestDeathMountain(logic, allowOutOfLogicGlitches))
        		|| (canAccessDarkWorldPortal() && canSwim()));
    }
    else if (logic === 'glitchless') {
        return has("moonpearl")
                && (canLiftDarkRocks()
                        || (has("hammer") && canLiftRocks())
                        || (canEnterNorthEastDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches)
                                && (has("hammer")
                                        || (canGrapple() && (canSwim() || canLiftRocks())))));
    }
}

function canEnterMireArea(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return (has("bottle") && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches))
                || (canLiftDarkRocks() && (canFly() || has("bottle") || canDash()))
                || (glitchedLinkInDarkWorld() && canDash() && canEnterSouthDarkWorld('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return (canLiftDarkRocks() && (canFly() || canDash()))
                || (has("moonpearl") && has("boots") && canEnterSouthDarkWorld('owGlitches', agahnimCheck, allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return (canFly() && canLiftDarkRocks()) || canAccessMiseryMirePortal();
    }
}

function canEnterWestDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canDash()
                || has("bottle",1)
                || canFly()
                || (canLiftRocks() && (has("lantern") || allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return canDash()
                || canFly()
                || (canLiftRocks() && (has("lantern") || allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return canFly()
                || (canLiftRocks() && (has("lantern") || allowOutOfLogicGlitches))
                || canAccessDeathMountainPortal();
    }
}

function canEnterEastDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canDash()
                || (canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches) && (canGrapple() || has("mirror")));
    }
    else if (logic === 'owGlitches') {
        return canDash()
                || (canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches) && (canGrapple() || (has("mirror") && has("hammer"))));
    }
    else if (logic === 'glitchless') {
        return canEnterWestDeathMountain('glitchless', allowOutOfLogicGlitches) && (canGrapple() || (has("mirror") && has("hammer")));
    }
}

function canEnterEastDarkWorldDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return has("moonpearl")
                || (has("bottle",1) && canDash())
                || ((canLiftDarkRocks() || (has("hammer") && canDash())) && canEnterEastDeathMountain('majorGlitches', allowOutOfLogicGlitches))
                || (has("mirror") && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return (has("moonpearl") && canDash())
                || ((canLiftDarkRocks() || (has("hammer") && canDash()))
                        && canEnterEastDeathMountain('owGlitches', allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return canLiftDarkRocks() && canEnterEastDeathMountain('glitchless', allowOutOfLogicGlitches);
    }
}

// app/Support/ItemCollection.php
// SM Ability functions
function canDestroyBombWalls() {	// Morph Ball, Bombs || Power Bombs, Screw Attack
	return (canMorph()
		&& (canUseMorphBombs()
			|| canUsePowerBombs()))
	|| has("screw");
}
function canEnterAndLeaveGauntlet() {	// Gauntlet area is complicated apparently
	return (canFlySM() || canHiJump() || canDashSM())
		&& canIbj()
			|| (canOpenYellowDoors() && has("powerbomb",2))
			|| has("screw")
			|| (canDashSM() && canOpenYellowDoors() && hasEnergyReserves(2));
}
function canCrystalFlash() {	// Refill HP
	return has("missile",2)
		&& has("supermissile",2)
		&& has("powerbomb",3)
		&& canMorph();
}
function canDashSM() {	// SM: Speed Booster
	return has("speed");
}
function canDamageBoostJump() {	// Requires accurate positioning, #FIXME: Not Casual
	return true;
}
function canFlySM() {	// SM: Infinite Bomb Jump or Space Jump
	return canIbj() || has("space");
}
function canGrappleSM() {	// SM: Grapple Beam
	return has("grappling");
}
function canHellRun() {	// Varia or enough health
	return heatProof() || hasEnergyReserves(5);
}
function canHiJump() {
	return has("hijump") || has("space");
}
function canIbj() {	// Infinite Bomb Jump, #FIXME: Not Casual
	return canUseMorphBombs();
}
function canMachball() {	// #FIXME: Not Casual
	return canMorph();
}
function canMorph () {
	return has("morph");
}
function canOpenGreenDoors() {
	return has("supermissile",1);
}
function canGGG() {
	return canOpenGreenDoors();
}
function canOpenRedDoors() {
	return has("missile",1) || canOpenGreenDoors();
}
function canOpenYellowDoors() {
	return canUsePowerBombs();
}
function canPassBombPassages() {	// Not sure why Power Bombs; Infinite Bomb Jump
	return canUsePowerBombs() || canIbj();
}
function canSpringBall() {
	return canMorph() && has("springball");
}
function canSwimSM() {	// SM: Gravity Suit
	return has("gravity");
}
function canUseMorphBombs() {
	return canMorph() && has("bombs");
}
function canUsePowerBombs() {
	return canMorph() && has("powerbomb",1);
}
function hasEnergyReserves(amount) {	// Total Energy Tanks (including Reserve Tanks)
	return getHas("etank") + getHas("rtank") >= amount;
}
function heatProof() {	// Varia Suit
	return has("varia");
}

// SM Bosses
function canDefeatBotwoon() {
	return has("ice") || canDashSM() || canAccessMaridiaPortal();
}
function canDefeatDraygon() {
	return canDefeatBotwoon() && canSwimSM();
}

// SM -> ALttP portals
function canAccessLightWorldPortal() {	// Crateria Map Room -> Link's Fortune Teller
	return true;
}
function canAccessDeathMountainPortal() { // Norfair Map Room -> DM (Old Man exit)
	return ((canDestroyBombWalls() || canDashSM())
	&& (canOpenGreenDoors() && canMorph()));
}
function canAccessMiseryMirePortal() { // Lower Norfair (Golden Torizo Energy Refill) -> Mire (Great Fairy, east "Entrance")
	return heatProof()
		&& canOpenGreenDoors()
		&& (canHiJump() || canSwimSM())
		&& canOpenYellowDoors();
}
function canAccessDarkWorldPortal() { // Maridia Missile Refill -> DW (DW Ice Rod Right)
	return canOpenYellowDoors()
		&& canOpenGreenDoors()
		&& (canSwimSM()
			|| (canHiJump() && has("ice") && canGrappleSM()))
		&& (has("ice") || (canDashSM() && canSwimSM()));
}

// ALttP -> SM portals
function canAccessCrateriaPortal() { // Fortune Teller -> Crateria Map Room
	return true;
}
function canAccessNorfairPortal() { // DM (Old Man exit) -> Norfair Map Room
	// Death Mountain Access
	return canFly() || (canLiftRocks() && has("lantern"));
}
function canAccessLowerNorfairPortal() { // Mire (Great Fairy, east "Entrance") -> Lower Norfair (Golden Torizo Energy Refill)
	return canFly() && canLiftDarkRocks();
}
function canAccessMaridiaPortal() { // DW (DW Ice Rod Right) -> Maridia Missile Refill
	return has("moonpearl")
		&& canSwim()
		&& (((has("agahnim")
			|| (has("hammer") && canLiftRocks() && has("moonpearl"))
			|| (canLiftDarkRocks() && canSwim() && has("moonpearl"))) && (has("hammer")
			|| (canGrapple() && (canSwim() || canLiftRocks()))))
			|| (has("hammer") && canLiftRocks())
			|| canLiftDarkRocks());
}
