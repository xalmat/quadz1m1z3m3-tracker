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
			availability.casualLogic = "available";
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
		if(canEnterCrateriaWest() && canEnterAndLeaveGauntlet() && hasEnergyReserves(1) && (canFlySM() || canDashSM())) {
			availability.casualLogic = "available";
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
		if(canEnterCrateriaWest() && canEnterAndLeaveGauntlet() && hasEnergyReserves(1) && (canFlySM() || canDashSM())) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
