function Availability(glitchless = 'unavailable', owGlitches = 'unavailable', majorGlitches = 'unavailable') {
    this._glitchless = glitchless;
    this._owGlitches = owGlitches;
    this._majorGlitches = majorGlitches;

    this.getClassName = function () {
        return this[trackerOptions[selectedGame].mapLogic];
    }
}

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

Object.defineProperty(Availability.prototype, 'majorGlitches', {
    get: function () {
        return this._majorGlitches;
    },
    set: function (value) {
        this._majorGlitches = value;
    }
});

// Helper functions to simplify logic.
function canLiftRocks() {
    return trackerData.zelda3.items.glove >= 1;
}

function canLiftDarkRocks() {
    return trackerData.zelda3.items.glove === 2;
}

function canLightTorches() {
    return trackerData.zelda3.items.firerod || trackerData.zelda3.items.lantern;
}

function canMeltThings() {
    return trackerData.zelda3.items.firerod || (trackerData.zelda3.items.bombos && trackerData.zelda3.items.sword >= 1);
}

function canFly() {
    return trackerData.zelda3.items.flute;
}

function canSpinSpeed() {
    return trackerData.zelda3.items.boots && (trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hookshot);
}

function canShootArrows() {
    return trackerData.zelda3.items.bow;
}

function canBlockLasers() {
    return trackerData.zelda3.items.shield === 3;
}

function canExtendMagic() {
    return trackerData.zelda3.items.mpupgrade >= 1 || trackerData.zelda3.items.bottle >= 1;
}

function glitchedLinkInDarkWorld() {
    return trackerData.zelda3.items.moonpearl || trackerData.zelda3.items.bottle >= 1;
}

function canGoBeatAgahnim1(allowOutOfLogicGlitches) {
    return !trackerData.zelda3.items.agahnim
            && (trackerData.zelda3.items.lantern || allowOutOfLogicGlitches)
            && (trackerData.zelda3.items.cape || trackerData.zelda3.items.sword >= 2)
            && trackerData.zelda3.items.sword >= 1;
}

function canEnterNorthEastDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return trackerData.zelda3.items.agahnim
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (trackerData.zelda3.items.moonpearl
                        && ((canLiftDarkRocks() && (trackerData.zelda3.items.boots || trackerData.zelda3.items.flippers))
                                || (trackerData.zelda3.items.hammer && canLiftRocks())))
                || (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                        && (trackerData.zelda3.items.bottle >= 1
                                || (trackerData.zelda3.items.mirror && canSpinSpeed())
                                || (trackerData.zelda3.items.moonpearl && (trackerData.zelda3.items.mirror || trackerData.zelda3.items.boots))));
    }
    else if (logic === 'owGlitches') {
        return trackerData.zelda3.items.agahnim
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (trackerData.zelda3.items.moonpearl
                        && ((canLiftDarkRocks() && (trackerData.zelda3.items.boots || trackerData.zelda3.items.flippers))
                                || (trackerData.zelda3.items.hammer && canLiftRocks())))
                || (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                        && ((trackerData.zelda3.items.mirror && canSpinSpeed())
                                || (trackerData.zelda3.items.moonpearl && (trackerData.zelda3.items.mirror || trackerData.zelda3.items.boots))));
    }
    else if (logic === 'glitchless') {
        return trackerData.zelda3.items.agahnim
                || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches))
                || (trackerData.zelda3.items.hammer && canLiftRocks() && trackerData.zelda3.items.moonpearl)
                || (canLiftDarkRocks() && trackerData.zelda3.items.flippers && trackerData.zelda3.items.moonpearl);
    }
}

function canEnterNorthWestDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches)
                || (trackerData.zelda3.items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData.zelda3.items.hammer && canLiftRocks())
                                || ((trackerData.zelda3.items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && trackerData.zelda3.items.hookshot
                                        && (trackerData.zelda3.items.hammer || canLiftRocks() || trackerData.zelda3.items.flippers))));
    }
    else if (logic === 'owGlitches') {
        return canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches) && (trackerData.zelda3.items.mirror || (trackerData.zelda3.items.boots && trackerData.zelda3.items.moonpearl))
                || (trackerData.zelda3.items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData.zelda3.items.hammer && canLiftRocks())
                                || ((trackerData.zelda3.items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && trackerData.zelda3.items.hookshot
                                        && (trackerData.zelda3.items.hammer || canLiftRocks() || trackerData.zelda3.items.flippers))));
    }
    else if (logic === 'glitchless') {
        return trackerData.zelda3.items.moonpearl
                && ((canEnterNorthEastDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches) && (trackerData.zelda3.items.hookshot && (trackerData.zelda3.items.flippers || canLiftRocks() || trackerData.zelda3.items.hammer)))
                        || (trackerData.zelda3.items.hammer && canLiftRocks())
                        || canLiftDarkRocks());
    }
}

function canEnterSouthDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return canEnterWestDeathMountain(logic, allowOutOfLogicGlitches)
                || (trackerData.zelda3.items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData.zelda3.items.hammer && canLiftRocks())
                                || ((trackerData.zelda3.items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && (trackerData.zelda3.items.hammer || (trackerData.zelda3.items.hookshot && (trackerData.zelda3.items.flippers || canLiftRocks()))))));
    }
    else if (logic === 'owGlitches') {
        return (canEnterWestDeathMountain(logic, allowOutOfLogicGlitches) && (trackerData.zelda3.items.mirror || (trackerData.zelda3.items.boots && trackerData.zelda3.items.moonpearl)))
                || (trackerData.zelda3.items.moonpearl
                        && (canLiftDarkRocks()
                                || (trackerData.zelda3.items.hammer && canLiftRocks())
                                || ((trackerData.zelda3.items.agahnim || (agahnimCheck && canGoBeatAgahnim1(allowOutOfLogicGlitches)))
                                        && (trackerData.zelda3.items.hammer || (trackerData.zelda3.items.hookshot && (trackerData.zelda3.items.flippers || canLiftRocks()))))));
    }
    else if (logic === 'glitchless') {
        return trackerData.zelda3.items.moonpearl
                && (canLiftDarkRocks()
                        || (trackerData.zelda3.items.hammer && canLiftRocks())
                        || (canEnterNorthEastDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches)
                                && (trackerData.zelda3.items.hammer
                                        || (trackerData.zelda3.items.hookshot && (trackerData.zelda3.items.flippers || canLiftRocks())))));
    }
}

function canEnterMireArea(logic, agahnimCheck, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return (trackerData.zelda3.items.bottle && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches))
                || (canLiftDarkRocks() && (canFly() || trackerData.zelda3.items.bottle || trackerData.zelda3.items.boots))
                || (glitchedLinkInDarkWorld() && trackerData.zelda3.items.boots && canEnterSouthDarkWorld('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return (canLiftDarkRocks() && (canFly() || trackerData.zelda3.items.boots))
                || (trackerData.zelda3.items.moonpearl && trackerData.zelda3.items.boots && canEnterSouthDarkWorld('owGlitches', agahnimCheck, allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return canFly() && canLiftDarkRocks();
    }
}

function canEnterWestDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return trackerData.zelda3.items.boots
                || trackerData.zelda3.items.bottle >= 1
                || canFly()
                || (canLiftRocks() && (trackerData.zelda3.items.lantern || allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return trackerData.zelda3.items.boots
                || canFly()
                || (canLiftRocks() && (trackerData.zelda3.items.lantern || allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return canFly()
                || (canLiftRocks() && (trackerData.zelda3.items.lantern || allowOutOfLogicGlitches));
    }
}

function canEnterEastDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return trackerData.zelda3.items.boots
                || (canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches) && (trackerData.zelda3.items.hookshot || trackerData.zelda3.items.mirror));
    }
    else if (logic === 'owGlitches') {
        return trackerData.zelda3.items.boots
                || (canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches) && (trackerData.zelda3.items.hookshot || (trackerData.zelda3.items.mirror && trackerData.zelda3.items.hammer)));
    }
    else if (logic === 'glitchless') {
        return canEnterWestDeathMountain('glitchless', allowOutOfLogicGlitches) && (trackerData.zelda3.items.hookshot || (trackerData.zelda3.items.mirror && trackerData.zelda3.items.hammer));
    }
}

function canEnterEastDarkWorldDeathMountain(logic, allowOutOfLogicGlitches) {
    if (logic === 'majorGlitches') {
        return trackerData.zelda3.items.moonpearl
                || (trackerData.zelda3.items.bottle >= 1 && trackerData.zelda3.items.boots)
                || ((canLiftDarkRocks() || (trackerData.zelda3.items.hammer && trackerData.zelda3.items.boots)) && canEnterEastDeathMountain('majorGlitches', allowOutOfLogicGlitches))
                || (trackerData.zelda3.items.mirror && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches));
    }
    else if (logic === 'owGlitches') {
        return (trackerData.zelda3.items.moonpearl && trackerData.zelda3.items.boots)
                || ((canLiftDarkRocks() || (trackerData.zelda3.items.hammer && trackerData.zelda3.items.boots))
                        && canEnterEastDeathMountain('owGlitches', allowOutOfLogicGlitches));
    }
    else if (logic === 'glitchless') {
        return canLiftDarkRocks() && canEnterEastDeathMountain('glitchless', allowOutOfLogicGlitches);
    }
}
