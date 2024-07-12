dungeons.zelda3[0] = {
    name: "Eastern Palace",
    label: "EP",
    x: "46.8%",
    y: "38.8%",
    isBeatable: function() {
        const availability = new Availability();
        if (has("bow")) {
            if (has("lantern")) {
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
        if (has("lantern")) {
            if (has("bow")) {
                availability.glitchless = 'available';
            }
            else if (trackerData.zelda3.dungeonchests[0] >= 2) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (trackerData.zelda3 && trackerData.zelda3.dungeonchests && trackerData.zelda3.dungeonchests[0] === 3) {
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
            return canRead()
                    || canDash()
                    || (has("mirror") && canEnterMireArea('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'owGlitches') {
            return canRead()
                    || canDash()
                    || (has("mirror") && canEnterMireArea('owGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'glitchless') {
            return canRead()
                    || (has("mirror") && canLiftDarkRocks() && canFly())
                    || (canAccessMiseryMirePortal() && has("mirror"));
        }
    },
    canHurtBoss: function() {
        return hasSword()
                || has("hammer")
                || has("bow")
                || has("firerod")
                || has("icerod")
                || has("byrna")
                || has("somaria")
    },
    isBeatable: function () {
        const availability = new Availability();
        if (canLiftRocks() && canLightTorches()) {
            if (this.canEnter('glitchless', false, false)) {
                if (canDash()) {
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
                if (canDash()) {
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
                if (canDash()) {
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
            if (canDash() && (trackerData.zelda3.dungeonchests[1] === 2 || (this.canHurtBoss() && canLightTorches() && canLiftRocks()))) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (canDash() && (trackerData.zelda3.dungeonchests[1] === 2 || (this.canHurtBoss() && canLightTorches() && canLiftRocks()))) {
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
            if (canDash() && (trackerData.zelda3.dungeonchests[1] === 2 || (this.canHurtBoss() && canLightTorches() && canLiftRocks()))) {
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
            return canDash()
                    || (canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches)
                            && (has("mirror") || (canGrapple() && has("hammer"))))
                    // Enter from Misery Mire.
                    || (dungeons.zelda3[8].canEnter('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'owGlitches') {
            return canDash()
                    || (canEnterWestDeathMountain('owGlitches', allowOutOfLogicGlitches)
                            && (has("mirror") || (canGrapple() && has("hammer"))));
        }
        else if (logic === 'glitchless') {
            return canEnterWestDeathMountain('glitchless', allowOutOfLogicGlitches)
                    && (has("mirror") || (canGrapple() && has("hammer")));
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
        if (hasSword() || has("hammer")) {
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
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || hasSword() || has("hammer"))) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'partial';
            }
        }
        else if (this.canEnter('glitchless', false, true)) {
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || hasSword() || has("hammer"))) {
                availability.glitchless = 'glitchavailable';
            }
            else {
                availability.glitchless = 'glitchpartial';
            }
        }
        if (this.canEnter('owGlitches', false, false)) {
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || hasSword() || has("hammer"))) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (canLightTorches() && (trackerData.zelda3.dungeonchests[2] === 2 || hasSword() || has("hammer"))) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpartial';
            }
        }
        if (this.canEnter('majorGlitches', false, false)) {
            if ((canLightTorches() || dungeons.zelda3[8].canEnter('majorGlitches', false, false))
                    && (trackerData.zelda3.dungeonchests[2] === 2 || hasSword() || has("hammer"))) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if ((canLightTorches() || dungeons.zelda3[8].canEnter('majorGlitches', false, false))
                    && (trackerData.zelda3.dungeonchests[2] === 2 || hasSword() || has("hammer"))) {
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
            return canEnterNorthEastDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches) && has("moonpearl");
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (has("hammer") && has("bow")) {
            if (this.canEnter('glitchless', false, false) && has("lantern")) {
                availability.glitchless = 'available';
            }
            else if (this.canEnter('glitchless', false, true)) {
                availability.glitchless = 'glitchavailable';
            }
            else if (this.canEnter('glitchless', true, false) && has("lantern")) {
                availability.glitchless = 'agahnim';
            }
            else if (this.canEnter('glitchless', true, true)) {
                availability.glitchless = 'glitchedagahnim';
            }
            if (this.canEnter('owGlitches', false, false) && has("lantern")) {
                availability.owGlitches = 'available';
            }
            else if (this.canEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchavailable';
            }
            else if (this.canEnter('owGlitches', true, false) && has("lantern")) {
                availability.owGlitches = 'agahnim';
            }
            else if (this.canEnter('owGlitches', true, true)) {
                availability.owGlitches = 'glitchedagahnim';
            }
            if (this.canEnter('majorGlitches', false, false) && has("lantern")) {
                availability.majorGlitches = 'available';
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if (this.canEnter('majorGlitches', true, false) && has("lantern")) {
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
            if (has("bow") && (trackerData.zelda3.dungeonchests[3] >= 2 || has("hammer"))) {
                if (has("lantern")) {
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
            if (has("bow") && (trackerData.zelda3.dungeonchests[3] >= 2 || has("hammer"))) {
                if (has("lantern")) {
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
            if (has("bow") && (trackerData.zelda3.dungeonchests[3] >= 2 || has("hammer"))) {
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
            if (has("bow") && (trackerData.zelda3.dungeonchests[3] >= 2 || has("hammer"))) {
                if (has("lantern")) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'partial';
                }
            }
            else if (has("lantern")) {
                availability.majorGlitches = 'partial';
            }
            else {
                availability.majorGlitches = 'glitchpartial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (has("bow") && (trackerData.zelda3.dungeonchests[3] >= 2 || has("hammer"))) {
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
                    || (has("moonpearl")
                            && has("mirror")
                            && canSwim()
                            && canEnterSouthDarkWorld('majorGlitches', agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'glitchless' || logic === 'owGlitches') {
            return (has("moonpearl")
                    && has("mirror")
                    && canSwim()
                    && canEnterSouthDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches));
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (has("hammer") && canGrapple()) {
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
        if (canGrapple()
                && canSwim()
                && (hasSword()
                        || has("hammer")
                        || ((has("bow") || canExtendMagic())
                                && (has("firerod") || has("icerod"))))) {
            if ((this.canEnter('majorGlitches', false, false))
                    && (has("hammer") || dungeons.zelda3[8].canEnter('majorGlitches', false, false))) {
                availability.majorGlitches = 'available';
            }
            else if ((this.canEnter('majorGlitches', false, true))
                    && (has("hammer") || dungeons.zelda3[8].canEnter('majorGlitches', false, true))) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if ((this.canEnter('majorGlitches', true, false))
                    && (has("hammer") || dungeons.zelda3[8].canEnter('majorGlitches', true, false))) {
                availability.majorGlitches = 'agahnim';
            }
            else if ((this.canEnter('majorGlitches', true, true))
                    && (has("hammer") || dungeons.zelda3[8].canEnter('majorGlitches', true, true))) {
                availability.majorGlitches = 'glitchedagahnim';
            }
        }
        return availability;
    },
    canGetChest: function () {
        const availability = new Availability();
        if (this.canEnter('glitchless', false, false)) {
            if (has("hammer")) {
                if (canGrapple() || trackerData.zelda3.dungeonchests[4] >= 5) {
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
            if (has("hammer")) {
                if (canGrapple() || trackerData.zelda3.dungeonchests[4] >= 5) {
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
            if (has("hammer")) {
                if (canGrapple() || trackerData.zelda3.dungeonchests[4] >= 5) {
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
            if (canSwim()
                    && (has("hammer") || dungeons.zelda3[8].canEnter('majorGlitches', false, false))) {
                if (canGrapple()) {
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
            if (canSwim()
                    && (has("hammer") || dungeons.zelda3[8].canEnter('majorGlitches', false, false))) {
                if (canGrapple()) {
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
            return has("moonpearl")
                    && canEnterNorthWestDarkWorld('glitchless', agahnimCheck, allowOutOfLogicGlitches)
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (has("moonpearl") && has("firerod") && hasSword()) {
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
            if (has("moonpearl")
                    && has("firerod")
                    && (hasSword() || trackerData.zelda3.dungeonchests[5] === 2)) {
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
            if (has("moonpearl")
                    && has("firerod")
                    && (hasSword() || trackerData.zelda3.dungeonchests[5] === 2)) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (has("moonpearl")
                    && has("firerod")
                    && (hasSword() || trackerData.zelda3.dungeonchests[5] === 2)) {
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
            if (has("moonpearl")
                    && has("firerod")
                    && (hasSword() || trackerData.zelda3.dungeonchests[5] === 2)) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (has("moonpearl")
                    && has("firerod")
                    && (hasSword() || trackerData.zelda3.dungeonchests[5] === 2)) {
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
            return has("moonpearl") && canEnterNorthWestDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches);
        }
    },
    canHurtBoss: function () {
        return hasSword()
                || has("hammer")
                || has("somaria")
                || has("byrna");
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
            if (has("hammer")
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
            if (has("hammer")
                    || trackerData.zelda3.dungeonchests[6] >= 3
                    || (this.canHurtBoss() && trackerData.zelda3.dungeonchests[6] >= 2)) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'partial';
            }
        }
        else if (this.canEnter('owGlitches', false, true)) {
            if (has("hammer")
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
            if (has("hammer")
                    || trackerData.zelda3.dungeonchests[6] >= 3
                    || (this.canHurtBoss() && trackerData.zelda3.dungeonchests[6] >= 2)) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'partial';
            }
        }
        else if (this.canEnter('majorGlitches', false, true)) {
            if (has("hammer")
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
                    || (has("mirror") && glitchedLinkInDarkWorld() && canEnterSouthDarkWorld(logic, agahnimCheck, allowOutOfLogicGlitches));
        }
        else if (logic === 'owGlitches') {
            return canLiftDarkRocks() && canMeltThings();
        }
        else if (logic === 'glitchless') {
            return canLiftDarkRocks()
                    && canMeltThings()
                    && (allowOutOfLogicGlitches || (has("moonpearl") && canSwim()));
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (canMeltThings() && canLiftRocks() && has("hammer")) {
            if (this.canEnter('glitchless', false, false)) {
                if (canGrapple() && has("somaria")) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'glitchavailable';
                }
            }
            else if (this.canEnter('glitchless', false, true)) {
                availability.glitchless = 'glitchpossible';
            }
            if (this.canEnter('owGlitches', false, false) && has("hammer")) {
                if (canGrapple() && has("somaria")) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (this.canEnter('owGlitches', false, true)) {
                availability.owGlitches = 'glitchavailable';
            }
            if (this.canEnter('majorGlitches', false, false) && has("hammer")) {
                if (canGrapple() && has("somaria")) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchavailable';
            }
            else if (this.canEnter('majorGlitches', true, false) && has("hammer")) {
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
            if (has("hammer") && canLiftRocks()) {
                if (canGrapple()) {
                    availability.glitchless = 'available';
                }
                else if (canInvul()) {
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
            if (has("hammer") && canLiftRocks()) {
                if (canGrapple()) {
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
            if (has("hammer") && canLiftRocks()) {
                if (canGrapple()) {
                    availability.owGlitches = 'available';
                }
                else if (canInvul()) {
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
            if (has("hammer") && canLiftRocks()) {
                if (canGrapple()) {
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
            if (has("hammer") && canLiftRocks()) {
                if (canGrapple()) {
                    availability.majorGlitches = 'available';
                }
                else if (canInvul()) {
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
            if (has("hammer") && canLiftRocks()) {
                if (canGrapple()) {
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
        return (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[8] === 1 && has("bombos"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[8] === 2 && has("ether"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[8] === 3 && has("quake"))
                || (has("bombos") && has("ether") && has("quake"));
    },
    mayHaveMedallion: function () {
        return !((trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[8] === 1 && !has("bombos"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[8] === 2 && !has("ether"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[8] === 3 && !has("quake"))
                || (!has("bombos") && !has("ether") && !has("quake")));
    },
    canEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'glitchless') {
            return this.hasMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && (canDash() || canGrapple())
                    && canEnterMireArea('glitchless', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.hasMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && (canDash() || canGrapple())
                    && canEnterMireArea('owGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'majorGlitches') {
            return this.hasMedallion()
                    && hasSword()
                    && (has("moonpearl") || (has("bottle") && canDash()))
                    && (canDash() || canGrapple())
                    && canEnterMireArea('majorGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
    },
    mayEnter: function (logic, agahnimCheck, allowOutOfLogicGlitches) {
        if (logic === 'glitchless') {
            return this.mayHaveMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && (canDash() || canGrapple())
                    && canEnterMireArea('glitchless', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.mayHaveMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && (canDash() || canGrapple())
                    && canEnterMireArea('owGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
        else if (logic === 'majorGlitches') {
            return this.mayHaveMedallion()
                    && hasSword()
                    && (has("moonpearl") || (has("bottle") && canDash()))
                    && (canDash() || canGrapple())
                    && canEnterMireArea('majorGlitches', agahnimCheck, allowOutOfLogicGlitches);
        }
    },
    canHurtBoss: function () {
        return hasSword() || has("hammer") || has("bow");
    },
    isBeatable: function () {
        const availability = new Availability();
        if (has("somaria") && this.canHurtBoss()) {
            if (this.canEnter('glitchless', false, false) && has("lantern")) {
                if (canInvul()) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (this.mayEnter('glitchless', false, false) && has("lantern")) {
                availability.glitchless = 'possible';
            }
            else if (this.canEnter('glitchless', false, true)) {
                if (canLightTorches() && canInvul()) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            else if (this.mayEnter('glitchless', false, true)) {
                availability.glitchless = 'glitchpossible';
            }
            if (this.canEnter('owGlitches', false, false) && has("lantern")) {
                if (canInvul()) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (this.mayEnter('owGlitches', false, false) && has("lantern")) {
                availability.owGlitches = 'possible';
            }
            else if (this.canEnter('owGlitches', false, true)) {
                if (canLightTorches() && canInvul()) {
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
            if (this.canEnter('majorGlitches', false, false) && has("lantern")) {
                if (canInvul()) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.mayEnter('majorGlitches', false, false) && has("lantern")) {
                availability.majorGlitches = 'possible';
            }
            else if (this.canEnter('majorGlitches', false, true)) {
                if (canLightTorches() && canInvul()) {
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
                        && (canInvul()
                                || (has("somaria") && this.canHurtBoss()))) {
                    availability.glitchless = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (canInvul())
                        && has("somaria")
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
                        && (canInvul()
                                || (has("somaria") && this.canHurtBoss() && has("lantern")))) {
                    availability.owGlitches = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (canInvul())
                        && has("somaria")
                        && this.canHurtBoss()
                        && has("lantern")) {
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
                        && (canInvul()
                                || (has("somaria") && this.canHurtBoss() && has("lantern")))) {
                    availability.owGlitches = 'glitchavailable';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (canInvul())
                        && has("somaria")
                        && this.canHurtBoss()
                        && has("lantern")) {
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
                        && (canInvul()
                                || (has("somaria") && this.canHurtBoss() && has("lantern")))) {
                    availability.majorGlitches = 'available';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && (canInvul())
                        && has("somaria")
                        && this.canHurtBoss()
                        && has("lantern")) {
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
                        && (has("cape")
                                || has("byrna")
                                || (has("somaria") && this.canHurtBoss() && has("lantern")))) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else if (trackerData.zelda3.dungeonchests[8] === 1
                        && canInvul()
                        && has("somaria")
                        && this.canHurtBoss()
                        && has("lantern")) {
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
        return (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[9] === 1 && has("bombos"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[9] === 2 && has("ether"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[9] === 3 && has("quake"))
                || (has("bombos") && has("ether") && has("quake"));
    },
    mayHaveMedallion: function () {
        return !((trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[9] === 1 && !has("bombos"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[9] === 2 && !has("ether"))
                || (trackerData.zelda3 && trackerData.zelda3.medallions && trackerData.zelda3.medallions[9] === 3 && !has("quake"))
                || (!has("bombos") && !has("ether") && !has("quake")));
    },
    lower: function (logic, allowOutOfLogicGlitches) {
        return logic === 'majorGlitches'
                && canEnterWestDeathMountain('majorGlitches', allowOutOfLogicGlitches)
                && (has("moonpearl") || (has("bottle") && canDash()))
                && has("mirror");
    },
    middle: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return (has("mirror") || (glitchedLinkInDarkWorld() && canSpinSpeed()))
                    && (canDash() || has("somaria") || canGrapple())
                    && canEnterEastDarkWorldDeathMountain('majorGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return (has("mirror") || (has("moonpearl") && canSpinSpeed()))
                    && (canDash() || has("somaria") || canGrapple())
                    && canEnterEastDarkWorldDeathMountain('owGlitches', allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return false;
        }
    },
    upperCan: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return this.hasMedallion()
                    && hasSword()
                    && (has("moonpearl") || (has("bottle") && canDash()))
                    && has("somaria")
                    && has("hammer")
                    && (canLiftDarkRocks() || canDash())
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.hasMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && has("somaria")
                    && has("hammer")
                    && (canLiftDarkRocks() || canDash())
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return this.hasMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && has("somaria")
                    && has("hammer")
                    && canLiftDarkRocks()
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
    },
    upperMay: function (logic, allowOutOfLogicGlitches) {
        if (logic === 'majorGlitches') {
            return this.mayHaveMedallion()
                    && hasSword()
                    && (has("moonpearl") || (has("bottle") && canDash()))
                    && has("somaria")
                    && has("hammer")
                    && (canLiftDarkRocks() || canDash())
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'owGlitches') {
            return this.mayHaveMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && has("somaria")
                    && has("hammer")
                    && (canLiftDarkRocks() || canDash())
                    && canEnterEastDeathMountain(logic, allowOutOfLogicGlitches);
        }
        else if (logic === 'glitchless') {
            return this.mayHaveMedallion()
                    && hasSword()
                    && has("moonpearl")
                    && has("somaria")
                    && has("hammer")
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
        if (has("firerod") && has("icerod") && has("somaria")) {
            if (this.canEnter('glitchless', false)
                    && has("lantern")
                    && (has("hammer") || hasSword(2))) {
                if (canInvul() || canBlockLasers()) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'glitchavailable';
                }
            }
            else if (this.mayEnter('glitchless', false)) {
                availability.glitchless = 'possible';
            }
            else if (this.canEnter('glitchless', true)) {
                availability.glitchless = 'glitchavailable';
            }
            else if (this.mayEnter('glitchless', true)) {
                availability.glitchless = 'glitchpossible';
            }
            if (this.canEnter('owGlitches', false)
                    && has("lantern")
                    && (has("hammer") || hasSword(2))) {
                if (canInvul() || canBlockLasers()) {
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
                if (canInvul() || canBlockLasers()) {
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
                    && has("lantern")
                    && (has("hammer") || hasSword(2))) {
                if (canInvul() || canBlockLasers()) {
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
                if (canInvul() || canBlockLasers()) {
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
            if (has("firerod")) {
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
            if (has("firerod")) {
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
            if (has("firerod")) {
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
            if (has("firerod")) {
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
            if (has("firerod")) {
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
            if (has("firerod")) {
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
            if (has("firerod")) {
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
            if (has("firerod")) {
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
                if (has("lantern") && (canInvul() || canBlockLasers())) {
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
            if (has("firerod")) {
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
            return canDash() && has("moonpearl");
        }
        else if (logic === 'glitchless') {
            let crystalCount = 0;
            for (let k = 0; k < 10; k++) {
                if (
                       (
                           (trackerData.zelda3 && trackerData.zelda3.prizes && trackerData.zelda3.prizes[k] === OJCRYSTAL) ||
                           (trackerData.zelda3 && trackerData.zelda3.prizes && trackerData.zelda3.prizes[k] === CRYSTAL)
                       ) &&
                       trackerData.zelda3.items["z3" + "boss" + k] === 2
                ) {
                    crystalCount++;
                    if (crystalCount === 7) {
                        break;
                    }
                }
            }
            return crystalCount === 7 && has("moonpearl") && canEnterEastDarkWorldDeathMountain(logic, allowOutOfLogicGlitches);
        }
    },
    isBeatable: function () {
        const availability = new Availability();
        if (canGrapple()
                && has("bow")
                && canLightTorches()
                && (has("hammer") || hasSword())) {
            if (this.canEnter('glitchless', false)) {
                if (canDash() && has("hammer") && has("firerod") && has("somaria")) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (this.canEnter('glitchless', true)) {
                if (canDash() && has("hammer") && has("firerod") && has("somaria")) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
            if (this.canEnter('owGlitches', false)) {
                if (canDash() && has("hammer") && has("firerod") && has("somaria")) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            if (this.canEnter('majorGlitches', false)) {
                if (canDash() && has("hammer") && has("firerod") && has("somaria")) {
                    availability.majorGlitches = 'available';
                }
                else {
                    availability.majorGlitches = 'possible';
                }
            }
            else if (this.canEnter('majorGlitches', true)) {
                if (canDash() && has("hammer") && has("firerod") && has("somaria")) {
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
        if (canDash()) {
            minAvailableChests++;
            maxAvailableChests++;
        }
        // DMs Room x4 + Randomizer Room x4 + Firesnake Room
        if (has("hammer") && canGrapple()) {
            minAvailableChests += 9;
            maxAvailableChests += 9;
            smallKeysNeeded = 4;
        }
        // Map Chest
        if (has("hammer")
                && (canDash() || canGrapple())) {
            minAvailableChests++;
            maxAvailableChests++;
        }
        // Bob's Chest + Big Key Room x3
        if ((has("hammer") && canGrapple())
                || (has("firerod") && has("somaria"))) {
            minAvailableChests += 4;
            maxAvailableChests += 4;
            smallKeysNeeded = Math.max(3, smallKeysNeeded);
        }
        // Tile Room
        if (has("somaria")) {
            minAvailableChests++;
            maxAvailableChests++;
        }
        // Compass Room x4
        if (has("firerod") && has("somaria")) {
            minAvailableChests += 4;
            maxAvailableChests += 4;
            smallKeysNeeded = Math.max(4, smallKeysNeeded);
        }
        // Big Chest
        if (has("hammer")
                && canDash()
                && canGrapple()
                && has("somaria")
                && has("firerod")) {
            minAvailableChests++;
            maxAvailableChests++;
            bigKeyNeeded = 1;
            bigKeyGuaranteed = true;
        }
        // Mini Helmasaur Room x2 + Pre-Moldorm Chest
        if (has("bow") && canLightTorches()) {
            if (bigKeyGuaranteed) {
                minAvailableChests += 3;
            }
            maxAvailableChests += 3;
            smallKeysNeeded = Math.max(3, smallKeysNeeded);
            bigKeyNeeded = 1;
        }
        // Moldorm Chest
        if (canGrapple()
                && has("bow")
                && canLightTorches()
                && (has("hammer") || hasSword())) {
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
