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

// define dungeon chests
dungeons.zelda3 = [];

dungeons.zelda3[0] = {
    name: "Eastern Palace",
    label: "EP",
    x: "46.8%",
    y: "38.8%",
    isBeatable: function() {
        const availability = new Availability();
        if (trackerData.zelda3.items.bow) {
            if (trackerData.zelda3.items.lantern) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'glitchavailable';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.lantern) {
            if (trackerData.zelda3.items.bow) {
                availability.glitchless = 'available';
            }
            else if (trackerData.zelda3.dungeonchests[0] >= 2) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (trackerData.zelda3.dungeonchests[0] === 3) {
            availability.glitchless = 'available';
        }
        else {
            availability.glitchless = 'partial';
        }
        return availability;
    }
};

dungeons.zelda3[1] = {
    name: "Desert Palace",
    label: "DP",
    x: "3.8%",
    y: "78.4%",
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return trackerData.zelda3.items.book
                    || trackerData.zelda3.items.boots
                    || (trackerData.zelda3.items.mirror && canEnterMireArea('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'owGlitches') {
            return trackerData.zelda3.items.book
                    || trackerData.zelda3.items.boots
                    || (trackerData.zelda3.items.mirror && canEnterMireArea('owGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'glitchless') {
            return trackerData.zelda3.items.book
                    || (trackerData.zelda3.items.mirror && canLiftDarkRocks() && canFly());
        }
    },
    canHurtBoss: function() {
        return trackerData.zelda3.items.sword
                || trackerData.zelda3.items.hammer
                || trackerData.zelda3.items.bow
                || trackerData.zelda3.items.firerod
                || trackerData.zelda3.items.icerod
                || trackerData.zelda3.items.byrna
                || trackerData.zelda3.items.somaria
    },
    isBeatable: function () {
        const availability = new Availability();
        if (canLiftRocks() && canLightTorches()) {
            if (this.canEnter('glitchless', false, false)) {
                if (trackerData.zelda3.items.boots) {
                    if (this.canHurtBoss()) {
                        availability.glitchless = 'available';
                    }
                    else {
                        availability.glitchless = 'glitchavailable';
                    }
                }
                else if (this.canHurtBoss()) {
                    availability.glitchless = 'possible';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            if (this.canEnter('owGlitches', false, false)) {
                if (trackerData.zelda3.items.boots) {
                    if (this.canHurtBoss()) {
                        availability.owGlitches = 'available';
                    }
                    else {
                        availability.owGlitches = 'glitchavailable';
                    }
                }
                else if (this.canHurtBoss()) {
                    availability.owGlitches = 'possible';
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
            else if (this.canEnter('owGlitches', true, false)) {
                if (this.canHurtBoss()) {
                    availability.owGlitches = 'agahnim';
                }
                else {
                    availability.owGlitches = 'glitchagahnim';
                }
            }
            else if (this.canEnter('owGlitches', true, false)) {
                availability.owGlitches = 'glitchagahnim';
            }
            if (this.canEnter('majorGlitches', false, false)) {
                if (trackerData.zelda3.items.boots) {
                    if (this.canHurtBoss()) {
                        availability.majorGlitches = 'available';
                    }
                    else {
                        availability.majorGlitches = 'glitchavailable';
                    }
                }
                else if (this.canHurtBoss()) {
                    availability.majorGlitches = 'possible';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
            else if (this.canEnter('majorGlitches', true, false)) {
                if (this.canHurtBoss()) {
                    availability.majorGlitches = 'agahnim';
                }
                else {
                    availability.majorGlitches = 'glitchagahnim';
                }
            }
            else if (this.canEnter('majorGlitches', true, false)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (trackerData.zelda3.items.boots && (trackerData.zelda3.dungeonchests[1] === 2 || (this.canHurtBoss() && canLightTorches() && canLiftRocks()))) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (trackerData.zelda3.items.boots && (trackerData.zelda3.dungeonchests[1] === 2 || (this.canHurtBoss() && canLightTorches() && canLiftRocks()))) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', true, false)) {
            availability.owGlitches = 'agahnim';
        }
        else if (this.canEnter('owGlitches', true, true)) {
            availability.owGlitches = 'glitchedagahnim';
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if (trackerData.zelda3.items.boots && (trackerData.zelda3.dungeonchests[1] === 2 || (this.canHurtBoss() && canLightTorches() && canLiftRocks()))) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (this.canEnter('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchedagahnim';
        }
        return availability;
    }
};

dungeons.zelda3[2] = {
    name: "Tower of Hera",
    label: "ToH",
    x: "31.0%",
    y: "5.5%",
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return trackerData.zelda3.items.boots
                    || (canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches)
                            && (trackerData.zelda3.items.mirror || (trackerData.zelda3.items.hookshot && trackerData.zelda3.items.hammer)))
                    // Enter from Misery Mire.
                    || (dungeons.zelda3[8].canEnter('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'owGlitches') {
            return trackerData.zelda3.items.boots
                    || (canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches)
                            && (trackerData.zelda3.items.mirror || (trackerData.zelda3.items.hookshot && trackerData.zelda3.items.hammer)));
        }
        else if (logic === 'glitchless') {
            return canEnterWestDeathMountain('glitchless', allowOutOfLogicGlitches)
                    && (trackerData.zelda3.items.mirror || (trackerData.zelda3.items.hookshot && trackerData.zelda3.items.hammer));
        }
    },
    mayEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches' && dungeons.zelda3[8].mayEnter('majorGlitches', agahnimCheck, allowOutOfLogicGlitches)) {
            return true;
        }
        else if (logic === 'owGlitches' || logic === 'glitchless') {
            return this.canEnter(logic);
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer) {
            if (this.canEnter('glitchless', false, false)) {
                if (canLightTorches()) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (this.canEnter('glitchless', false, true)) {
                if (canLightTorches()) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            if (this.canEnter('owGlitches', false, false)) {
                if (canLightTorches()) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (this.canEnter('owGlitches', false, true)) {
                if (canLightTorches()) {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
            if (this.canEnter('majorGlitches', false, false)) {
                if (canLightTorches() || dungeons.zelda3[8].canEnter('majorGlitches', false, false)) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                if (canLightTorches() || dungeons.zelda3[8].canEnter('majorGlitches', false, true)) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
            else if (this.mayEnter('majorGlitches', false, false)) {
                availability.majorGlitches = 'possible';
            }
            else if (this.mayEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchpossible';
            }
            else if (this.mayEnter('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (this.mayEnter('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer)) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', false, true)) {
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer)) {
                availability.glitchless = 'glitchavailable';
            }
            else {
                availability.glitchless = 'glitchpartial';
            }
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer)) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer)) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if ((canLightTorches() || dungeons.zelda3[8].canEnter('majorGlitches', false, false))
                    && (trackerData.zelda3.dungeonchests[2] === 2 || trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer)) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if ((canLightTorches() || dungeons.zelda3[8].canEnter('majorGlitches', false, false))
                    && (trackerData.zelda3.dungeonchests[2] === 2 || trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.mayEnter('majorGlitches', false, false)) {
            availability.majorGlitches = 'partial';
        }
        else if (this.mayEnter('majorGlitches', false, true)) {
            availability.majorGlitches = 'glitchpartial';
        }
        else if (this.mayEnter('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (this.mayEnter('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }
        return availability;
    }
};

dungeons.zelda3[3] = {
    name: "Palace of Darkness " + mini("lantern"),
    label: "PoD",
    x: "97.0%",
    y: "40.0%",
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return (glitchedLinkInDarkWorld() && canEnterNorthEastDarkWorld('majorGlitches', agahnimCheck, allowOutOfLogicGlitches))
                    || (canEnterWestDeathMountain('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'glitchless' || logic === 'owGlitches') {
            return canEnterNorthEastDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) && trackerData.zelda3.items.moonpearl;
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.hammer && trackerData.zelda3.items.bow) {
            if (this.canEnter('glitchless', false, false) && trackerData.zelda3.items.lantern) {
                availability.glitchless = 'available';
            }
            else if (this.canEnter('glitchless', false, true)) {
                availability.glitchless = 'glitchavailable';
            }
            else if (this.canEnter('glitchless', true, false) && trackerData.zelda3.items.lantern) {
                availability.glitchless = 'agahnim';
            }
            else if (this.canEnter('glitchless', true, true)) {
                availability.glitchless = 'glitchedagahnim';
            }
            if (this.canEnter('owGlitches', false, false) && trackerData.zelda3.items.lantern) {
                availability.owGlitches = 'available';
            }
            else if (this.canEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchavailable';
            }
            else if (this.canEnter('owGlitches', true, false) && trackerData.zelda3.items.lantern) {
                availability.owGlitches = 'agahnim';
            }
            else if (this.canEnter('owGlitches', true, true)) {
                availability.owGlitches = 'glitchedagahnim';
            }
            if (this.canEnter('majorGlitches', false, false) && trackerData.zelda3.items.lantern) {
                availability.majorGlitches = 'available';
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if (this.canEnter('majorGlitches', true, false) && trackerData.zelda3.items.lantern) {
                availability.majorGlitches = 'agahnim';
            }
            else if (this.canEnter('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchedagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (trackerData.zelda3.items.bow && (trackerData.zelda3.dungeonchests[3] >= 2 || trackerData.zelda3.items.hammer)) {
                if (trackerData.zelda3.items.lantern) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'partial';
                }
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', true, false)) {
            availability.glitchless = 'agahnim';
        }
        else if (this.canEnter('glitchless', true, true)) {
            availability.glitchless = 'glitchagahnim';
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (trackerData.zelda3.items.bow && (trackerData.zelda3.dungeonchests[3] >= 2 || trackerData.zelda3.items.hammer)) {
                if (trackerData.zelda3.items.lantern) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'partial';
                }
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (trackerData.zelda3.items.bow && (trackerData.zelda3.dungeonchests[3] >= 2 || trackerData.zelda3.items.hammer)) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('owGlitches', true, false)) {
            availability.owGlitches = 'agahnim';
        }
        else if (this.canEnter('owGlitches', true, true)) {
            availability.owGlitches = 'glitchagahnim';
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if (trackerData.zelda3.items.bow && (trackerData.zelda3.dungeonchests[3] >= 2 || trackerData.zelda3.items.hammer)) {
                if (trackerData.zelda3.items.lantern) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'partial';
                }
            }
            else if (trackerData.zelda3.items.lantern) {
                availability.majorGlitches = 'partial';
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (trackerData.zelda3.items.bow && (trackerData.zelda3.dungeonchests[3] >= 2 || trackerData.zelda3.items.hammer)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (this.canEnter('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }

        return availability;
    }
};

dungeons.zelda3[4] = {
    name: "Swamp Palace " + mini("mirror"),
    label: "SP",
    x: "73.5%",
    y: "91.0%",
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return dungeons.zelda3[8].canEnter('majorGlitches', agahnimCheck, allowOutOfLogicGlitches)
                    || (trackerData.zelda3.items.moonpearl
                            && trackerData.zelda3.items.mirror
                            && trackerData.zelda3.items.flippers
                            && canEnterSouthDarkWorld('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'glitchless' || logic === 'owGlitches') {
            return (trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.mirror
                    && trackerData.zelda3.items.flippers
                    && canEnterSouthDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches));
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.hammer && trackerData.zelda3.items.hookshot) {
            if (this.canEnter('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (this.canEnter('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (this.canEnter('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
            if (this.canEnter('owGlitches', false, false)) {
                availability.owGlitches = 'available';
            }
            else if (this.canEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchavailable';
            }
            else if (this.canEnter('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (this.canEnter('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.hookshot
                && trackerData.zelda3.items.flippers
                && (trackerData.zelda3.items.sword >= 1
                        || trackerData.zelda3.items.hammer
                        || ((trackerData.zelda3.items.bow || canExtendMagic())
                                && (trackerData.zelda3.items.firerod || trackerData.zelda3.items.icerod)))) {
            if ((this.canEnter('majorGlitches', false, false))
                    && (trackerData.zelda3.items.hammer || dungeons.zelda3[8].canEnter('majorGlitches', false, false))) {
                availability.majorGlitches = 'available';
            }
            else if ((this.canEnter('majorGlitches', false, true))
                    && (trackerData.zelda3.items.hammer || dungeons.zelda3[8].canEnter('majorGlitches', false, true))) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if ((this.canEnter('majorGlitches', true, false))
                    && (trackerData.zelda3.items.hammer || dungeons.zelda3[8].canEnter('majorGlitches', true, false))) {
                availability.majorGlitches = 'agahnim';
            }
            else if ((this.canEnter('majorGlitches', true, true))
                    && (trackerData.zelda3.items.hammer || dungeons.zelda3[8].canEnter('majorGlitches', true, true))) {
                availability.majorGlitches = 'glitchedagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (trackerData.zelda3.items.hammer) {
                if (trackerData.zelda3.items.hookshot || trackerData.zelda3.dungeonchests[4] >= 5) {
                    availability.glitchless = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[4] >= 3) {
                    availability.glitchless = 'partial';
                }
            }
            else if (trackerData.zelda3.dungeonchests[4] === 6) {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', true, false)) {
            availability.glitchless = 'agahnim';
        }
        else if (this.canEnter('glitchless', true, true)) {
            availability.glitchless = 'glitchagahnim';
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (trackerData.zelda3.items.hammer) {
                if (trackerData.zelda3.items.hookshot || trackerData.zelda3.dungeonchests[4] >= 5) {
                    availability.owGlitches = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[4] >= 3) {
                    availability.owGlitches = 'partial';
                }
            }
            else if (trackerData.zelda3.dungeonchests[4] === 6) {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (trackerData.zelda3.items.hammer) {
                if (trackerData.zelda3.items.hookshot || trackerData.zelda3.dungeonchests[4] >= 5) {
                    availability.owGlitches = 'glitchavailable';
                }
                else if (trackerData.zelda3.dungeonchests[4] >= 3) {
                    availability.owGlitches = 'glitchpartial';
                }
            }
            else if (trackerData.zelda3.dungeonchests[4] === 6) {
                availability.owGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('owGlitches', true, false)) {
            availability.owGlitches = 'agahnim';
        }
        else if (this.canEnter('owGlitches', true, true)) {
            availability.owGlitches = 'glitchagahnim';
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if (trackerData.zelda3.items.flippers
                    && (trackerData.zelda3.items.hammer || dungeons.zelda3[8].canEnter('majorGlitches', false, false))) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.majorGlitches = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[4] >= 3) {
                    availability.majorGlitches = 'partial';
                }
            }
            else if (trackerData.zelda3.dungeonchests[4] >= 5) {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (trackerData.zelda3.items.flippers
                    && (trackerData.zelda3.items.hammer || dungeons.zelda3[8].canEnter('majorGlitches', false, false))) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else if (trackerData.zelda3.dungeonchests[4] >= 3) {
                    availability.majorGlitches = 'glitchpartial';
                }
            }
            else if (trackerData.zelda3.dungeonchests[4] >= 5) {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (this.canEnter('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }
        return availability;
    }
};

dungeons.zelda3[5] = {
    name: "Skull Woods",
    label: "SW",
    x: "53.3%",
    y: "5.4%",
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches' || logic === 'owGlitches') {
            return canEnterNorthWestDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return trackerData.zelda3.items.moonpearl
                    && canEnterNorthWestDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches)
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.moonpearl && trackerData.zelda3.items.firerod && trackerData.zelda3.items.sword >= 1) {
            if (this.canEnter('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (this.canEnter('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (this.canEnter('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
            if (this.canEnter('owGlitches', false, false)) {
                availability.owGlitches = 'available';
            }
            else if (this.canEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchavailable';
            }
            else if (this.canEnter('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (this.canEnter('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
            if (this.canEnter('majorGlitches', false, false)) {
                availability.majorGlitches = 'available';
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if (this.canEnter('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (this.canEnter('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.firerod
                    && (trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.dungeonchests[5] === 2)) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', true, false)) {
            availability.glitchless = 'agahnim';
        }
        else if (this.canEnter('glitchless', true, true)) {
            availability.glitchless = 'glitchagahnim';
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.firerod
                    && (trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.dungeonchests[5] === 2)) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.firerod
                    && (trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.dungeonchests[5] === 2)) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('owGlitches', true, false)) {
            availability.owGlitches = 'agahnim';
        }
        else if (this.canEnter('owGlitches', true, true)) {
            availability.owGlitches = 'glitchagahnim';
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if (trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.firerod
                    && (trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.dungeonchests[5] === 2)) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.firerod
                    && (trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.dungeonchests[5] === 2)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (this.canEnter('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }

        return availability;
    }
};

dungeons.zelda3[6] = {
    name: "Thieves' Town",
    label: "TT",
    x: "56.4%",
    y: "47.9%",
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return glitchedLinkInDarkWorld() && canEnterNorthWestDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches' || logic === 'glitchless') {
            return trackerData.zelda3.items.moonpearl && canEnterNorthWestDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches);
        }
    },
    canHurtBoss: function () {
        return trackerData.zelda3.items.sword >= 1
                || trackerData.zelda3.items.hammer
                || trackerData.zelda3.items.somaria
                || trackerData.zelda3.items.byrna;
    },
    isBeatable: function () {
        const availability = new Availability();
        if (this.canHurtBoss()) {
            if (this.canEnter('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (this.canEnter('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (this.canEnter('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
            if (this.canEnter('owGlitches', false, false)) {
                availability.owGlitches = 'available';
            }
            else if (this.canEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchavailable';
            }
            else if (this.canEnter('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (this.canEnter('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
            if (this.canEnter('majorGlitches', false, false)) {
                availability.majorGlitches = 'available';
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if (this.canEnter('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (this.canEnter('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (trackerData.zelda3.items.hammer
                    || trackerData.zelda3.dungeonchests[6] >= 3
                    || (this.canHurtBoss() && trackerData.zelda3.dungeonchests[6] >= 2)) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', true, false)) {
            availability.glitchless = 'agahnim';
        }
        else if (this.canEnter('glitchless', true, true)) {
            availability.glitchless = 'glitchagahnim';
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (trackerData.zelda3.items.hammer
                    || trackerData.zelda3.dungeonchests[6] >= 3
                    || (this.canHurtBoss() && trackerData.zelda3.dungeonchests[6] >= 2)) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (trackerData.zelda3.items.hammer
                    || trackerData.zelda3.dungeonchests[6] >= 3
                    || (this.canHurtBoss() && trackerData.zelda3.dungeonchests[6] >= 2)) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('owGlitches', true, false)) {
            availability.owGlitches = 'agahnim';
        }
        else if (this.canEnter('owGlitches', true, true)) {
            availability.owGlitches = 'glitchagahnim';
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if (trackerData.zelda3.items.hammer
                    || trackerData.zelda3.dungeonchests[6] >= 3
                    || (this.canHurtBoss() && trackerData.zelda3.dungeonchests[6] >= 2)) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (trackerData.zelda3.items.hammer
                    || trackerData.zelda3.dungeonchests[6] >= 3
                    || (this.canHurtBoss() && trackerData.zelda3.dungeonchests[6] >= 2)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (this.canEnter('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }
        return availability;
    }
};

dungeons.zelda3[7] = {
    name: "Ice Palace",
    label: "IP",
    x: "89.8%",
    y: "85.8%",
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return canLiftDarkRocks()
                    || (trackerData.zelda3.items.mirror && glitchedLinkInDarkWorld() && canEnterSouthDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'owGlitches') {
            return canLiftDarkRocks() && canMeltThings();
        }
        else if (logic === 'glitchless') {
            return canLiftDarkRocks()
                    && canMeltThings()
                    && (allowOutOfLogicGlitches || (trackerData.zelda3.items.moonpearl && trackerData.zelda3.items.flippers));
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (canMeltThings() && canLiftRocks()) {
            if (this.canEnter('glitchless', false, false) && trackerData.zelda3.items.hammer) {
                if (trackerData.zelda3.items.hookshot && trackerData.zelda3.items.somaria) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (this.canEnter('glitchless', false, true)) {
                availability.glitchless = 'glitchavailable';
            }
            if (this.canEnter('owGlitches', false, false) && trackerData.zelda3.items.hammer) {
                if (trackerData.zelda3.items.hookshot && trackerData.zelda3.items.somaria) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (this.canEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchavailable';
            }
            if (this.canEnter('majorGlitches', false, false) && trackerData.zelda3.items.hammer) {
                if (trackerData.zelda3.items.hookshot && trackerData.zelda3.items.somaria) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if (this.canEnter('majorGlitches', true, false) && trackerData.zelda3.items.hammer) {
                availability.majorGlitches = 'agahnim';
            }
            else if (this.canEnter('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }


        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (trackerData.zelda3.items.hammer && canLiftRocks()) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.glitchless = 'available';
                }
                else if (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape) {
                    if (trackerData.zelda3.dungeonchests[7] >= 2) {
                        availability.glitchless = 'available';
                    }
                    else {
                        availability.glitchless = 'partial';
                    }
                }
                else {
                    availability.glitchless = 'partial';
                }
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', false, true)) {
            if (trackerData.zelda3.items.hammer && canLiftRocks()) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    if (trackerData.zelda3.dungeonchests[7] >= 2) {
                        availability.glitchless = 'glitchavailable';
                    }
                    else {
                        availability.glitchless = 'glitchpartial';
                    }
                }
            }
            else {
                availability.glitchless = 'glitchpartial';
            }
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (trackerData.zelda3.items.hammer && canLiftRocks()) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.owGlitches = 'available';
                }
                else if (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape) {
                    if (trackerData.zelda3.dungeonchests[7] >= 2) {
                        availability.owGlitches = 'available';
                    }
                    else {
                        availability.owGlitches = 'partial';
                    }
                }
                else {
                    availability.owGlitches = 'partial';
                }
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (trackerData.zelda3.items.hammer && canLiftRocks()) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    if (trackerData.zelda3.dungeonchests[7] >= 2) {
                        availability.owGlitches = 'glitchavailable';
                    }
                    else {
                        availability.owGlitches = 'glitchpartial';
                    }
                }
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if (trackerData.zelda3.items.hammer && canLiftRocks()) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.majorGlitches = 'available';
                }
                else if (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape) {
                    if (trackerData.zelda3.dungeonchests[7] >= 2) {
                        availability.majorGlitches = 'available';
                    }
                    else {
                        availability.majorGlitches = 'partial';
                    }
                }
                else {
                    availability.majorGlitches = 'partial';
                }
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (trackerData.zelda3.items.hammer && canLiftRocks()) {
                if (trackerData.zelda3.items.hookshot) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    if (trackerData.zelda3.dungeonchests[7] >= 2) {
                        availability.majorGlitches = 'glitchavailable';
                    }
                    else {
                        availability.majorGlitches = 'glitchpartial';
                    }
                }
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        return availability;
    }
};

dungeons.zelda3[8] = {
    name: "Misery Mire " + mini("medallion0") + mini("lantern"),
    label: "MM",
    x: "55.8%",
    y: "82.9%",
    hasMedallion: function () {
        return (trackerData.zelda3.medallions[8] === 1 && trackerData.zelda3.items.bombos)
                || (trackerData.zelda3.medallions[8] === 2 && trackerData.zelda3.items.ether)
                || (trackerData.zelda3.medallions[8] === 3 && trackerData.zelda3.items.quake)
                || (trackerData.zelda3.items.bombos && trackerData.zelda3.items.ether && trackerData.zelda3.items.quake);
    },
    mayHaveMedallion: function () {
        return !((trackerData.zelda3.medallions[8] === 1 && !trackerData.zelda3.items.bombos)
                || (trackerData.zelda3.medallions[8] === 2 && !trackerData.zelda3.items.ether)
                || (trackerData.zelda3.medallions[8] === 3 && !trackerData.zelda3.items.quake)
                || (!trackerData.zelda3.items.bombos && !trackerData.zelda3.items.ether && !trackerData.zelda3.items.quake));
    },
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'glitchless') {
            return this.hasMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.hookshot)
                    && canEnterMireArea('glitchless', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.hasMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.hookshot)
                    && canEnterMireArea('owGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'majorGlitches') {
            return this.hasMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && (trackerData.zelda3.items.moonpearl || (trackerData.zelda3.items.bottle >= 1 && trackerData.zelda3.items.boots))
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.hookshot)
                    && canEnterMireArea('majorGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
    },
    mayEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'glitchless') {
            return this.mayHaveMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.hookshot)
                    && canEnterMireArea('glitchless', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.mayHaveMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.hookshot)
                    && canEnterMireArea('owGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'majorGlitches') {
            return this.mayHaveMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && (trackerData.zelda3.items.moonpearl || (trackerData.zelda3.items.bottle >= 1 && trackerData.zelda3.items.boots))
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.hookshot)
                    && canEnterMireArea('majorGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
    },
    canHurtBoss: function () {
        return trackerData.zelda3.items.sword >= 1 || trackerData.zelda3.items.hammer || trackerData.zelda3.items.bow;
    },
    isBeatable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.somaria && this.canHurtBoss()) {
            if (this.canEnter('glitchless', false, false) && trackerData.zelda3.items.lantern) {
                if (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (this.mayEnter('glitchless', false, false) && trackerData.zelda3.items.lantern) {
                availability.glitchless = 'possible';
            }
            else if (this.canEnter('glitchless', false, true)) {
                if (canLightTorches() && (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape)) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            else if (this.mayEnter('glitchless', false, true)) {
                availability.glitchless = 'glitchpossible';
            }
            if (this.canEnter('owGlitches', false, false) && trackerData.zelda3.items.lantern) {
                if (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (this.mayEnter('owGlitches', false, false) && trackerData.zelda3.items.lantern) {
                availability.owGlitches = 'possible';
            }
            else if (this.canEnter('owGlitches', false, true)) {
                if (canLightTorches() && (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape)) {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
            else if (this.mayEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchpossible';
            }
            else if (this.mayEnter('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (this.mayEnter('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
            if (this.canEnter('majorGlitches', false, false) && trackerData.zelda3.items.lantern) {
                if (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.mayEnter('majorGlitches', false, false) && trackerData.zelda3.items.lantern) {
                availability.majorGlitches = 'possible';
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                if (canLightTorches() && (trackerData.zelda3.items.byrna || trackerData.zelda3.items.cape)) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
            else if (this.mayEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchpossible';
            }
            else if (this.mayEnter('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (this.mayEnter('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (canLightTorches()) {
                if (trackerData.zelda3.dungeonchests[8] === 2
                        && (trackerData.zelda3.items.cape
                                || trackerData.zelda3.items.byrna
                                || (trackerData.zelda3.items.somaria && this.canHurtBoss()))) {
                    availability.glitchless = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)
                        && trackerData.zelda3.items.somaria
                        && this.canHurtBoss()) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'partial';
                }
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (this.mayEnter('glitchless', false, false)) {
            availability.glitchless = 'possible';
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (canLightTorches()) {
                if (trackerData.zelda3.dungeonchests[8] === 2
                        && (trackerData.zelda3.items.cape
                                || trackerData.zelda3.items.byrna
                                || (trackerData.zelda3.items.somaria && this.canHurtBoss() && trackerData.zelda3.items.lantern))) {
                    availability.owGlitches = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)
                        && trackerData.zelda3.items.somaria
                        && this.canHurtBoss()
                        && trackerData.zelda3.items.lantern) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'partial';
                }
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.mayEnter('owGlitches', false, false)) {
            availability.owGlitches = 'possible';
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (canLightTorches()) {
                if (trackerData.zelda3.dungeonchests[8] === 2
                        && (trackerData.zelda3.items.cape
                                || trackerData.zelda3.items.byrna
                                || (trackerData.zelda3.items.somaria && this.canHurtBoss() && trackerData.zelda3.items.lantern))) {
                    availability.owGlitches = 'glitchavailable';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)
                        && trackerData.zelda3.items.somaria
                        && this.canHurtBoss()
                        && trackerData.zelda3.items.lantern) {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    availability.owGlitches = 'glitchpartial';
                }
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        else if (this.mayEnter('owGlitches', false, true)) {
            availability.owGlitches = 'glitchpossible';
        }
        else if (this.mayEnter('owGlitches', true, false)) {
            availability.owGlitches = 'agahnim';
        }
        else if (this.mayEnter('owGlitches', true, true)) {
            availability.owGlitches = 'glitchagahnim';
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if (canLightTorches()) {
                if (trackerData.zelda3.dungeonchests[8] === 2
                        && (trackerData.zelda3.items.cape
                                || trackerData.zelda3.items.byrna
                                || (trackerData.zelda3.items.somaria && this.canHurtBoss() && trackerData.zelda3.items.lantern))) {
                    availability.majorGlitches = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)
                        && trackerData.zelda3.items.somaria
                        && this.canHurtBoss()
                        && trackerData.zelda3.items.lantern) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'partial';
                }
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.mayEnter('majorGlitches', false, false)) {
            availability.majorGlitches = 'possible';
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (canLightTorches()) {
                if (trackerData.zelda3.dungeonchests[8] === 2
                        && (trackerData.zelda3.items.cape
                                || trackerData.zelda3.items.byrna
                                || (trackerData.zelda3.items.somaria && this.canHurtBoss() && trackerData.zelda3.items.lantern))) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)
                        && trackerData.zelda3.items.somaria
                        && this.canHurtBoss()
                        && trackerData.zelda3.items.lantern) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpartial';
                }
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.mayEnter('majorGlitches', false, true)) {
            availability.majorGlitches = 'glitchpossible';
        }
        else if (this.mayEnter('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (this.mayEnter('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }
        return availability;
    }
};

dungeons.zelda3[9] = {
    name: "Turtle Rock " + mini("medallion0") + mini("lantern"),
    label: "TR",
    x: "96.9%",
    y: "7.0%",
    hasMedallion: function () {
        return (trackerData.zelda3.medallions[9] === 1 && trackerData.zelda3.items.bombos)
                || (trackerData.zelda3.medallions[9] === 2 && trackerData.zelda3.items.ether)
                || (trackerData.zelda3.medallions[9] === 3 && trackerData.zelda3.items.quake)
                || (trackerData.zelda3.items.bombos && trackerData.zelda3.items.ether && trackerData.zelda3.items.quake);
    },
    mayHaveMedallion: function () {
        return !((trackerData.zelda3.medallions[9] === 1 && !trackerData.zelda3.items.bombos)
                || (trackerData.zelda3.medallions[9] === 2 && !trackerData.zelda3.items.ether)
                || (trackerData.zelda3.medallions[9] === 3 && !trackerData.zelda3.items.quake)
                || (!trackerData.zelda3.items.bombos && !trackerData.zelda3.items.ether && !trackerData.zelda3.items.quake));
    },
    lower: function (logic, allowOutOfLogicGlitches) {
        return logic === 'majorGlitches'
                && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches)
                && (trackerData.zelda3.items.moonpearl || (trackerData.zelda3.items.bottle >= 1 && trackerData.zelda3.items.boots))
                && trackerData.zelda3.items.mirror;
    },
    middle: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return (trackerData.zelda3.items.mirror || (glitchedLinkInDarkWorld() && canSpinSpeed()))
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.somaria || trackerData.zelda3.items.hookshot)
                    && canEnterEastDarkWorldDeathMountain('majorGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return (trackerData.zelda3.items.mirror || (trackerData.zelda3.items.moonpearl && canSpinSpeed()))
                    && (trackerData.zelda3.items.boots || trackerData.zelda3.items.somaria || trackerData.zelda3.items.hookshot)
                    && canEnterEastDarkWorldDeathMountain('owGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return false;
        }
    },
    upperCan: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return this.hasMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && (trackerData.zelda3.items.moonpearl || (trackerData.zelda3.items.bottle >= 1 && trackerData.zelda3.items.boots))
                    && trackerData.zelda3.items.somaria
                    && trackerData.zelda3.items.hammer
                    && (canLiftDarkRocks() || trackerData.zelda3.items.boots)
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.hasMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.somaria
                    && trackerData.zelda3.items.hammer
                    && (canLiftDarkRocks() || trackerData.zelda3.items.boots)
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return this.hasMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.somaria
                    && trackerData.zelda3.items.hammer
                    && canLiftDarkRocks()
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
    },
    upperMay: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return this.mayHaveMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && (trackerData.zelda3.items.moonpearl || (trackerData.zelda3.items.bottle >= 1 && trackerData.zelda3.items.boots))
                    && trackerData.zelda3.items.somaria
                    && trackerData.zelda3.items.hammer
                    && (canLiftDarkRocks() || trackerData.zelda3.items.boots)
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.mayHaveMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.somaria
                    && trackerData.zelda3.items.hammer
                    && (canLiftDarkRocks() || trackerData.zelda3.items.boots)
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return this.mayHaveMedallion()
                    && trackerData.zelda3.items.sword >= 1
                    && trackerData.zelda3.items.moonpearl
                    && trackerData.zelda3.items.somaria
                    && trackerData.zelda3.items.hammer
                    && canLiftDarkRocks()
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
    },
    canEnter: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return this.lower('majorGlitches', allowOutOfLogicGlitches) || this.middle('majorGlitches', allowOutOfLogicGlitches) || this.upperCan('majorGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.middle('owGlitches', allowOutOfLogicGlitches) || this.upperCan('owGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return this.upperCan('glitchless', allowOutOfLogicGlitches);
        }
    },
    mayEnter: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return this.lower('majorGlitches', allowOutOfLogicGlitches) || this.middle('majorGlitches', allowOutOfLogicGlitches) || this.upperMay('majorGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.middle('owGlitches', allowOutOfLogicGlitches) || this.upperMay('owGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return this.upperMay('glitchless', allowOutOfLogicGlitches);
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.firerod && trackerData.zelda3.items.icerod && trackerData.zelda3.items.somaria) {
            if (this.canEnter('glitchless', false)
                    && trackerData.zelda3.items.lantern
                    && (trackerData.zelda3.items.hammer || trackerData.zelda3.items.sword >= 2)) {
                if (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers()) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (this.mayEnter('glitchless', false)) {
                availability.glitchless = 'possible';
            }
            else if (this.canEnter('glitchless', true)) {
                if (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers()) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            else if (this.mayEnter('glitchless', true)) {
                availability.glitchless = 'glitchpossible';
            }
            if (this.canEnter('owGlitches', false)
                    && trackerData.zelda3.items.lantern
                    && (trackerData.zelda3.items.hammer || trackerData.zelda3.items.sword >= 2)) {
                if (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers()) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (this.mayEnter('owGlitches', false)) {
                availability.owGlitches = 'possible';
            }
            else if (this.canEnter('owGlitches', true)) {
                if (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers()) {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
            else if (this.mayEnter('owGlitches', true)) {
                availability.owGlitches = 'glitchpossible';
            }
            if (this.canEnter('majorGlitches', false)
                    && trackerData.zelda3.items.lantern
                    && (trackerData.zelda3.items.hammer || trackerData.zelda3.items.sword >= 2)) {
                if (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers()) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.mayEnter('majorGlitches', false)) {
                availability.majorGlitches = 'possible';
            }
            else if (this.canEnter('majorGlitches', true)) {
                if (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers()) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
            else if (this.mayEnter('majorGlitches', true)) {
                availability.majorGlitches = 'glitchpossible';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    if (trackerData.zelda3.dungeonchests[9] >= 2 || this.isBeatable().glitchless === 'available') {
                        availability.glitchless = 'available';
                    }
                    else {
                        availability.glitchless = 'partial';
                    }
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 2) {
                    availability.glitchless = 'partial';
                }
                else {
                    availability.glitchless = 'glitchpartial'
                }
            }
            else {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.glitchless = 'partial';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 4) {
                    availability.glitchless = 'partial';
                }
                else {
                    availability.glitchless = 'glitchpartial';
                }
            }
        }
        else if (this.mayEnter('glitchless', false)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.glitchless = 'possible';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 2) {
                    availability.glitchless = 'possible';
                }
                else {
                    availability.glitchless = 'glitchpossible'
                }
            }
            else {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.glitchless = 'possible';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 4) {
                    availability.glitchless = 'possible';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
        }
        else if (this.canEnter('glitchless', true)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.dungeonchests[9] >= 2
                        || this.isBeatable().glitchless === 'available'
                        || this.isBeatable().glitchless === 'glitchavailable') {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpartial';
                }
            }
            else {
                availability.glitchless = 'glitchpartial';
            }
        }
        else if (this.mayEnter('glitchless', true)) {
            availability.glitchless = 'glitchpartial';
        }
        // TODO: Account for lower/middle entrances for owGlitches and majorGlitches chest counts.
        if (this.canEnter('owGlitches', false)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    if (trackerData.zelda3.dungeonchests[9] >= 2 || this.isBeatable().glitchless === 'available') {
                        availability.owGlitches = 'available';
                    }
                    else {
                        availability.owGlitches = 'partial';
                    }
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 2) {
                    availability.owGlitches = 'partial';
                }
                else {
                    availability.owGlitches = 'glitchpartial'
                }
            }
            else {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.owGlitches = 'partial';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 4) {
                    availability.owGlitches = 'partial';
                }
                else {
                    availability.owGlitches = 'glitchpartial';
                }
            }
        }
        else if (this.mayEnter('owGlitches', false)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.owGlitches = 'possible';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 2) {
                    availability.owGlitches = 'possible';
                }
                else {
                    availability.owGlitches = 'glitchpossible'
                }
            }
            else {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.owGlitches = 'possible';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 4) {
                    availability.owGlitches = 'possible';
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
        }
        else if (this.canEnter('owGlitches', true)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.dungeonchests[9] >= 2
                        || this.isBeatable().glitchless === 'available'
                        || this.isBeatable().glitchless === 'glitchavailable') {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    availability.owGlitches = 'glitchpartial';
                }
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        else if (this.mayEnter('owGlitches', true)) {
            availability.owGlitches = 'glitchpossible';
        }
        if (this.canEnter('majorGlitches', false)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    if (trackerData.zelda3.dungeonchests[9] >= 2 || this.isBeatable().glitchless === 'available') {
                        availability.majorGlitches = 'available';
                    }
                    else {
                        availability.majorGlitches = 'partial';
                    }
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 2) {
                    availability.majorGlitches = 'partial';
                }
                else {
                    availability.majorGlitches = 'glitchpartial'
                }
            }
            else {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.majorGlitches = 'partial';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 4) {
                    availability.majorGlitches = 'partial';
                }
                else {
                    availability.majorGlitches = 'glitchpartial';
                }
            }
        }
        else if (this.mayEnter('majorGlitches', false)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.majorGlitches = 'possible';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 2) {
                    availability.majorGlitches = 'possible';
                }
                else {
                    availability.majorGlitches = 'glitchpossible'
                }
            }
            else {
                if (trackerData.zelda3.items.lantern && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna || canBlockLasers())) {
                    availability.majorGlitches = 'possible';
                }
                else if (trackerData.zelda3.dungeonchests[9] >= 4) {
                    availability.majorGlitches = 'possible';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
        }
        else if (this.canEnter('majorGlitches', true)) {
            if (trackerData.zelda3.items.firerod) {
                if (trackerData.zelda3.dungeonchests[9] >= 2
                        || this.isBeatable().glitchless === 'available'
                        || this.isBeatable().glitchless === 'glitchavailable') {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpartial';
                }
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.mayEnter('majorGlitches', true)) {
            availability.majorGlitches = 'glitchpossible';
        }
        return availability;
    }
};

dungeons.zelda3[10] = {
    name: "Ganon's Tower",
    label: "GT",
    x: "77.0%",
    y: "5.5%",
    canEnter: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return canEnterWestDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return trackerData.zelda3.items.boots && trackerData.zelda3.items.moonpearl;
        }
        else if (logic === 'glitchless') {
            let crystalCount = 0;
            for (let k = 0; k < 10; k++) {
                if ((trackerData.zelda3.prizes[k] === redCrystal || trackerData.zelda3.prizes[k] === blueCrystal) && trackerData.zelda3.items["boss" + k] === 2) {
                    crystalCount++;
                    if (crystalCount === 7) {
                        break;
                    }
                }
            }
            return crystalCount === 7 && trackerData.zelda3.items.moonpearl && canEnterEastDarkWorldDeathMountain(logic, allowOutOfLogicGlitches);
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.hookshot
                && trackerData.zelda3.items.bow
                && canLightTorches()
                && (trackerData.zelda3.items.hammer || trackerData.zelda3.items.sword >= 1)) {
            if (this.canEnter('glitchless', false)) {
                if (trackerData.zelda3.items.boots && trackerData.zelda3.items.hammer && trackerData.zelda3.items.firerod && trackerData.zelda3.items.somaria) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (this.canEnter('glitchless', true)) {
                if (trackerData.zelda3.items.boots && trackerData.zelda3.items.hammer && trackerData.zelda3.items.firerod && trackerData.zelda3.items.somaria) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            if (this.canEnter('owGlitches', false)) {
                if (trackerData.zelda3.items.boots && trackerData.zelda3.items.hammer && trackerData.zelda3.items.firerod && trackerData.zelda3.items.somaria) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            if (this.canEnter('majorGlitches', false)) {
                if (trackerData.zelda3.items.boots && trackerData.zelda3.items.hammer && trackerData.zelda3.items.firerod && trackerData.zelda3.items.somaria) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.canEnter('majorGlitches', true)) {
                if (trackerData.zelda3.items.boots && trackerData.zelda3.items.hammer && trackerData.zelda3.items.firerod && trackerData.zelda3.items.somaria) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        let smallKeysNeeded = 0;
        let bigKeyNeeded = 0;
        let bigKeyGuaranteed = false;
        // Hope Room x2
        let minAvailableChests = 2;
        let maxAvailableChests = 2;
        // Bob's Torch
        if (trackerData.zelda3.items.boots) {
            minAvailableChests++;
            maxAvailableChests++;
        }
        // DMs Room x4 + Randomizer Room x4 + Firesnake Room
        if (trackerData.zelda3.items.hammer && trackerData.zelda3.items.hookshot) {
            minAvailableChests += 9;
            maxAvailableChests += 9;
            smallKeysNeeded = 4;
        }
        // Map Chest
        if (trackerData.zelda3.items.hammer
                && (trackerData.zelda3.items.boots || trackerData.zelda3.items.hookshot)) {
            minAvailableChests++;
            maxAvailableChests++;
        }
        // Bob's Chest + Big Key Room x3
        if ((trackerData.zelda3.items.hammer && trackerData.zelda3.items.hookshot)
                || (trackerData.zelda3.items.firerod && trackerData.zelda3.items.somaria)) {
            minAvailableChests += 4;
            maxAvailableChests += 4;
            smallKeysNeeded = Math.max(3, smallKeysNeeded);
        }
        // Tile Room
        if (trackerData.zelda3.items.somaria) {
            minAvailableChests++;
            maxAvailableChests++;
        }
        // Compass Room x4
        if (trackerData.zelda3.items.firerod && trackerData.zelda3.items.somaria) {
            minAvailableChests += 4;
            maxAvailableChests += 4;
            smallKeysNeeded = Math.max(4, smallKeysNeeded);
        }
        // Big Chest
        if (trackerData.zelda3.items.hammer
                && trackerData.zelda3.items.boots
                && trackerData.zelda3.items.hookshot
                && trackerData.zelda3.items.somaria
                && trackerData.zelda3.items.firerod) {
            minAvailableChests++;
            maxAvailableChests++;
            bigKeyNeeded = 1;
            bigKeyGuaranteed = true;
        }
        // Mini Helmasaur Room x2 + Pre-Moldorm Chest
        if (trackerData.zelda3.items.bow && canLightTorches()) {
            if (bigKeyGuaranteed) {
                minAvailableChests += 3;
            }
            maxAvailableChests += 3;
            smallKeysNeeded = Math.max(3, smallKeysNeeded);
            bigKeyNeeded = 1;
        }
        // Moldorm Chest
        if (trackerData.zelda3.items.hookshot
                && trackerData.zelda3.items.bow
                && canLightTorches()
                && (trackerData.zelda3.items.hammer || trackerData.zelda3.items.sword >= 1)) {
            if (bigKeyGuaranteed) {
                minAvailableChests++;
            }
            maxAvailableChests++;
            smallKeysNeeded = Math.max(4, smallKeysNeeded);
            bigKeyNeeded = 1;
        }
        let maxItemsAvailable = Math.min(20, maxAvailableChests - smallKeysNeeded - bigKeyNeeded);
        // 4 keys + big key + map + compass
        let minItemsAvailable = Math.max(0, minAvailableChests - 7);
        if (this.canEnter('glitchless', false)) {
            if (trackerData.zelda3.dungeonchests[10] > (20 - minItemsAvailable)) {
                availability.glitchless = 'available';
            }
            else if (trackerData.zelda3.dungeonchests[10] > (20 - maxItemsAvailable)) {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', true)) {
            if (trackerData.zelda3.dungeonchests[10] > (20 - minItemsAvailable)) {
                availability.glitchless = 'glitchavailable';
            }
            else if (trackerData.zelda3.dungeonchests[10] > (20 - maxItemsAvailable)) {
                availability.glitchless = 'glitchpartial';
            }
        }
        if (this.canEnter('owGlitches', false)) {
            if (trackerData.zelda3.dungeonchests[10] > (20 - minItemsAvailable)) {
                availability.owGlitches = 'available';
            }
            else if (trackerData.zelda3.dungeonchests[10] > (20 - maxItemsAvailable)) {
                availability.owGlitches = 'partial';
            }
        }
        if (this.canEnter('majorGlitches', false)) {
            if (trackerData.zelda3.dungeonchests[10] > (20 - minItemsAvailable)) {
                availability.majorGlitches = 'available';
            }
            else if (trackerData.zelda3.dungeonchests[10] > (20 - maxItemsAvailable)) {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', true)) {
            if (trackerData.zelda3.dungeonchests[10] > (20 - minItemsAvailable)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if (trackerData.zelda3.dungeonchests[10] > (20 - maxItemsAvailable)) {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        return availability;
    }
};

//define overworld chests
chests.zelda3 = [];

chests.zelda3[0] = {
    name: "King's Tomb " + mini("boots") + ' + ' + mini("glove2") + '/' + mini("mirror"),
    x: "30.8%",
    y: "29.6%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.boots && canLiftDarkRocks()) {
            availability.glitchless = "available";
        }
        else if (trackerData.zelda3.items.boots && trackerData.zelda3.items.mirror) {
            if (trackerData.zelda3.items.moonpearl) {
                if (canEnterNorthWestDarkWorld('glitchless', false, false)) {
                    availability.glitchless = "available";
                }
                else if (canEnterNorthWestDarkWorld('glitchless', true, false)) {
                    availability.glitchless = "agahnim";
                }
                else if (canEnterNorthWestDarkWorld('glitchless', true, true)) {
                    availability.glitchless = "glitchagahnim";
                }
                else {
                    availability.owGlitches = "available";
                }
            }
            else if (glitchedLinkInDarkWorld()) {
                availability.majorGlitches = "available";
            }
        }
        return availability;
    }
};

chests.zelda3[1] = {
    name: "Light World Swamp (2)",
    x: "23.4%",
    y: "93.4%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[2] = {
    name: "Link's House",
    x: "27.4%",
    y: "67.9%",
    isOpened: true,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[3] = {
    name: "Spiral Cave",
    x: "39.9%",
    y: "9.3%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterEastDeathMountain("glitchless", false)) {
            availability.glitchless = "available";
        }
        else if (canEnterEastDeathMountain("glitchless", true)) {
            availability.glitchless = "glitchavailable";
        }
        if (canEnterEastDeathMountain("owGlitches", false)) {
            availability.owGlitches = "available";
        }
        else if (canEnterEastDeathMountain("owGlitches", true)) {
            availability.owGlitches = "glitchavailable";
        }
        if (canEnterEastDeathMountain("majorGlitches", false)) {
            availability.majorGlitches = "available";
        }
        else if (canEnterEastDeathMountain("majorGlitches", true)) {
            availability.majorGlitches = "glitchavailable";
        }
        return availability;
    }
};

chests.zelda3[4] = {
    name: "Mimic Cave (" + mini("mirror") + " outside of Turtle Rock)(Yellow = " + mini("medallion0") + " unknown OR possible w/out " + mini("firerod") + ")",
    x: "42.6%",
    y: "9.3%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterEastDeathMountain("glitchless", false) && trackerData.zelda3.items.mirror && dungeons.zelda3[9].mayEnter("glitchless", false)) {
            if (trackerData.zelda3.items.firerod && dungeons.zelda3[9].canEnter("glitchless", false)) {
                availability.glitchless = "available";
            }
            else {
                availability.glitchless = "possible";
            }
        }
        else if (canEnterEastDeathMountain("glitchless", true) && trackerData.zelda3.items.mirror && dungeons.zelda3[9].mayEnter("glitchless", true)) {
            if (trackerData.zelda3.items.firerod && dungeons.zelda3[9].canEnter("glitchless", true)) {
                availability.glitchless = "glitchavailable";
            }
            else {
                availability.glitchless = "glitchpossible";
            }
        }
        if (trackerData.zelda3.items.hammer && trackerData.zelda3.items.mirror) {
            if (canEnterEastDeathMountain("owGlitches", false) && canEnterEastDarkWorldDeathMountain("owGlitches", false)) {
                availability.owGlitches = "available";
            }
            else if (canEnterEastDeathMountain("owGlitches", true) && canEnterEastDarkWorldDeathMountain("owGlitches", true)) {
                availability.owGlitches = "glitchavailable";
            }
            if (canEnterEastDeathMountain("majorGlitches", false) && canEnterEastDarkWorldDeathMountain("majorGlitches", false)) {
                availability.majorGlitches = "available";
            }
            else if (canEnterEastDeathMountain("majorGlitches", true) && canEnterEastDarkWorldDeathMountain("majorGlitches", true)) {
                availability.majorGlitches = "glitchavailable";
            }
        }
        return availability;
    }
};

chests.zelda3[5] = {
    name: "Tavern",
    x: "8.1%",
    y: "57.8%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[6] = {
    name: "Chicken House " + mini("bomb"),
    x: "4.4%",
    y: "54.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[7] = {
    name: "Bombable Hut " + mini("bomb"),
    x: "55.4%",
    y: "57.8%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterNorthWestDarkWorld("glitchless", false, false)) {
            availability.glitchless = "available";
        }
        else if (canEnterNorthWestDarkWorld("glitchless", true, false)) {
            availability.glitchless = "agahnim";
        }
        else if (canEnterNorthWestDarkWorld("glitchless", true, true)) {
            availability.glitchless = "glitchagahnim";
        }
        if (trackerData.zelda3.items.moonpearl) {
            if (canEnterNorthWestDarkWorld("owGlitches", false, false)) {
                availability.owGlitches = "available";
            }
            else if (canEnterNorthWestDarkWorld("owGlitches", true, false)) {
                availability.owGlitches = "agahnim";
            }
            else if (canEnterNorthWestDarkWorld("owGlitches", true, true)) {
                availability.owGlitches = "glitchagahnim";
            }
        }
        if (glitchedLinkInDarkWorld()) {
            if (canEnterNorthWestDarkWorld("majorGlitches", false, false)) {
                availability.majorGlitches = "available";
            }
            else if (canEnterNorthWestDarkWorld("majorGlitches", true, false)) {
                availability.majorGlitches = "agahnim";
            }
            else if (canEnterNorthWestDarkWorld("majorGlitches", true, true)) {
                availability.majorGlitches = "glitchagahnim";
            }
        }
        return availability;
    }
};

chests.zelda3[8] = {
    name: "C House",
    x: "60.8%",
    y: "47.9%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterNorthWestDarkWorld("glitchless", false, false)) {
            availability.glitchless = "available";
        }
        else if (canEnterNorthWestDarkWorld("glitchless", true, false)) {
            availability.glitchless = "agahnim";
        }
        else if (canEnterNorthWestDarkWorld("glitchless", true, true)) {
            availability.glitchless = "glitchagahnim";
        }
        if (canEnterNorthWestDarkWorld("owGlitches", false, false)) {
            availability.owGlitches = "available";
        }
        else if (canEnterNorthWestDarkWorld("owGlitches", true, false)) {
            availability.owGlitches = "agahnim";
        }
        else if (canEnterNorthWestDarkWorld("owGlitches", true, true)) {
            availability.owGlitches = "glitchagahnim";
        }
        if (canEnterNorthWestDarkWorld("majorGlitches", false, false)) {
            availability.majorGlitches = "available";
        }
        else if (canEnterNorthWestDarkWorld("majorGlitches", true, false)) {
            availability.majorGlitches = "agahnim";
        }
        else if (canEnterNorthWestDarkWorld("majorGlitches", true, true)) {
            availability.majorGlitches = "glitchagahnim";
        }
        return availability;
    }
};

chests.zelda3[9] = {
    name: "Aginah's Cave " + mini("bomb"),
    x: "10.0%",
    y: "82.6%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[10] = {
    name: "West of Mire (2)",
    x: "51.7%",
    y: "79.5%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterMireArea('glitchless', false, false)) {
            if (trackerData.zelda3.items.moonpearl) {
                availability.glitchless = 'available';
            }
            else if (trackerData.zelda3.items.mirror) {
                availability.glitchless = 'glitchavailable';
            }
        }
        if (trackerData.zelda3.items.moonpearl || trackerData.zelda3.items.mirror) {
            if (canEnterMireArea('owGlitches', false, false)) {
                availability.owGlitches = 'available';
            }
            else if (canEnterMireArea('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterMireArea('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (canEnterMireArea('majorGlitches', false, false)) {
            availability.majorGlitches = 'available';
        }
        else if (canEnterMireArea('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (canEnterMireArea('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }
        return availability;
    }
};

chests.zelda3[11] = {
    name: "DW Death Mountain (2) : Don't need " + mini("moonpearl"),
    x: "92.8%",
    y: "14.7%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterEastDarkWorldDeathMountain('glitchless', true)) {
            if (canEnterEastDarkWorldDeathMountain('glitchless', false) && trackerData.zelda3.items.moonpearl) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'glitchavailable'
            }
        }
        if (canEnterEastDarkWorldDeathMountain('owGlitches', false)) {
            availability.owGlitches = 'available';
        }
        else if (canEnterEastDarkWorldDeathMountain('owGlitches', true)) {
            availability.owGlitches = 'glitchavailable';
        }
        if (canEnterEastDarkWorldDeathMountain('majorGlitches', false)) {
            availability.majorGlitches = 'available';
        }
        else if (canEnterEastDarkWorldDeathMountain('majorGlitches', true)) {
            availability.majorGlitches = 'glitchavailable';
        }
        return availability;
    }
};

chests.zelda3[12] = {
    name: "Sahasrahla's Hut (3) " + mini("bomb") + '/' + mini("boots"),
    x: "40.7%",
    y: "41.4%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[13] = {
    name: "Byrna Spike Cave",
    x: "78.6%",
    y: "14.9%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canLiftRocks() && trackerData.zelda3.items.hammer) {
            if (canEnterWestDeathMountain('glitchless', true) && trackerData.zelda3.items.moonpearl) {
                if (canExtendMagic() && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)) {
                    if (canEnterWestDeathMountain('glitchless', false)) {
                        availability.glitchless = 'available';
                    }
                    else {
                        availability.glitchless = 'glitchavailable';
                    }
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            if (canEnterWestDeathMountain('owGlitches', true) && trackerData.zelda3.items.moonpearl) {
                if (canExtendMagic() && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)) {
                    if (canEnterWestDeathMountain('owGlitches', false)) {
                        availability.owGlitches = 'available';
                    }
                    else {
                        availability.owGlitches = 'glitchavailable';
                    }
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
            else if (canEnterWestDeathMountain('majorGlitches', true) && (trackerData.zelda3.items.moonpearl || (trackerData.zelda3.items.bottle >= 1 && trackerData.zelda3.items.boots))) {
                if (canExtendMagic() && (trackerData.zelda3.items.cape || trackerData.zelda3.items.byrna)) {
                    if (canEnterWestDeathMountain('majorGlitches', false)) {
                        availability.majorGlitches = 'available';
                    }
                    else {
                        availability.majorGlitches = 'glitchavailable';
                    }
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
        }
        return availability;
    }
};

chests.zelda3[14] = {
    name: "Kakariko Well (4 + " + mini("bomb") + ")",
    x: "1.7%",
    y: "41.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[15] = {
    name: "Thieves' Hut (4 + " + mini("bomb") + ")",
    x: "6.4%",
    y: "41.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[16] = {
    name: "Hype Cave! " + mini("bomb") + " (NPC + 4 " + mini("bomb") + ")",
    x: "80.0%",
    y: "77.1%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterSouthDarkWorld("glitchless", false, false)) {
            availability.glitchless = "available";
        }
        else if (canEnterSouthDarkWorld("glitchless", true, false)) {
            availability.glitchless = "agahnim";
        }
        else if (canEnterSouthDarkWorld("glitchless", true, true)) {
            availability.glitchless = "glitchagahnim";
        }
        if (trackerData.zelda3.items.moonpearl) {
            if (canEnterSouthDarkWorld("owGlitches", false, false)) {
                availability.owGlitches = "available";
            }
            else if (canEnterSouthDarkWorld("owGlitches", true, false)) {
                availability.owGlitches = "agahnim";
            }
            else if (canEnterSouthDarkWorld("owGlitches", true, true)) {
                availability.owGlitches = "glitchagahnim";
            }
        }
        if (glitchedLinkInDarkWorld()) {
            if (canEnterSouthDarkWorld("majorGlitches", false, false)) {
                availability.majorGlitches = "available";
            }
            else if (canEnterSouthDarkWorld("majorGlitches", true, false)) {
                availability.majorGlitches = "agahnim";
            }
            else if (canEnterSouthDarkWorld("majorGlitches", true, true)) {
                availability.majorGlitches = "glitchagahnim";
            }
        }
        return availability;
    }
};

chests.zelda3[17] = {
    name: "Death Mountain East (5 + 2 " + mini("bomb") + ")",
    x: "41.4%",
    y: "17.1%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterEastDeathMountain("glitchless", false)) {
            availability.glitchless = "available";
        }
        else if (canEnterEastDeathMountain("glitchless", true)) {
            availability.glitchless = "glitchavailable";
        }
        if (canEnterEastDeathMountain("owGlitches", false)) {
            availability.owGlitches = "available";
        }
        else if (canEnterEastDeathMountain("owGlitches", true)) {
            availability.owGlitches = "glitchavailable";
        }
        if (canEnterEastDeathMountain("majorGlitches", false)) {
            availability.majorGlitches = "available";
        }
        else if (canEnterEastDeathMountain("majorGlitches", true)) {
            availability.majorGlitches = "glitchavailable";
        }
        return availability;
    }
};

chests.zelda3[18] = {
    name: "West of Sanctuary " + mini("boots"),
    x: "19.5%",
    y: "29.3%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.boots) {
            availability.glitchless = 'available';
        }
        return availability;
    }
};

chests.zelda3[19] = {
    name: "Minimoldorm Cave (NPC + 4) " + mini("bomb"),
    x: "32.6%",
    y: "93.4%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[20] = {
    name: "Ice Rod Cave " + mini("bomb"),
    x: "44.7%",
    y: "76.9%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[21] = {
    name: "Cave Under Rock (bottom chest) " + mini("hookshot") + "/" + mini("boots"),
    x: "91.6%",
    y: "8.6%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.moonpearl
                && (trackerData.zelda3.items.hookshot || trackerData.zelda3.items.boots)) {
            if (canEnterEastDarkWorldDeathMountain('glitchless', false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterEastDarkWorldDeathMountain('glitchless', true)) {
                availability.glitchless = 'glitchavailable';
            }
            if (canLiftRocks()) {
                if (canEnterEastDarkWorldDeathMountain('owGlitches', false)) {
                    availability.owGlitches = 'available';
                }
                else if (canEnterEastDarkWorldDeathMountain('owGlitches', true)) {
                    availability.owGlitches = 'glitchavailable';
                }
                if (canEnterEastDarkWorldDeathMountain('majorGlitches', false)) {
                    availability.majorGlitches = 'available';
                }
                else if (canEnterEastDarkWorldDeathMountain('majorGlitches', true)) {
                    availability.majorGlitches = 'glitchavailable';
                }
            }
        }
        return availability;
    }
};

chests.zelda3[22] = {
    name: "Cave Under Rock (3 top chests) " + mini("hookshot"),
    x: "91.6%",
    y: "3.4%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.moonpearl && trackerData.zelda3.items.hookshot) {
            if (canEnterEastDarkWorldDeathMountain('glitchless', false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterEastDarkWorldDeathMountain('glitchless', true)) {
                availability.glitchless = 'glitchavailable';
            }
            if (canLiftRocks()) {
                if (canEnterEastDarkWorldDeathMountain('owGlitches', false)) {
                    availability.owGlitches = 'available';
                }
                else if (canEnterEastDarkWorldDeathMountain('owGlitches', true)) {
                    availability.owGlitches = 'glitchavailable';
                }
                if (canEnterEastDarkWorldDeathMountain('majorGlitches', false)) {
                    availability.majorGlitches = 'available';
                }
                else if (canEnterEastDarkWorldDeathMountain('majorGlitches', true)) {
                    availability.majorGlitches = 'glitchavailable';
                }
            }
        }
        return availability;
    }
};

chests.zelda3[23] = {
    name: "Treasure Chest Minigame: Pay 30 rupees",
    x: "52.1%",
    y: "46.4%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterNorthWestDarkWorld("glitchless", false, false)) {
            availability.glitchless = "available";
        }
        else if (canEnterNorthWestDarkWorld("glitchless", true, false)) {
            availability.glitchless = "agahnim";
        }
        else if (canEnterNorthWestDarkWorld("glitchless", true, true)) {
            availability.glitchless = "glitchagahnim";
        }
        if (canEnterNorthWestDarkWorld("owGlitches", false, false)) {
            availability.owGlitches = "available";
        }
        else if (canEnterNorthWestDarkWorld("owGlitches", true, false)) {
            availability.owGlitches = "agahnim";
        }
        else if (canEnterNorthWestDarkWorld("owGlitches", true, true)) {
            availability.owGlitches = "glitchagahnim";
        }
        if (canEnterNorthWestDarkWorld("majorGlitches", false, false)) {
            availability.majorGlitches = "available";
        }
        else if (canEnterNorthWestDarkWorld("majorGlitches", true, false)) {
            availability.majorGlitches = "agahnim";
        }
        else if (canEnterNorthWestDarkWorld("majorGlitches", true, true)) {
            availability.majorGlitches = "glitchagahnim";
        }
        return availability;
    }
};

chests.zelda3[24] = {
    name: "Bottle Vendor: Pay 100 rupees",
    x: "4.5%",
    y: "46.8%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = "available";
        return availability;
    }
};

chests.zelda3[25] = {
    name: "Sahasrahla " + mini("pendant0"),
    x: "40.7%",
    y: "46.7%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        for (let k = 0; k < 10; k++) {
            if (trackerData.zelda3.prizes[k] === greenPendant && trackerData.zelda3.items["boss" + k] === 2) {
                availability.glitchless = "available";
                break;
            }
        }
        return availability;
    }
};

chests.zelda3[26] = {
    name: "Stump Kid",
    x: "65.5%",
    y: "68.6%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterSouthDarkWorld("glitchless", false, false)) {
            availability.glitchless = "available";
        }
        else if (canEnterSouthDarkWorld("glitchless", true, false)) {
            availability.glitchless = "agahnim";
        }
        else if (canEnterSouthDarkWorld("glitchless", true, true)) {
            availability.glitchless = "glitchagahnim";
        }
        if (trackerData.zelda3.items.moonpearl) {
            if (canEnterSouthDarkWorld("owGlitches", false, false)) {
                availability.owGlitches = "available";
            }
            else if (canEnterSouthDarkWorld("owGlitches", true, false)) {
                availability.owGlitches = "agahnim";
            }
            else if (canEnterSouthDarkWorld("owGlitches", true, true)) {
                availability.owGlitches = "glitchagahnim";
            }
        }
        if (glitchedLinkInDarkWorld()) {
            if (canEnterSouthDarkWorld("majorGlitches", false, false)) {
                availability.majorGlitches = "available";
            }
            else if (canEnterSouthDarkWorld("majorGlitches", true, false)) {
                availability.majorGlitches = "agahnim";
            }
            else if (canEnterSouthDarkWorld("majorGlitches", true, true)) {
                availability.majorGlitches = "glitchagahnim";
            }
        }
        return availability;
    }
};

chests.zelda3[27] = {
    name: "Bug Kid " + mini("bottle0"),
    x: "7.8%",
    y: "52.1%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.bottle >= 1) {
            availability.glitchless = "available";
        }
        return availability;
    }
};

chests.zelda3[28] = {
    name: "Show the Purple Chest to Gary",
    x: "65.2%",
    y: "52.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canLiftDarkRocks()) {
            if (canEnterNorthWestDarkWorld('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.moonpearl) {
            if (canEnterNorthWestDarkWorld('owGlitches', false, false)
                    && chests.zelda3[60].isAvailable().owGlitches === 'available'
                    && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && canEnterNorthEastDarkWorld('owGlitches', false, false)))) {
                availability.owGlitches = 'available';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, false)
                    && (chests.zelda3[60].isAvailable().owGlitches === 'available' || chests.zelda3[60].isAvailable().owGlitches === 'agahnim')
                    && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && canEnterNorthEastDarkWorld('owGlitches', true, false)))) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, true)
                    && (chests.zelda3[60].isAvailable().owGlitches === 'available' || chests.zelda3[60].isAvailable().owGlitches === 'agahnim' || chests.zelda3[60].isAvailable().owGlitches === 'glitchagahnim')
                    && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && canEnterNorthEastDarkWorld('owGlitches', true, true)))) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (canEnterNorthWestDarkWorld('majorGlitches', false, false)
                && chests.zelda3[60].isAvailable().majorGlitches === 'available'
                && (trackerData.zelda3.items.mirror
                        || (glitchedLinkInDarkWorld() && canLiftDarkRocks())
                        || (trackerData.zelda3.items.boots && glitchedLinkInDarkWorld() && canEnterNorthEastDarkWorld('majorGlitches', false, false)))) {
            availability.majorGlitches = 'available';
        }
        else if (canEnterNorthWestDarkWorld('majorGlitches', true, false)
                && (chests.zelda3[60].isAvailable().majorGlitches === 'available' || chests.zelda3[60].isAvailable().majorGlitches === 'agahnim')
                && (trackerData.zelda3.items.mirror
                        || (glitchedLinkInDarkWorld() && canLiftDarkRocks())
                        || (trackerData.zelda3.items.boots && glitchedLinkInDarkWorld() && canEnterNorthEastDarkWorld('majorGlitches', true, false)))) {
            availability.majorGlitches = 'agahnim';
        }
        else if (canEnterNorthWestDarkWorld('majorGlitches', true, true)
                && (chests.zelda3[60].isAvailable().majorGlitches === 'available' || chests.zelda3[60].isAvailable().majorGlitches === 'agahnim' || chests.zelda3[60].isAvailable().majorGlitches === 'glitchagahnim')
                && (trackerData.zelda3.items.mirror
                        || (glitchedLinkInDarkWorld() && canLiftDarkRocks())
                        || (trackerData.zelda3.items.boots && glitchedLinkInDarkWorld() && canEnterNorthEastDarkWorld('majorGlitches', true, true)))) {
            availability.majorGlitches = 'glitchagahnim';
        }
        return availability;
    }
};

chests.zelda3[29] = {
    name: "Fugitive under the bridge " + mini("flippers"),
    x: "35.4%",
    y: "69.7%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.flippers) {
            availability.glitchless = 'available';
        }
        else {
            availability.glitchless = 'glitchavailable';
            availability.owGlitches = 'available';
        }
        return availability;
    }
};

chests.zelda3[30] = {
    name: "Ether Tablet " + mini("sword2") + mini("book"),
    x: "21.0%",
    y: "3.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.book && (trackerData.zelda3.items.mirror || (trackerData.zelda3.items.hammer && trackerData.zelda3.items.hookshot))) {
            if (canEnterWestDeathMountain('glitchless', false)) {
                if (trackerData.zelda3.items.sword >= 2) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (canEnterWestDeathMountain('glitchless', true)) {
                if (trackerData.zelda3.items.sword >= 2) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
        }
        if (trackerData.zelda3.items.book) {
            if (canEnterWestDeathMountain('owGlitches', false) && dungeons.zelda3[2].canEnter('owGlitches', false, false)) {
                if (trackerData.zelda3.items.sword >= 2) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (canEnterWestDeathMountain('owGlitches', true) && dungeons.zelda3[2].canEnter('owGlitches', false, true)) {
                if (trackerData.zelda3.items.sword >= 2) {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
        }
        if (trackerData.zelda3.items.book) {
            if (canEnterWestDeathMountain('majorGlitches', false) && dungeons.zelda3[2].canEnter('majorGlitches', false, false)) {
                if (trackerData.zelda3.items.sword >= 2) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (canEnterWestDeathMountain('majorGlitches', false) && dungeons.zelda3[2].mayEnter('majorGlitches', false, false)) {
                availability.majorGlitches = 'possible';
            }
            else if (canEnterWestDeathMountain('majorGlitches', true) && dungeons.zelda3[2].canEnter('majorGlitches', false, true)) {
                if (trackerData.zelda3.items.sword >= 2) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
            else if (canEnterWestDeathMountain('majorGlitches', true) && dungeons.zelda3[2].mayEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchpossible';
            }
            else if (canEnterWestDeathMountain('majorGlitches', false) && dungeons.zelda3[2].mayEnter('majorGlitches', true, false) && trackerData.zelda3.items.sword >= 2) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterWestDeathMountain('majorGlitches', true) && dungeons.zelda3[2].mayEnter('majorGlitches', true, true) && trackerData.zelda3.items.sword >= 2) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[31] = {
    name: "Bombos Tablet " + mini("mirror") + mini("sword2") + mini("book"),
    x: "11.0%",
    y: "92.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.book && trackerData.zelda3.items.mirror && canEnterSouthDarkWorld('glitchless', false, false)) {
            if (trackerData.zelda3.items.sword >= 2) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (trackerData.zelda3.items.book && trackerData.zelda3.items.mirror && trackerData.zelda3.items.sword >= 2) {
            if (canEnterSouthDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.book && (trackerData.zelda3.items.boots || (trackerData.zelda3.items.mirror && canEnterSouthDarkWorld('owGlitches', false, false)))) {
            if (trackerData.zelda3.items.sword >= 2) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (trackerData.zelda3.items.book && trackerData.zelda3.items.mirror && trackerData.zelda3.items.sword >= 2) {
            if (canEnterSouthDarkWorld('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.book
                && (trackerData.zelda3.items.boots || (trackerData.zelda3.items.mirror && canEnterSouthDarkWorld('majorGlitches', false, false)))) {
            if (trackerData.zelda3.items.sword >= 2) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'possible';
            }
        }
        else if (trackerData.zelda3.items.book && trackerData.zelda3.items.mirror && trackerData.zelda3.items.sword >= 2) {
            if (canEnterSouthDarkWorld('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[32] = {
    name: "Catfish",
    x: "96.0%",
    y: "17.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.moonpearl && canLiftRocks()) {
            if (canEnterNorthEastDarkWorld('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterNorthEastDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterNorthEastDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.moonpearl
                && (canLiftRocks() || trackerData.zelda3.items.boots)) {
            if (canEnterNorthEastDarkWorld('owGlitches', false, false)) {
                availability.owGlitches = 'available';
            }
            else if (canEnterNorthEastDarkWorld('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthEastDarkWorld('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (glitchedLinkInDarkWorld()
                && (canLiftRocks() || trackerData.zelda3.items.boots)) {
            if (canEnterNorthEastDarkWorld('majorGlitches', false, false)) {
                availability.majorGlitches = 'available';
            }
            else if (canEnterNorthEastDarkWorld('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterNorthEastDarkWorld('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[33] = {
    name: "King Zora: Pay 500 rupees",
    x: "47.5%",
    y: "12.1%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.flippers || canLiftRocks()) {
            availability.glitchless = 'available';
        }
        else {
            availability.glitchless = 'glitchavailable';
            availability.owGlitches = 'available';
        }
        return availability;
    }
};

chests.zelda3[34] = {
    name: "Lost Old Man",
    x: "20.8%",
    y: "20.4%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterWestDeathMountain('glitchless', true)) {
            if (trackerData.zelda3.items.lantern) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'glitchavailable';
            }
        }
        else if (canEnterWestDeathMountain('owGlitches', true)) {
            if (trackerData.zelda3.items.lantern) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'glitchavailable';
            }
        }
        else if (canEnterWestDeathMountain('majorGlitches', true)) {
            if (trackerData.zelda3.items.lantern) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'glitchavailable';
            }
        }
        return availability;
    }
};

chests.zelda3[35] = {
    name: "Witch: Give her " + mini("mushroom"),
    x: "40.8%",
    y: "32.5%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.mushroom) {
            availability.glitchless = 'available';
        }
        return availability;
    }
};

chests.zelda3[36] = {
    name: "Forest Hideout",
    x: "9.4%",
    y: "13.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'available';
        return availability;
    }
};

chests.zelda3[37] = {
    name: "Lumberjack Tree " + mini("agahnim1") + mini("boots"),
    x: "15.1%",
    y: "7.6%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'possible';
        if (trackerData.zelda3.items.boots) {
            if (trackerData.zelda3.items.agahnim) {
                availability.glitchless = 'available';
            }
            else if (canGoBeatAgahnim1(false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canGoBeatAgahnim1(true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[38] = {
    name: "Spectacle Rock Cave",
    x: "24.3%",
    y: "14.8%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterWestDeathMountain("glitchless", false)) {
            availability.glitchless = "available";
        }
        else if (canEnterWestDeathMountain("glitchless", true)) {
            availability.glitchless = "glitchavailable";
        }
        if (canEnterWestDeathMountain("owGlitches", false)) {
            availability.owGlitches = "available";
        }
        else if (canEnterWestDeathMountain("owGlitches", true)) {
            availability.owGlitches = "glitchavailable";
        }
        if (canEnterWestDeathMountain("majorGlitches", false)) {
            availability.majorGlitches = "available";
        }
        else if (canEnterWestDeathMountain("majorGlitches", true)) {
            availability.majorGlitches = "glitchavailable";
        }
        return availability;
    }
};

chests.zelda3[39] = {
    name: "South of Grove " + mini("mirror"),
    x: "14.1%",
    y: "84.1%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.mirror) {
            if (canEnterSouthDarkWorld('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.boots) {
            availability.owGlitches = 'available';
        }
        else {
            if (trackerData.zelda3.items.mirror) {
                if (canEnterSouthDarkWorld('owGlitches', false, false)) {
                    availability.owGlitches = 'available';
                }
                else if (canEnterSouthDarkWorld('owGlitches', true, false)) {
                    availability.owGlitches = 'agahnim';
                }
                else if (canEnterSouthDarkWorld('owGlitches', true, true)) {
                    availability.owGlitches = 'glitchagahnim';
                }
                if (canEnterSouthDarkWorld('majorGlitches', false, false)) {
                    availability.majorGlitches = 'available';
                }
                else if (canEnterSouthDarkWorld('majorGlitches', true, false)) {
                    availability.majorGlitches = 'agahnim';
                }
                else if (canEnterSouthDarkWorld('majorGlitches', true, true)) {
                    availability.majorGlitches = 'glitchagahnim';
                }
            }
        }
        return availability;
    }
};

chests.zelda3[40] = {
    name: "Graveyard Cliff Cave " + mini("mirror"),
    x: "28.1%",
    y: "27.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.mirror && trackerData.zelda3.items.moonpearl) {
            if (canEnterNorthWestDarkWorld('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.boots) {
            availability.owGlitches = 'available';
        }
        else {
            if (trackerData.zelda3.items.mirror && trackerData.zelda3.items.moonpearl) {
                if (canEnterNorthWestDarkWorld('owGlitches', false, false)) {
                    availability.owGlitches = 'available';
                }
                else if (canEnterNorthWestDarkWorld('owGlitches', true, false)) {
                    availability.owGlitches = 'agahnim';
                }
                else if (canEnterNorthWestDarkWorld('owGlitches', true, true)) {
                    availability.owGlitches = 'glitchagahnim';
                }
            }
            if (trackerData.zelda3.items.mirror && glitchedLinkInDarkWorld()) {
                availability.majorGlitches = 'available';
            }
        }
        return availability;
    }
};

chests.zelda3[41] = {
    name: "Checkerboard Cave " + mini("mirror"),
    x: "8.8%",
    y: "77.3%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canFly() && canLiftDarkRocks() && trackerData.zelda3.items.mirror) {
            availability.glitchless = 'available';
        }
        if (canLiftRocks()) {
            if (trackerData.zelda3.items.boots) {
                availability.owGlitches = 'available';
            }
            else if (trackerData.zelda3.items.mirror) {
                if (canEnterMireArea('owGlitches', false, false)) {
                    availability.owGlitches = 'available';
                }
                else if (canEnterMireArea('owGlitches', true, false)) {
                    availability.owGlitches = 'agahnim';
                }
                else if (canEnterMireArea('owGlitches', true, true)) {
                    availability.owGlitches = 'glitchagahnim';
                }
                if (canEnterMireArea('majorGlitches', false, false)) {
                    availability.majorGlitches = 'available';
                }
                else if (canEnterMireArea('majorGlitches', true, false)) {
                    availability.majorGlitches = 'agahnim';
                }
                else if (canEnterMireArea('majorGlitches', true, true)) {
                    availability.majorGlitches = 'glitchagahnim';
                }
            }
        }
        return availability;
    }
};

chests.zelda3[42] = {
    name: mini("hammer").repeat(8) + "!".repeat(8),
    x: "65.8%",
    y: "60.1%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canLiftDarkRocks() && trackerData.zelda3.items.hammer) {
            if (canEnterNorthWestDarkWorld('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.hammer && trackerData.zelda3.items.moonpearl) {
            if (canEnterNorthWestDarkWorld('owGlitches', false, false)
                    && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && canEnterNorthEastDarkWorld('owGlitches', false, false)))) {
                availability.owGlitches = 'available';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, false)
                    && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && canEnterNorthEastDarkWorld('owGlitches', true, false)))) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, true)
                    && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && canEnterNorthEastDarkWorld('owGlitches', true, true)))) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.hammer && glitchedLinkInDarkWorld()) {
            if (canEnterNorthWestDarkWorld('majorGlitches', false, false)) {
                availability.majorGlitches = 'available';
            }
            else if (canEnterNorthWestDarkWorld('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[43] = {
    name: "Library " + mini("boots"),
    x: "7.7%",
    y: "65.9%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.boots) {
            availability.glitchless = 'available';
        }
        else {
            availability.glitchless = 'possible';
        }
        return availability;
    }
};

chests.zelda3[44] = {
    name: "Mushroom",
    x: "6.2%",
    y: "8.6%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'available';
        return availability;
    }
};

chests.zelda3[45] = {
    name: "Spectacle Rock " + mini("mirror"),
    x: "25.4%",
    y: "8.5%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterWestDeathMountain('glitchless', false)) {
            if (trackerData.zelda3.items.mirror) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (canEnterWestDeathMountain('glitchless', true)) {
            if (trackerData.zelda3.items.mirror) {
                availability.glitchless = 'glitchavailable';
            }
            else {
                availability.glitchless = 'glitchpossible';
            }
        }
        if (canEnterWestDeathMountain('owGlitches', false)) {
            if (trackerData.zelda3.items.boots || trackerData.zelda3.items.mirror) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (canEnterWestDeathMountain('owGlitches', true)) {
            if (trackerData.zelda3.items.boots || trackerData.zelda3.items.mirror) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpossible';
            }
        }
        if (canEnterWestDeathMountain('majorGlitches', false)) {
            if (trackerData.zelda3.items.boots || trackerData.zelda3.items.mirror) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'possible';
            }
        }
        else if (canEnterWestDeathMountain('majorGlitches', true)) {
            if (trackerData.zelda3.items.boots || trackerData.zelda3.items.mirror) {
                availability.majorGlitches = 'glitchavailable';
            }
            else {
                availability.majorGlitches = 'glitchpossible';
            }
        }
        return availability;
    }
};

chests.zelda3[46] = {
    name: "Floating Island " + mini("mirror"),
    x: "40.2%",
    y: "3.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterEastDeathMountain('glitchless', false)) {
            if (trackerData.zelda3.items.mirror
                    && trackerData.zelda3.items.moonpearl
                    && canLiftDarkRocks()) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (canEnterEastDeathMountain('glitchless', true)) {
            if (trackerData.zelda3.items.mirror
                    && trackerData.zelda3.items.moonpearl
                    && canLiftDarkRocks()) {
                availability.glitchless = 'glitchavailable';
            }
            else {
                availability.glitchless = 'glitchpossible';
            }
        }
        if (canEnterEastDeathMountain('owGlitches', false)) {
            if ((trackerData.zelda3.items.boots
                            || (trackerData.zelda3.items.mirror
                                    && trackerData.zelda3.items.moonpearl
                                    && canLiftRocks()
                                    && canEnterEastDarkWorldDeathMountain('owGlitches', false)))) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (canEnterEastDeathMountain('owGlitches', true)) {
            if ((trackerData.zelda3.items.boots
                            || (trackerData.zelda3.items.mirror
                                    && trackerData.zelda3.items.moonpearl
                                    && canLiftRocks()
                                    && canEnterEastDarkWorldDeathMountain('owGlitches', true)))) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpossible';
            }
        }
        if (canEnterEastDeathMountain('majorGlitches', false)) {
            if ((trackerData.zelda3.items.boots
                            || (trackerData.zelda3.items.mirror
                                    && glitchedLinkInDarkWorld()
                                    && canLiftRocks()
                                    && canEnterEastDarkWorldDeathMountain('majorGlitches', false)))) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'possible';
            }
        }
        else if (canEnterEastDeathMountain('majorGlitches', true)) {
            if ((trackerData.zelda3.items.boots
                            || (trackerData.zelda3.items.mirror
                                    && glitchedLinkInDarkWorld()
                                    && canLiftRocks()
                                    && canEnterEastDarkWorldDeathMountain('majorGlitches', true)))) {
                availability.majorGlitches = 'glitchavailable';
            }
            else {
                availability.majorGlitches = 'glitchpossible';
            }
        }
        return availability;
    }
};

chests.zelda3[47] = {
    name: "Race Minigame " + mini("bomb") + "/" + mini("boots"),
    x: "1.8%",
    y: "69.8%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'available';
        return availability;
    }
};

chests.zelda3[48] = {
    name: "Desert West Ledge " + mini("book") + "/" + mini("mirror"),
    x: "1.5%",
    y: "91.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'possible';
        if (dungeons.zelda3[1].canEnter('glitchless', false, false)) {
            availability.glitchless = 'available';
        }
        else {
            if (dungeons.zelda3[1].canEnter('owGlitches', false, false)) {
                availability.owGlitches = 'available';
            }
            else if (dungeons.zelda3[1].canEnter('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (dungeons.zelda3[1].canEnter('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
            if (dungeons.zelda3[1].canEnter('majorGlitches', false, false)) {
                availability.majorGlitches = 'available';
            }
            else if (dungeons.zelda3[1].canEnter('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (dungeons.zelda3[1].canEnter('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[49] = {
    name: "Lake Hylia Island " + mini("mirror"),
    x: "36.1%",
    y: "82.9%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'possible';
        if (trackerData.zelda3.items.flippers && trackerData.zelda3.items.moonpearl && trackerData.zelda3.items.mirror) {
            if (canEnterSouthDarkWorld('glitchless', false, false) || canEnterNorthEastDarkWorld('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, false) || canEnterNorthEastDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, true) || canEnterNorthEastDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.boots) {
            availability.owGlitches = 'available';
        }
        else {
            if (trackerData.zelda3.items.flippers && trackerData.zelda3.items.mirror) {
                if ((trackerData.zelda3.items.moonpearl && canEnterSouthDarkWorld('owGlitches', false, false))
                        || canEnterNorthEastDarkWorld('owGlitches', false, false)) {
                    availability.owGlitches = 'available';
                }
                else if ((trackerData.zelda3.items.moonpearl && canEnterSouthDarkWorld('owGlitches', true, false))
                        || canEnterNorthEastDarkWorld('owGlitches', true, false)) {
                    availability.owGlitches = 'agahnim';
                }
                else if ((trackerData.zelda3.items.moonpearl && canEnterSouthDarkWorld('owGlitches', true, true))
                        || canEnterNorthEastDarkWorld('owGlitches', true, true)) {
                    availability.owGlitches = 'glitchagahnim';
                }
                if (glitchedLinkInDarkWorld() || canEnterNorthEastDarkWorld('majorGlitches', false, false)) {
                    availability.majorGlitches = 'available';
                }
                else if (glitchedLinkInDarkWorld() || canEnterNorthEastDarkWorld('majorGlitches', true, false)) {
                    availability.majorGlitches = 'agahnim';
                }
                else if (glitchedLinkInDarkWorld() || canEnterNorthEastDarkWorld('majorGlitches', true, true)) {
                    availability.majorGlitches = 'glitchagahnim';
                }
            }
        }
        return availability;
    }
};

chests.zelda3[50] = {
    name: "Bumper Cave " + mini("cape"),
    x: "67.1%",
    y: "15.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterNorthWestDarkWorld('glitchless', false, false)) {
            if (canLiftRocks() && trackerData.zelda3.items.cape) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (canEnterNorthWestDarkWorld('glitchless', true, false) && canLiftRocks() && trackerData.zelda3.items.cape) {
            availability.glitchless = 'agahnim';
        }
        else if (canEnterNorthWestDarkWorld('glitchless', true, true) && canLiftRocks() && trackerData.zelda3.items.cape) {
            availability.glitchless = 'glitchagahnim';
        }
        if (canEnterNorthWestDarkWorld('owGlitches', false, false)) {
            if (trackerData.zelda3.items.moonpearl && (trackerData.zelda3.items.boots || (canLiftRocks() && trackerData.zelda3.items.cape))) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (trackerData.zelda3.items.moonpearl && (trackerData.zelda3.items.boots || (canLiftRocks() && trackerData.zelda3.items.cape))) {
            if (canEnterNorthWestDarkWorld('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (canEnterNorthWestDarkWorld('majorGlitches', false, false)) {
            if (glitchedLinkInDarkWorld() && (trackerData.zelda3.items.boots || (canLiftRocks() && trackerData.zelda3.items.cape))) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'possible';
            }
        }
        else if (glitchedLinkInDarkWorld() && (trackerData.zelda3.items.boots || (canLiftRocks() && trackerData.zelda3.items.cape))) {
            if (canEnterNorthWestDarkWorld('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[51] = {
    name: "Pyramid",
    x: "79.0%",
    y: "43.5%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterNorthEastDarkWorld('glitchless', false, false)) {
            availability.glitchless = 'available';
        }
        else if (canEnterNorthEastDarkWorld('glitchless', true, false)) {
            availability.glitchless = 'agahnim';
        }
        else if (canEnterNorthEastDarkWorld('glitchless', true, true)) {
            availability.glitchless = 'glitchagahnim';
        }
        if (canEnterNorthEastDarkWorld('owGlitches', false, false)) {
            availability.owGlitches = 'available';
        }
        else if (canEnterNorthEastDarkWorld('owGlitches', true, false)) {
            availability.owGlitches = 'agahnim';
        }
        else if (canEnterNorthEastDarkWorld('owGlitches', true, true)) {
            availability.owGlitches = 'glitchagahnim';
        }
        if (canEnterNorthEastDarkWorld('majorGlitches', false, false)) {
            availability.majorGlitches = 'available';
        }
        else if (canEnterNorthEastDarkWorld('majorGlitches', true, false)) {
            availability.majorGlitches = 'agahnim';
        }
        else if (canEnterNorthEastDarkWorld('majorGlitches', true, true)) {
            availability.majorGlitches = 'glitchagahnim';
        }
        return availability;
    }
};

chests.zelda3[52] = {
    name: "Dig Game: Pay 80 rupees",
    x: "52.9%",
    y: "69.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canEnterSouthDarkWorld("glitchless", false, false)) {
            availability.glitchless = "available";
        }
        else if (canEnterSouthDarkWorld("glitchless", true, false)) {
            availability.glitchless = "agahnim";
        }
        else if (canEnterSouthDarkWorld("glitchless", true, true)) {
            availability.glitchless = "glitchagahnim";
        }
        if (trackerData.zelda3.items.moonpearl) {
            if (canEnterSouthDarkWorld("owGlitches", false, false)) {
                availability.owGlitches = "available";
            }
            else if (canEnterSouthDarkWorld("owGlitches", true, false)) {
                availability.owGlitches = "agahnim";
            }
            else if (canEnterSouthDarkWorld("owGlitches", true, true)) {
                availability.owGlitches = "glitchagahnim";
            }
        }
        if (glitchedLinkInDarkWorld()) {
            if (canEnterSouthDarkWorld("majorGlitches", false, false)) {
                availability.majorGlitches = "available";
            }
            else if (canEnterSouthDarkWorld("majorGlitches", true, false)) {
                availability.majorGlitches = "agahnim";
            }
            else if (canEnterSouthDarkWorld("majorGlitches", true, true)) {
                availability.majorGlitches = "glitchagahnim";
            }
        }
        return availability;
    }
};

chests.zelda3[53] = {
    name: "Zora River Ledge " + mini("flippers"),
    x: "47.5%",
    y: "17.3%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.flippers) {
            availability.glitchless = 'available';
        }
        else if (canLiftRocks()) {
            availability.glitchless = 'possible';
        }
        else {
            availability.glitchless = 'glitchpossible';
        }
        if (trackerData.zelda3.items.boots && trackerData.zelda3.items.moonpearl) {
            availability.owGlitches = 'available';
        }
        else {
            availability.owGlitches = 'possible';
        }
        return availability;
    }
};

chests.zelda3[54] = {
    name: "Buried Item " + mini("shovel"),
    x: "14.4%",
    y: "66.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.shovel) {
            availability.glitchless = 'available';
        }
        return availability;
    }
};

chests.zelda3[55] = {
    name: "Sewer Cracked Wall (3) " + mini("bomb") + "/" + mini("boots"),
    x: "26.8%",
    y: "32.4%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (!trackerOptions[selectedGame].openmode || trackerData.zelda3.items.lantern || canLiftRocks()) {
            availability.glitchless = 'available';
        } else {
            availability.glitchless = 'unavailable';
        }
        return availability;
    }
};

chests.zelda3[56] = {
    name: "Castle Secret Entrance (2)",
    x: "29.8%",
    y: "41.8%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'available';
        return availability;
    }
};

chests.zelda3[57] = {
    name: "Hyrule Castle (3)",
    x: "24.9%",
    y: "44.1%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'available';
        return availability;
    }
};

chests.zelda3[58] = {
    name: "Sanctuary",
    x: "23.0%",
    y: "28.0%",
    isOpened: true,
    isAvailable: function () {
        const availability = new Availability();
        availability.glitchless = 'available';
        return availability;
    }
};

chests.zelda3[59] = {
    name: "Mad Batter " + mini("hammer") + "/" + mini("boots") + " + " + mini("powder"),
    x: "16.0%",
    y: "58.0%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.hammer
                || (trackerData.zelda3.items.moonpearl && trackerData.zelda3.items.mirror && canLiftDarkRocks())) {
            if (trackerData.zelda3.items.powder) {
                availability.glitchless = 'available';
            }
            else if (trackerData.zelda3.items.somaria && trackerData.zelda3.items.mushroom) {
                availability.glitchless = 'glitchavailable';
            }
        }
        if (trackerData.zelda3.items.powder && trackerData.zelda3.items.boots) {
            availability.owGlitches = 'available';
        }
        else if (trackerData.zelda3.items.powder && trackerData.zelda3.items.mirror) {
            availability.majorGlitches = 'available';
        }
        return availability;
    }
};

chests.zelda3[60] = {
    name: "Take the frog home (" + mini("mirror") + " or save and quit)",
    x: "15.2%",
    y: "51.8%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canLiftDarkRocks()) {
            if (canEnterNorthWestDarkWorld('glitchless', false, false)) {
                availability.glitchless = 'available';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.moonpearl && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && trackerData.zelda3.items.mirror))) {
            if (canEnterNorthWestDarkWorld('owGlitches', false, false)) {
                availability.owGlitches = 'available';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (glitchedLinkInDarkWorld() && (canLiftDarkRocks() || (trackerData.zelda3.items.boots && trackerData.zelda3.items.mirror))) {
            if (canEnterNorthWestDarkWorld('majorGlitches', false, false)) {
                availability.majorGlitches = 'available';
            }
            else if (canEnterNorthWestDarkWorld('majorGlitches', true, false)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('majorGlitches', true, true)) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[61] = {
    name: "Fat Fairy: Buy OJ bomb from Dark Link's House after " + mini("redCrystal") + "5 " + mini("redCrystal") + "6 (2 items)",
    x: "73.5%",
    y: "48.5%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        // Crystal check
        let crystalCount = 0;
        for (let k = 0; k < 10; k++) {
            if (trackerData.zelda3.prizes[k] === redCrystal && trackerData.zelda3.items["boss" + k] === 2) {
                crystalCount++;
                if (crystalCount === 2) {
                    break;
                }
            }
        }
        if (crystalCount === 2 && trackerData.zelda3.items.moonpearl) {
            if (canEnterSouthDarkWorld('glitchless', false, false)
                    && (trackerData.zelda3.items.hammer || (trackerData.zelda3.items.mirror && trackerData.zelda3.items.agahnim))) {
                availability.glitchless = 'available';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, false)
                    && (trackerData.zelda3.items.hammer || (trackerData.zelda3.items.mirror && canGoBeatAgahnim1(false)))) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, true)
                    && (trackerData.zelda3.items.hammer || (trackerData.zelda3.items.mirror && canGoBeatAgahnim1(true)))) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (trackerData.zelda3.items.mirror && canSpinSpeed()) {
            availability.owGlitches = 'available';
        }
        else if (crystalCount === 2) {
            if (canEnterSouthDarkWorld('owGlitches', false, false)
                    && ((trackerData.zelda3.items.hammer && trackerData.zelda3.items.moonpearl) || (trackerData.zelda3.items.mirror && trackerData.zelda3.items.agahnim))) {
                availability.owGlitches = 'available'
            }
            else if (canEnterSouthDarkWorld('owGlitches', true, false)
                    && ((trackerData.zelda3.items.hammer && trackerData.zelda3.items.moonpearl) || (trackerData.zelda3.items.mirror && canGoBeatAgahnim1(false)))) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('owGlitches', true, true)
                    && ((trackerData.zelda3.items.hammer && trackerData.zelda3.items.moonpearl) || (trackerData.zelda3.items.mirror && canGoBeatAgahnim1(true)))) {
                availability.owGlitches = 'glitchagahnim';
            }
            if (canEnterSouthDarkWorld('majorGlitches', false, false)
                    && ((trackerData.zelda3.items.hammer && glitchedLinkInDarkWorld()) || (trackerData.zelda3.items.mirror && trackerData.zelda3.items.agahnim))) {
                availability.majorGlitches = 'available'
            }
            else if (canEnterSouthDarkWorld('majorGlitches', true, false)
                    && ((trackerData.zelda3.items.hammer && glitchedLinkInDarkWorld()) || (trackerData.zelda3.items.mirror && canGoBeatAgahnim1(false)))) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('majorGlitches', true, true)
                    && ((trackerData.zelda3.items.hammer && glitchedLinkInDarkWorld()) || (trackerData.zelda3.items.mirror && canGoBeatAgahnim1(true)))) {
                availability.majorGlitches = 'glitchagahnim';
            }
        }
        return availability;
    }
};

chests.zelda3[62] = {
    name: "Master Sword Pedestal " + mini("pendant0") + mini("pendant1") + mini("pendant2") + " (can check with " + mini("book") + ")",
    x: "2.5%",
    y: "3.2%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        let pendantCount = 0;
        for (let k = 0; k < 10; k++) {
            if ((trackerData.zelda3.prizes[k] === badPendant || trackerData.zelda3.prizes[k] === greenPendant) && trackerData.zelda3.items["boss" + k] === 2) {
                pendantCount++;
                if (pendantCount === 3) {
                    break;
                }
            }
        }
        if (pendantCount === 3) {
            availability.glitchless = 'available';
        }
        else if (trackerData.zelda3.items.book) {
            availability.glitchless = 'possible';
        }
        return availability;
    }
};

chests.zelda3[63] = {
    name: "Waterfall of the Wishing (2) " + mini("flippers"),
    x: "44.9%",
    y: "14.7%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (trackerData.zelda3.items.flippers) {
            availability.glitchless = 'available';
        }
        else if (trackerData.zelda3.items.moonpearl) {
            availability.glitchless = 'glitchavailable';
            availability.owGlitches = 'available';
        }
        else if (trackerData.zelda3.items.boots) {
            availability.glitchless = 'glitchavailable';
        }
        return availability;
    }
};

chests.zelda3[64] = {
    name: "Sewer Dark Cross",
    x: "26.8%",
    y: "38%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (!trackerOptions[selectedGame].openmode || trackerData.zelda3.items.lantern) {
            availability.glitchless = 'available';
        } else {
            availability.glitchless = 'unavailable';
        }        
        return availability;
    }
};