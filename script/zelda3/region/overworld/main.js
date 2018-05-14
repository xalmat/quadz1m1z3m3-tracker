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