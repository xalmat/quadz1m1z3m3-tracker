// Brinstar: Red
function canEnterBrinstarRed() {
	return ((canDestroyBombWalls() || canDashSM())
		&& (canOpenGreenDoors() && canMorph()))
		|| (canAccessNorfairPortal() && (has("ice") || canHiJump() || canFlySM()));
}
chests.metroid3[36] = {
	name: "X-Ray Scope " + mini("powerbomb") + mini("missile"),
	x: "331",
	y: "619",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterBrinstarRed()
			&& canOpenYellowDoors()
			&& canOpenRedDoors()
			&& (canGrappleSM()
				|| has("space")
				|| (heatProof() && hasEnergyReserves(3) && canIbj())
				|| (hasEnergyReserves(6) && canIbj()
				)
			)
		) {
			availability.tourneyLogic = "available";
		}
		if(
			canEnterBrinstarRed()
			&& canOpenYellowDoors()
			&& canOpenRedDoors()
			&& (canGrappleSM() || has("space"))
		) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[37] = {
	name: "Power Bomb (red Brinstar sidehopper room) " + mini("powerbomb") + mini("supermissile"),
	x: "547",
	y: "493",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarRed() && canOpenYellowDoors() && canOpenGreenDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[38] = {
	name: "Power Bomb (red Brinstar spike room) " + mini("supermissile"),
	x: "547",
	y: "547",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarRed() && canOpenGreenDoors()) {
			availability.tourneyLogic = "available";
		}
		if(canEnterBrinstarRed() && (canOpenYellowDoors() || has("ice")) && canOpenGreenDoors()) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[39] = {
	name: "Missile (red Brinstar spike room) " + mini("powerbomb") + mini("supermissile"),
	x: "529",
	y: "547",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarRed() && canOpenYellowDoors() && canOpenGreenDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[40] = {
	name: "Spazer " + mini("supermissile"),
	x: "601",
	y: "655",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarRed() && canPassBombPassages() && canOpenGreenDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};

