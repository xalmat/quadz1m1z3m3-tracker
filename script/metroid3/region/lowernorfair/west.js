// Lower Norfair: West
function canEnterLowerNorfairWest() {
	return (canEnterNorfairEast() && canUsePowerBombs() && (heatProof() && (has("hijump") || canSwimSM())))
	|| (canAccessLowerNorfairPortal() && canHellRun() && canDestroyBombWalls());
}
chests.metroid3[86] = {
	name: "Missile (Gold Torizo)",
	x: "799",
	y: "961",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterLowerNorfairWest()
			&& canUsePowerBombs()
			&& has("space")
			&& (
				(heatProof() && (has("hijump") || canSwimSM()))
				|| (heatProof()
					&& (canIbj()
						|| (has("space") && (has("screw") || canPassBombPassages() || canUsePowerBombs()))
						|| (has("springball") && canUsePowerBombs())
						|| canDashSM()
						)
					)
				)
		) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[87] = {
	name: "Super Missile (Gold Torizo)",
	x: "817",
	y: "961",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterLowerNorfairWest()
			&& canDestroyBombWalls()
			&& heatProof()
			&& (canIbj()
				|| (has("space") && (has("screw") || canPassBombPassages() || canUsePowerBombs()))
				|| (has("springball") && canUsePowerBombs())
				|| canDashSM()
			)
		) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[88] = {
	name: "Screw Attack",
	x: "835",
	y: "979",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterLowerNorfairWest()
			&& (
					(canIbj()
					|| (has("space") && (has("screw") || canPassBombPassages() || canUsePowerBombs()))
					|| (has("springball") && canUsePowerBombs())
					|| canDashSM()
				)
				|| canAccessLowerNorfairPortal()
			)
		) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

