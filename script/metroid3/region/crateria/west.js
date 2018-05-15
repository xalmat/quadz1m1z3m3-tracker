// Crateria: West
function canEnterCrateriaWest() {
	return canDestroyBombWalls() || canDashSM();
}
chests.metroid3[0] = {
	name: "Energy Tank, Terminator",
	x: "187",
	y: "115",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaWest()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[1] = {
    name: "Energy Tank, Gauntlet " + mini("powerbomb") + mini("missile"),
    x: "277",
    y: "43",
    isOpened: false,
    isAvailable: function () {
        const availability = new Availability();
        if(canEnterCrateriaWest() && canEnterAndLeaveGauntlet()) {
        	availability.tourneyLogic = "available";
		}
        return availability;
    }
};
chests.metroid3[2] = {
	name: "Missile (Crateria Gauntlet) (2 items)" + mini("powerbomb") + mini("missile"),
	x: "169",
	y: "61",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaWest() && canEnterAndLeaveGauntlet() && canPassBombPassages()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

// Crateria: Central
chests.metroid3[3] = {
	name: "Power Bomb (Crateria surface) " + mini("powerbomb"),
	x: "565",
	y: "25",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canOpenYellowDoors() && (canDashSM() || canFlySM())) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[4] = {
	name: "Missile (Crateria middle)",
	x: "259",
	y: "133",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canPassBombPassages()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[5] = {
	name: "Missile (Crateria bottom)",
	x: "331",
	y: "331",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canDestroyBombWalls()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[6] = {
	name: "Super Missile (Crateria)",
	x: "403",
	y: "169",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canDestroyBombWalls()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[7] = {
	name: "Bombs",
	x: "421",
	y: "115",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canMorph() && canOpenRedDoors()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

