// Lower Norfair: East
function canEnterLowerNorfairEast() {
	let ret = canEnterLowerNorfairWest();
	if(trackerOptions.mapLogic == "tourneyLogic") {
		ret = ret
		&& (canDestroyBombWalls() || canDashSM())
		&& (canFlySM() || canHiJump() || (has("ice") && has("charge")))
			&& canPassBombPassages()
			&& (
				(heatProof() && (canHiJump() || canSwimSM())
			)
			|| (heatProof()
				&& (canIbj()
					|| (has("space") && (has("screw") || canPassBombPassages() || canUsePowerBombs()))
					|| (has("springball") && canUsePowerBombs())
					|| canDashSM()
				)
			)
		);
	}
	if(trackerOptions.mapLogic == "casualLogic") {
		ret = ret
		&& canUsePowerBombs()
		&& canFlySM()
		&& heatProof();
	}
	return ret;
}
chests.metroid3[89] = {
	name: "Missile (Mickey Mouse room)",
	x: "979",
	y: "871",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterLowerNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[90] = {
	name: "Missile (lower Norfair above fire flea room)",
	x: "1105",
	y: "781",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterLowerNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[91] = {
	name: "Power Bomb (lower Norfair above fire flea room)",
	x: "1141",
	y: "799",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterLowerNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[92] = {
	name: "Power Bomb (Power Bombs of shame)",
	x: "1051",
	y: "943",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterLowerNorfairEast() && canUsePowerBombs()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[93] = {
	name: "Missile (lower Norfair near Wave Beam)",
	x: "997",
	y: "781",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterLowerNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[94] = {
	name: "Energy Tank, Ridley",
	x: "871",
	y: "997",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterLowerNorfairEast() && canUsePowerBombs() && canOpenGreenDoors() && has("charge")) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[95] = {
	name: "Energy Tank, Firefleas",
	x: "1141",
	y: "889",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterLowerNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};

