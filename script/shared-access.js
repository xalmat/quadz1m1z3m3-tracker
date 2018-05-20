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

function has(item, amount = -1) {
	var ret = false;
	if(trackerData[selectedGame].items[item]) {
		ret = true;
		if(amount > -1 && trackerData[selectedGame].items[item] < amount) {
			ret = false;
		}
	}
	return ret;
}

// Helper functions to simplify logic.
// ALttP Ability Functions
function canDash() {
	return trackerData[selectedGame].items.boots;
}

function canGrapple() {
	return trackerData[selectedGame].items.hookshot;
}

function canSwim() {
	return trackerData[selectedGame].items.flippers;
}

function canLiftRocks() {
    return trackerData[selectedGame].items.glove >= 1;
}

function canLiftDarkRocks() {
    return trackerData[selectedGame].items.glove === 2;
}

function canLightTorches() {
    return trackerData[selectedGame].items.firerod || trackerData[selectedGame].items.lantern;
}

function canMeltThings() {
    return trackerData[selectedGame].items.firerod || (trackerData[selectedGame].items.bombos && trackerData[selectedGame].items.sword >= 1);
}

function canFly() {
    return trackerData[selectedGame].items.flute;
}

function canSpinSpeed() {
    return canDash() && (trackerData[selectedGame].items.sword >= 1 || canGrapple());
}

function canShootArrows() {
    return trackerData[selectedGame].items.bow;
}

function canBlockLasers() {
    return trackerData[selectedGame].items.shield === 3;
}

function canExtendMagic() {
    return trackerData[selectedGame].items.mpupgrade >= 1 || trackerData[selectedGame].items.bottle >= 1;
}

function glitchedLinkInDarkWorld() {
    return trackerData[selectedGame].items.moonpearl || trackerData[selectedGame].items.bottle >= 1;
}

function canGoBeatAgahnim1(allowOutOfLogicGlitches) {
    return !trackerData[selectedGame].items.agahnim
            && (trackerData[selectedGame].items.lantern || allowOutOfLogicGlitches)
            && (trackerData[selectedGame].items.cape || trackerData[selectedGame].items.sword >= 2)
            && trackerData[selectedGame].items.sword >= 1;
}

function canEnterNorthEastDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return trackerData[selectedGame].items.agahnim
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (trackerData[selectedGame].items.moonpearl
                        && ((canLiftDarkRocks() && (canDash() || canSwim()))
                                || (trackerData[selectedGame].items.hammer && canLiftRocks())))
                || (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                        && (trackerData[selectedGame].items.bottle >= 1
                                || (trackerData[selectedGame].items.mirror && canSpinSpeed())
                                || (trackerData[selectedGame].items.moonpearl && (trackerData[selectedGame].items.mirror || canDash()))));
    }
    else if (logic === 'owGlitches') {
        return trackerData[selectedGame].items.agahnim
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (trackerData[selectedGame].items.moonpearl
                        && ((canLiftDarkRocks() && (canDash() || canSwim()))
                                || (trackerData[selectedGame].items.hammer && canLiftRocks())))
                || (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                        && ((trackerData[selectedGame].items.mirror && canSpinSpeed())
                                || (trackerData[selectedGame].items.moonpearl && (trackerData[selectedGame].items.mirror || canDash()))));
    }
    else if (logic === 'glitchless') {
        return trackerData[selectedGame].items.agahnim
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (trackerData[selectedGame].items.hammer && canLiftRocks() && trackerData[selectedGame].items.moonpearl)
                || (canLiftDarkRocks() && canSwim() && trackerData[selectedGame].items.moonpearl);
    }
}

function canEnterNorthWestDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches)
                || (trackerData[selectedGame].items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData[selectedGame].items.hammer && canLiftRocks())
                                || ((trackerData[selectedGame].items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && canGrapple()
                                        && (trackerData[selectedGame].items.hammer || canLiftRocks() || canSwim()))));
    }
    else if (logic === 'owGlitches') {
        return canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches) && (trackerData[selectedGame].items.mirror || (canDash() && trackerData[selectedGame].items.moonpearl))
                || (trackerData[selectedGame].items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData[selectedGame].items.hammer && canLiftRocks())
                                || ((trackerData[selectedGame].items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && canGrapple()
                                        && (trackerData[selectedGame].items.hammer || canLiftRocks() || canSwim()))));
    }
    else if (logic === 'glitchless') {
        return trackerData[selectedGame].items.moonpearl
                && ((canEnterNorthEastDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches) && (canGrapple() && (canSwim() || canLiftRocks() || trackerData[selectedGame].items.hammer)))
                        || (trackerData[selectedGame].items.hammer && canLiftRocks())
                        || canLiftDarkRocks());
    }
}

function canEnterSouthDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                || (trackerData[selectedGame].items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData[selectedGame].items.hammer && canLiftRocks())
                                || ((trackerData[selectedGame].items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && (trackerData[selectedGame].items.hammer || (canGrapple() && (canSwim() || canLiftRocks()))))));
    }
    else if (logic === 'owGlitches') {
        return (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches) && (trackerData[selectedGame].items.mirror || (canDash() && trackerData[selectedGame].items.moonpearl)))
                || (trackerData[selectedGame].items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData[selectedGame].items.hammer && canLiftRocks())
                                || ((trackerData[selectedGame].items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && (trackerData[selectedGame].items.hammer || (canGrapple() && (canSwim() || canLiftRocks()))))));
    }
    else if (logic === 'glitchless') {
        return trackerData[selectedGame].items.moonpearl
                && (canLiftDarkRocks()
                        || (trackerData[selectedGame].items.hammer && canLiftRocks())
                        || (canEnterNorthEastDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches)
                                && (trackerData[selectedGame].items.hammer
                                        || (canGrapple() && (canSwim() || canLiftRocks())))));
    }
}

function canEnterMireArea(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return (trackerData[selectedGame].items.bottle && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches))
                || (canLiftDarkRocks() && (canFly() || trackerData[selectedGame].items.bottle || canDash()))
                || (glitchedLinkInDarkWorld() && canDash() && canEnterSouthDarkWorld('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return (canLiftDarkRocks() && (canFly() || canDash()))
                || (trackerData[selectedGame].items.moonpearl && trackerData[selectedGame].items.boots && canEnterSouthDarkWorld('owGlitches', agahnimCheck, allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return canFly() && canLiftDarkRocks();
    }
}

function canEnterWestDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canDash()
                || trackerData[selectedGame].items.bottle >= 1
                || canFly()
                || (canLiftRocks() && (trackerData[selectedGame].items.lantern || allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return canDash()
                || canFly()
                || (canLiftRocks() && (trackerData[selectedGame].items.lantern || allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return canFly()
                || (canLiftRocks() && (trackerData[selectedGame].items.lantern || allowOutOfLogicGlitches));
    }
}

function canEnterEastDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canDash()
                || (canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches) && (canGrapple() || trackerData[selectedGame].items.mirror));
    }
    else if (logic === 'owGlitches') {
        return canDash()
                || (canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches) && (canGrapple() || (trackerData[selectedGame].items.mirror && trackerData[selectedGame].items.hammer)));
    }
    else if (logic === 'glitchless') {
        return canEnterWestDeathMountain('glitchless', allowOutOfLogicGlitches) && (canGrapple() || (trackerData[selectedGame].items.mirror && trackerData[selectedGame].items.hammer));
    }
}

function canEnterEastDarkWorldDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return trackerData[selectedGame].items.moonpearl
                || (trackerData[selectedGame].items.bottle >= 1 && canDash())
                || ((canLiftDarkRocks() || (trackerData[selectedGame].items.hammer && canDash())) && canEnterEastDeathMountain('majorGlitches', allowOutOfLogicGlitches))
                || (trackerData[selectedGame].items.mirror && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return (trackerData[selectedGame].items.moonpearl && canDash())
                || ((canLiftDarkRocks() || (trackerData[selectedGame].items.hammer && canDash()))
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
		&& (canUseMorphBombs
			|| canUsePowerBombs()))
	|| trackerData[selectedGame].items.screw;
}
function canEnterAndLeaveGauntlet() {	// Gauntlet area is complicated apparently
	return (canFlySM() || trackerData.metroid3.items.hijump || canDashSM())
		&& canIbj()
			|| (canOpenYellowDoors() && trackerData.metroid3.items.powerbomb >= 2)
			|| trackerData.metroid3.items.screw
			|| (canDashSM() && canOpenYellowDoors() && hasEnergyReserves(2));
}
function canCrystalFlash() {	// Refill HP
	return trackerData.metroid3.items.missile >= 2
		&& trackerData.metroid3.items.supermissile >= 2
		&& trackerData.metroid3.items.powerbomb >= 3;
}
function canDashSM() {	// SM: Speed Booster
	return trackerData[selectedGame].items.speed;
}
function canDamageBoostJump() {	// Requires accurate positioning, #FIXME: Not Casual
	return true;
}
function canFlySM() {	// SM: Infinite Bomb Jump or Space Jump
	return canIbj() || trackerData.metroid3.items.space;
}
function canGrappleSM() {	// SM: Grapple Beam
	return trackerData.metroid3.items.grappling;
}
function canHellRun() {	// Varia or enough health
	return heatProof() || hasEnergyReserves(4);
}
function canHiJump() {
	return trackerData.metroid3.items.hijump || trackerData.metroid3.items.space;
}
function canIbj() {	// Infinite Bomb Jump, #FIXME: Not Casual
	return canUseMorphBombs();
}
function canMachball() {	// #FIXME: Not Casual
	return canMorph();
}
function canMorph () {
	return trackerData[selectedGame].items.morph;
}
function canOpenGreenDoors() {
	return trackerData.metroid3.items.supermissile > 0;
}
function canGGG() {
	return canOpenGreenDoors();
}
function canOpenRedDoors() {
	return trackerData.metroid3.items.missile > 0 || canOpenGreenDoors();
}
function canOpenYellowDoors() {
	return canUsePowerBombs();
}
function canPassBombPassages() {	// Not sure why Power Bombs; Infinite Bomb Jump
	return canUsePowerBombs() || canIbj();
}
function canSwimSM() {	// SM: Gravity Suit
	return trackerData.metroid3.items.gravity;
}
function canUseMorphBombs() {
	return canMorph() && trackerData.metroid3.items.bombs;
}
function canUsePowerBombs() {
	return canMorph() && trackerData.metroid3.items.powerbomb > 0;
}
function hasEnergyReserves(amount) {	// Total Energy Tanks (including Reserve Tanks)
	return ((trackerData.metroid3.items.etank + trackerData.metroid3.items.rtank) >= amount);
}
function heatProof() {	// Varia Suit
	return trackerData[selectedGame].items.varia;
}

// SM Bosses
function canDefeatBotwoon() {
	return trackerData.metroid3.items.ice || canDashSM() || canAccessMaridiaPortal();
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
		&& (trackerData.metroid3.items.hijump || canSwimSM())
		&& canOpenYellowDoors()
		&& (heatProof() && (trackerData.metroid3.items.hijump || canSwimSM()));
}
function canAccessDarkWorldPortal() { // Maridia Missile Refill -> DW (DW Ice Rod Right)
	return canOpenYellowDoors()
		&& canOpenGreenDoors()
		&& (canSwimSM()
			|| (trackerData.metroid3.items.hijump && trackerData.metroid3.items.ice && canGrappleSM()))
		&& (trackerData.metroid3.items.ice && canDashSM());
}

// ALttP -> SM portals
function canAccessCrateriaPortal() { // Fortune Teller -> Crateria Map Room
	return true;
}
function canAccessNorfairPortal() { // DM (Old Man exit) -> Norfair Map Room
	// Death Mountain Access
	return canFly() || (canLiftRocks() && trackerData[selectedGame].items.lantern);
}
function canAccessLowerNorfairPortal() { // Mire (Great Fairy, east "Entrance") -> Lower Norfair (Golden Torizo Energy Refill)
	return canFly() && trackerData[selectedGame].items.moonpearl && canLiftDarkRocks();
}
function canAccessMaridiaPortal() { // DW (DW Ice Rod Right || DW Flute 5) -> Maridia Missile Refill
	return trackerData[selectedGame].items.moonpearl
		&& canSwim()
		&& (((trackerData[selectedGame].items.agahnim
			|| (trackerData[selectedGame].items.hammer && canLiftRocks() && trackerData[selectedGame].items.moonpearl)
			|| (canLiftDarkRocks() && canSwim() && trackerData[selectedGame].items.moonpearl)) && (trackerData[selectedGame].items.hammer
			|| (canGrapple() && (canSwim() || canLiftRocks()))))
			|| (trackerData[selectedGame].items.hammer && canLiftRocks())
			|| canLiftDarkRocks());
}
