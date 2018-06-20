chests.zelda3[0] = {
    name: "King's Tomb " + mini("boots") + ' + ' + mini("glove2") + '/' + mini("mirror"),
    x: "30.8%",
    y: "29.6%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (canDash() && canLiftDarkRocks()) {
            availability.glitchless = "available";
        }
        else if (canDash() && has("mirror")) {
            if (has("moonpearl")) {
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
        if (canEnterEastDeathMountain("glitchless", false) && has("mirror") && dungeons.zelda3[9].mayEnter("glitchless", false)) {
            if (has("firerod") && dungeons.zelda3[9].canEnter("glitchless", false)) {
                availability.glitchless = "available";
            }
            else {
                availability.glitchless = "possible";
            }
        }
        else if (canEnterEastDeathMountain("glitchless", true) && has("mirror") && dungeons.zelda3[9].mayEnter("glitchless", true)) {
            if (has("firerod") && dungeons.zelda3[9].canEnter("glitchless", true)) {
                availability.glitchless = "glitchavailable";
            }
            else {
                availability.glitchless = "glitchpossible";
            }
        }
        if (has("hammer") && has("mirror")) {
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
        if (has("moonpearl")) {
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
            if (has("moonpearl")) {
                availability.glitchless = 'available';
            }
            else if (has("mirror")) {
                availability.glitchless = 'glitchavailable';
            }
        }
        if (has("moonpearl") || has("mirror")) {
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
            if (canEnterEastDarkWorldDeathMountain('glitchless', false) && has("moonpearl")) {
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
        if (canLiftRocks() && has("hammer") && has("moonpearl")) {
            if (canEnterWestDeathMountain('glitchless', true)) {
				if (canEnterWestDeathMountain('glitchless', false) && canExtendMagic() && (canInvul())) {
                    if (canEnterWestDeathMountain('glitchless', false)) {
                        availability.glitchless = 'available';
                    }
                    else {
                        availability.glitchless = 'glitchavailable';
                    }
                }
            }
            if (canEnterWestDeathMountain('owGlitches', true) && has("moonpearl")) {
                if (canExtendMagic() && (canInvul())) {
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
            else if (canEnterWestDeathMountain('majorGlitches', true) && (has("moonpearl") || (has("bottle") && canDash()))) {
                if (canExtendMagic() && (canInvul())) {
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
        if (has("moonpearl")) {
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
        if (canDash()) {
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
        if (has("moonpearl")
                && (canGrapple() || canDash())) {
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
        if (has("moonpearl") && canGrapple()) {
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
            if (trackerData.zelda3 && trackerData.zelda3.prizes && trackerData.zelda3.prizes[k] === greenPendant && trackerData.zelda3.items["boss" + k] === 2) {
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
        if (has("moonpearl")) {
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
        if (has("bottle")) {
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
        if (has("moonpearl")) {
            if (canEnterNorthWestDarkWorld('owGlitches', false, false)
                    && chests.zelda3[60].isAvailable().owGlitches === 'available'
                    && (canLiftDarkRocks() || (canDash() && canEnterNorthEastDarkWorld('owGlitches', false, false)))) {
                availability.owGlitches = 'available';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, false)
                    && (chests.zelda3[60].isAvailable().owGlitches === 'available' || chests.zelda3[60].isAvailable().owGlitches === 'agahnim')
                    && (canLiftDarkRocks() || (canDash() && canEnterNorthEastDarkWorld('owGlitches', true, false)))) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, true)
                    && (chests.zelda3[60].isAvailable().owGlitches === 'available' || chests.zelda3[60].isAvailable().owGlitches === 'agahnim' || chests.zelda3[60].isAvailable().owGlitches === 'glitchagahnim')
                    && (canLiftDarkRocks() || (canDash() && canEnterNorthEastDarkWorld('owGlitches', true, true)))) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (canEnterNorthWestDarkWorld('majorGlitches', false, false)
                && chests.zelda3[60].isAvailable().majorGlitches === 'available'
                && (has("mirror")
                        || (glitchedLinkInDarkWorld() && canLiftDarkRocks())
                        || (canDash() && glitchedLinkInDarkWorld() && canEnterNorthEastDarkWorld('majorGlitches', false, false)))) {
            availability.majorGlitches = 'available';
        }
        else if (canEnterNorthWestDarkWorld('majorGlitches', true, false)
                && (chests.zelda3[60].isAvailable().majorGlitches === 'available' || chests.zelda3[60].isAvailable().majorGlitches === 'agahnim')
                && (has("mirror")
                        || (glitchedLinkInDarkWorld() && canLiftDarkRocks())
                        || (canDash() && glitchedLinkInDarkWorld() && canEnterNorthEastDarkWorld('majorGlitches', true, false)))) {
            availability.majorGlitches = 'agahnim';
        }
        else if (canEnterNorthWestDarkWorld('majorGlitches', true, true)
                && (chests.zelda3[60].isAvailable().majorGlitches === 'available' || chests.zelda3[60].isAvailable().majorGlitches === 'agahnim' || chests.zelda3[60].isAvailable().majorGlitches === 'glitchagahnim')
                && (has("mirror")
                        || (glitchedLinkInDarkWorld() && canLiftDarkRocks())
                        || (canDash() && glitchedLinkInDarkWorld() && canEnterNorthEastDarkWorld('majorGlitches', true, true)))) {
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
        if (canSwim()) {
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
        if (canRead() && (has("mirror") || (has("hammer") && canGrapple()))) {
            if (canEnterWestDeathMountain('glitchless', false)) {
                if (hasSword(2)) {
                    availability.glitchless = 'available';
                }
                else {
                    availability.glitchless = 'possible';
                }
            }
            else if (canEnterWestDeathMountain('glitchless', true)) {
                if (hasSword(2)) {
                    availability.glitchless = 'glitchavailable';
                }
                else {
                    availability.glitchless = 'glitchpossible';
                }
            }
        }
        if (canRead()) {
            if (canEnterWestDeathMountain('owGlitches', false) && dungeons.zelda3[2].canEnter('owGlitches', false, false)) {
                if (hasSword(2)) {
                    availability.owGlitches = 'available';
                }
                else {
                    availability.owGlitches = 'possible';
                }
            }
            else if (canEnterWestDeathMountain('owGlitches', true) && dungeons.zelda3[2].canEnter('owGlitches', false, true)) {
                if (hasSword(2)) {
                    availability.owGlitches = 'glitchavailable';
                }
                else {
                    availability.owGlitches = 'glitchpossible';
                }
            }
        }
        if (canRead()) {
            if (canEnterWestDeathMountain('majorGlitches', false) && dungeons.zelda3[2].canEnter('majorGlitches', false, false)) {
                if (hasSword(2)) {
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
                if (hasSword(2)) {
                    availability.majorGlitches = 'glitchavailable';
                }
                else {
                    availability.majorGlitches = 'glitchpossible';
                }
            }
            else if (canEnterWestDeathMountain('majorGlitches', true) && dungeons.zelda3[2].mayEnter('majorGlitches', false, true)) {
                availability.majorGlitches = 'glitchpossible';
            }
            else if (canEnterWestDeathMountain('majorGlitches', false) && dungeons.zelda3[2].mayEnter('majorGlitches', true, false) && hasSword(2)) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterWestDeathMountain('majorGlitches', true) && dungeons.zelda3[2].mayEnter('majorGlitches', true, true) && hasSword(2)) {
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
        if (canRead() && has("mirror") && canEnterSouthDarkWorld('glitchless', false, false)) {
            if (hasSword(2)) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (canRead() && has("mirror") && hasSword(2)) {
            if (canEnterSouthDarkWorld('glitchless', true, false)) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, true)) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (canRead() && (canDash() || (has("mirror") && canEnterSouthDarkWorld('owGlitches', false, false)))) {
            if (hasSword(2)) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (canRead() && has("mirror") && hasSword(2)) {
            if (canEnterSouthDarkWorld('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (canRead()
                && (canDash() || (has("mirror") && canEnterSouthDarkWorld('majorGlitches', false, false)))) {
            if (hasSword(2)) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'possible';
            }
        }
        else if (canRead() && has("mirror") && hasSword(2)) {
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
        if (has("moonpearl") && canLiftRocks()) {
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
        if (has("moonpearl")
                && (canLiftRocks() || canDash())) {
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
                && (canLiftRocks() || canDash())) {
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
        if (canSwim() || canLiftRocks()) {
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
            if (has("lantern")) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'glitchavailable';
            }
        }
        else if (canEnterWestDeathMountain('owGlitches', true)) {
            if (has("lantern")) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'glitchavailable';
            }
        }
        else if (canEnterWestDeathMountain('majorGlitches', true)) {
            if (has("lantern")) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'glitchavailable';
            }
        }
        return availability;
    }
};

witchChest = 35;
chests.zelda3[35] = {
    name: "Witch: Give her " + mini("mushroom"),
    x: "40.8%",
    y: "32.5%",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if (has("mushroom")) {
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
        if (canDash()) {
            if (has("agahnim")) {
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
        if (has("mirror")) {
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
        if (canDash()) {
            availability.owGlitches = 'available';
        }
        else {
            if (has("mirror")) {
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
        if (has("mirror") && has("moonpearl")) {
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
        if (canDash()) {
            availability.owGlitches = 'available';
        }
        else {
            if (has("mirror") && has("moonpearl")) {
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
            if (has("mirror") && glitchedLinkInDarkWorld()) {
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
        if (((canFly() && canLiftDarkRocks()) || canAccessMiseryMirePortal()) && has("mirror")) {
            availability.glitchless = 'available';
        }
        if (canLiftRocks()) {
            if (canDash()) {
                availability.owGlitches = 'available';
            }
            else if (has("mirror")) {
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
        if (canLiftDarkRocks() && has("hammer")) {
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
        if (has("hammer") && has("moonpearl")) {
            if (canEnterNorthWestDarkWorld('owGlitches', false, false)
                    && (canLiftDarkRocks() || (canDash() && canEnterNorthEastDarkWorld('owGlitches', false, false)))) {
                availability.owGlitches = 'available';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, false)
                    && (canLiftDarkRocks() || (canDash() && canEnterNorthEastDarkWorld('owGlitches', true, false)))) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, true)
                    && (canLiftDarkRocks() || (canDash() && canEnterNorthEastDarkWorld('owGlitches', true, true)))) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (has("hammer") && glitchedLinkInDarkWorld()) {
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
        if (canDash()) {
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
            if (has("mirror")) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (canEnterWestDeathMountain('glitchless', true)) {
            if (has("mirror")) {
                availability.glitchless = 'glitchavailable';
            }
            else {
                availability.glitchless = 'glitchpossible';
            }
        }
        if (canEnterWestDeathMountain('owGlitches', false)) {
            if (canDash() || has("mirror")) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (canEnterWestDeathMountain('owGlitches', true)) {
            if (canDash() || has("mirror")) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpossible';
            }
        }
        if (canEnterWestDeathMountain('majorGlitches', false)) {
            if (canDash() || has("mirror")) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'possible';
            }
        }
        else if (canEnterWestDeathMountain('majorGlitches', true)) {
            if (canDash() || has("mirror")) {
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
            if (has("mirror")
                    && has("moonpearl")
                    && canLiftDarkRocks()) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (canEnterEastDeathMountain('glitchless', true)) {
            if (has("mirror")
                    && has("moonpearl")
                    && canLiftDarkRocks()) {
                availability.glitchless = 'glitchavailable';
            }
            else {
                availability.glitchless = 'glitchpossible';
            }
        }
        if (canEnterEastDeathMountain('owGlitches', false)) {
            if ((canDash()
                            || (has("mirror")
                                    && has("moonpearl")
                                    && canLiftRocks()
                                    && canEnterEastDarkWorldDeathMountain('owGlitches', false)))) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (canEnterEastDeathMountain('owGlitches', true)) {
            if ((canDash()
                            || (has("mirror")
                                    && has("moonpearl")
                                    && canLiftRocks()
                                    && canEnterEastDarkWorldDeathMountain('owGlitches', true)))) {
                availability.owGlitches = 'glitchavailable';
            }
            else {
                availability.owGlitches = 'glitchpossible';
            }
        }
        if (canEnterEastDeathMountain('majorGlitches', false)) {
            if ((canDash()
                            || (has("mirror")
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
            if ((canDash()
                            || (has("mirror")
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
        if (canSwim() && has("moonpearl") && has("mirror")) {
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
        if (canDash()) {
            availability.owGlitches = 'available';
        }
        else {
            if (canSwim() && has("mirror")) {
                if ((has("moonpearl") && canEnterSouthDarkWorld('owGlitches', false, false))
                        || canEnterNorthEastDarkWorld('owGlitches', false, false)) {
                    availability.owGlitches = 'available';
                }
                else if ((has("moonpearl") && canEnterSouthDarkWorld('owGlitches', true, false))
                        || canEnterNorthEastDarkWorld('owGlitches', true, false)) {
                    availability.owGlitches = 'agahnim';
                }
                else if ((has("moonpearl") && canEnterSouthDarkWorld('owGlitches', true, true))
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
            if (canLiftRocks() && has("cape")) {
                availability.glitchless = 'available';
            }
            else {
                availability.glitchless = 'possible';
            }
        }
        else if (canEnterNorthWestDarkWorld('glitchless', true, false) && canLiftRocks() && has("cape")) {
            availability.glitchless = 'agahnim';
        }
        else if (canEnterNorthWestDarkWorld('glitchless', true, true) && canLiftRocks() && has("cape")) {
            availability.glitchless = 'glitchagahnim';
        }
        if (canEnterNorthWestDarkWorld('owGlitches', false, false)) {
            if (has("moonpearl") && (canDash() || (canLiftRocks() && has("cape")))) {
                availability.owGlitches = 'available';
            }
            else {
                availability.owGlitches = 'possible';
            }
        }
        else if (has("moonpearl") && (canDash() || (canLiftRocks() && has("cape")))) {
            if (canEnterNorthWestDarkWorld('owGlitches', true, false)) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterNorthWestDarkWorld('owGlitches', true, true)) {
                availability.owGlitches = 'glitchagahnim';
            }
        }
        if (canEnterNorthWestDarkWorld('majorGlitches', false, false)) {
            if (glitchedLinkInDarkWorld() && (canDash() || (canLiftRocks() && has("cape")))) {
                availability.majorGlitches = 'available';
            }
            else {
                availability.majorGlitches = 'possible';
            }
        }
        else if (glitchedLinkInDarkWorld() && (canDash() || (canLiftRocks() && has("cape")))) {
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
        if (has("moonpearl")) {
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
        if (canSwim()) {
            availability.glitchless = 'available';
        }
        else if (canLiftRocks()) {
            availability.glitchless = 'possible';
        }
        else {
            availability.glitchless = 'glitchpossible';
        }
        if (canDash() && has("moonpearl")) {
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
        if (has("shovel")) {
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
        if (!(trackerOptions[selectedGame].mapState == "open") || has("lantern") || canLiftRocks()) {
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
        if (has("hammer")
                || (has("moonpearl") && has("mirror") && canLiftDarkRocks())) {
            if (has("powder")) {
                availability.glitchless = 'available';
            }
            else if (has("somaria") && has("mushroom") && !trackerData.zelda3.chestsopened[witchChest]) {
                availability.glitchless = 'glitchavailable';
            }
        }
        if (has("powder") && canDash()) {
            availability.owGlitches = 'available';
        }
        else if (has("powder") && has("mirror")) {
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
        if (has("moonpearl") && (canLiftDarkRocks() || (canDash() && has("mirror")))) {
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
        if (glitchedLinkInDarkWorld() && (canLiftDarkRocks() || (canDash() && has("mirror")))) {
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
            if (trackerData.zelda3 && trackerData.zelda3.prizes && trackerData.zelda3.prizes[k] === redCrystal && trackerData.zelda3.items["boss" + k] === 2) {
                crystalCount++;
                if (crystalCount === 2) {
                    break;
                }
            }
        }
        if (crystalCount === 2 && has("moonpearl")) {
            if (canEnterSouthDarkWorld('glitchless', false, false)
                    && (has("hammer") || (has("mirror") && has("agahnim")))) {
                availability.glitchless = 'available';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, false)
                    && (has("hammer") || (has("mirror") && canGoBeatAgahnim1(false)))) {
                availability.glitchless = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('glitchless', true, true)
                    && (has("hammer") || (has("mirror") && canGoBeatAgahnim1(true)))) {
                availability.glitchless = 'glitchagahnim';
            }
        }
        if (has("mirror") && canSpinSpeed()) {
            availability.owGlitches = 'available';
        }
        else if (crystalCount === 2) {
            if (canEnterSouthDarkWorld('owGlitches', false, false)
                    && ((has("hammer") && has("moonpearl")) || (has("mirror") && has("agahnim")))) {
                availability.owGlitches = 'available'
            }
            else if (canEnterSouthDarkWorld('owGlitches', true, false)
                    && ((has("hammer") && has("moonpearl")) || (has("mirror") && canGoBeatAgahnim1(false)))) {
                availability.owGlitches = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('owGlitches', true, true)
                    && ((has("hammer") && has("moonpearl")) || (has("mirror") && canGoBeatAgahnim1(true)))) {
                availability.owGlitches = 'glitchagahnim';
            }
            if (canEnterSouthDarkWorld('majorGlitches', false, false)
                    && ((has("hammer") && glitchedLinkInDarkWorld()) || (has("mirror") && has("agahnim")))) {
                availability.majorGlitches = 'available'
            }
            else if (canEnterSouthDarkWorld('majorGlitches', true, false)
                    && ((has("hammer") && glitchedLinkInDarkWorld()) || (has("mirror") && canGoBeatAgahnim1(false)))) {
                availability.majorGlitches = 'agahnim';
            }
            else if (canEnterSouthDarkWorld('majorGlitches', true, true)
                    && ((has("hammer") && glitchedLinkInDarkWorld()) || (has("mirror") && canGoBeatAgahnim1(true)))) {
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
            if (((trackerData.zelda3 && trackerData.zelda3.prizes && trackerData.zelda3.prizes[k] === badPendant) || (trackerData.zelda3 && trackerData.zelda3.prizes && trackerData.zelda3.prizes[k] === greenPendant)) && trackerData.zelda3.items["boss" + k] === 2) {
                pendantCount++;
                if (pendantCount === 3) {
                    break;
                }
            }
        }
        if (pendantCount === 3) {
            availability.glitchless = 'available';
        }
        else if (canRead()) {
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
        if (canSwim()) {
            availability.glitchless = 'available';
        }
        else if (has("moonpearl")) {
            availability.glitchless = 'glitchavailable';
            availability.owGlitches = 'available';
        }
        else if (canDash()) {
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
        if (!(trackerOptions[selectedGame].mapState == "open") || has("lantern")) {
            availability.glitchless = 'available';
        } else {
            availability.glitchless = 'unavailable';
        }
        return availability;
    }
};
