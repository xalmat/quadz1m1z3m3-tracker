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
