// Lower Norfair: West
function canEnterLowerNorfairWest() {
	return (canEnterNorfairEast() && canUsePowerBombs() && (heatProof() && (trackerData.items.hijump || canSwimSM())))
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
			&& trackerData.items.space
			&& (
				(heatProof() && (trackerData.items.hijump || canSwimSM()))
				|| (heatProof()
					&& (canIbj()
						|| (trackerData.items.space && (trackerData.items.screw || canPassBombPassages() || canUsePowerBombs()))
						|| (trackerData.items.springball && canUsePowerBombs())
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
				|| (trackerData.items.space && (trackerData.items.screw || canPassBombPassages() || canUsePowerBombs()))
				|| (trackerData.items.springball && canUsePowerBombs())
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
					|| (trackerData.items.space && (trackerData.items.screw || canPassBombPassages() || canUsePowerBombs()))
					|| (trackerData.items.springball && canUsePowerBombs())
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

