// Wrecked Ship
function canEnterWreckedShip() {
	var ret = canOpenYellowDoors() && canOpenGreenDoors();
	if(trackerOptions[selectedGame].mapLogic == "casualLogic") {
		ret = ret && (canDashSM() || canGrappleSM() || has("space") || has("springball"));
	}
	return ret;
}
chests.metroid3[41] = {
	name: "Missile (Wrecked Ship middle)",
	x: "799",
	y: "115",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterWreckedShip()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[42] = {
	name: "Reserve Tank, Wrecked Ship " + mini("speed"),
	x: "835",
	y: "25",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterWreckedShip() && canDashSM() && (heatProof() || hasEnergyReserves(3))) {
			availability.tourneyLogic = "available";
		}
		if(canEnterWreckedShip() && canDashSM() && (canGrappleSM() || (heatProof() && hasEnergyReserves(2)) || hasEnergyReserves(3))) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[43] = {
	name: "Missile (Gravity Suit)",
	x: "817",
	y: "61",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterWreckedShip() && (heatProof() || hasEnergyReserves(2))) {
			availability.tourneyLogic = "available";
		}
		if(canEnterWreckedShip() && (canGrappleSM() || (heatProof() && hasEnergyReserves(2)) || hasEnergyReserves(3))) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[44] = {
	name: "Missile (Wrecked Ship top)",
	x: "961",
	y: "7",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterWreckedShip()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[45] = {
	name: "Energy Tank, Wrecked Ship",
	x: "907",
	y: "61",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterWreckedShip()
			&& (
				canOpenYellowDoors()
				|| canFlySM()
				|| trackerData.items.hijump
				|| canDashSM()
				|| trackerData.items.springball
				|| canSwimSM()
			)
		) {
			availability.tourneyLogic = "available";
		}
		if(
			canEnterWreckedShip()
			&& (
				canHiJump()
				|| has("space")
				|| canDashSM()
				|| canSwimSM()
			)
		) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[46] = {
	name: "Super Missile (Wrecked Ship left)",
	x: "853",
	y: "133",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterWreckedShip()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[47] = {
	name: "Super Missile (Wrecked Ship right)",
	x: "961",
	y: "133",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterWreckedShip()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[48] = {
	name: "Gravity Suit",
	x: "763",
	y: "61",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterWreckedShip() && (heatProof() || hasEnergyReserves(2))) {
			availability.tourneyLogic = "available";
		}
		if(canEnterWreckedShip() && (canGrappleSM() || (heatProof() && hasEnergyReserves(2)) || hasEnergyReserves(3))) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};

