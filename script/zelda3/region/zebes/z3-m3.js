// ALttP -> SM Portals
chests.zelda3[65] = {
    name: "SM Portal: Crateria Map Room",        // Link's Fortune Teller -> Crateria Map Room
    x: "32.5%",
    y: "79.6%",
    isAvailable: function () {
        const availability = new Availability();
        if(canAccessLightWorldPortal() || canAccessCrateriaPortal()) {
            availability.glitchless    = "portal portal-metroid3 active";
        } else {
            availability.glitchless    = "portal portal-metroid3 inactive";
        }
        return availability;
    },
};
chests.zelda3[66] = {
    name: "SM Portal: Norfair Map Room",            // Death Mountain Cave -> Norfair Map Room
    x: "26.7%",
    y: "15.6%",
    isAvailable: function () {
        const availability = new Availability();
        if(canAccessDeathMountainPortal() || canAccessNorfairPortal()) {
            availability.glitchless    = "portal portal-metroid3 active";
        } else {
            availability.glitchless    = "portal portal-metroid3 inactive";
        }
        return availability;
    }
};
chests.zelda3[67] = {
    name: "SM Portal: Lower Norfair Golden Torizo Energy Refill",    // Misery Mire -> Lower Norfair Golden Torizo Energy Refill
    x: "59.8%",
    y: "82.1%",
    isAvailable: function () {
        const availability = new Availability();
        if(canAccessMiseryMirePortal() || canAccessLowerNorfairPortal()) {
            availability.glitchless    = "portal portal-metroid3 active";
        } else {
            availability.glitchless    = "portal portal-metroid3 inactive";
        }
        return availability;
    }
};
chests.zelda3[68] = {
    name: "SM Portal: Maridia Missile Refill",    // Dark World Ice Cave Right -> Maridia Missile Refill
    x: "95.6%",
    y: "76.7%",
    isAvailable: function () {
        const availability = new Availability();
        if(canAccessDarkWorldPortal() || canAccessMaridiaPortal()) {
            availability.glitchless    = "portal portal-metroid3 active";
        } else {
            availability.glitchless    = "portal portal-metroid3 inactive";
        }
        return availability;
    }
};
chests.zelda3[69] = {
    name: "Z1 Portal: NW of Start",
    x: "9.3%",
    y: "31.36%",
    isAvailable: function() {
        const availability = new Availability();
        if(canAccessLightWorldPortal() || canAccessZ1Portal()) {
            availability.glitchless = "portal portal-zelda1 active";
        } else {
            availability.glitchless = "portal portal-zelda1 inactive";
        }
        return availability;
    }
};
chests.zelda3[70] = {
    name: "M1 Portal: E of Start",
    x: "16.6%",
    y: "5.2%",
    isAvailable: function() {
        const availability = new Availability();
        if(canAccessLightWorldPortal() || canAccessZ1Portal()) {
            availability.glitchless = "portal portal-metroid1 active";
        } else {
            availability.glitchless = "portal portal-metroid1 inactive";
        }
        return availability;
    }
};
