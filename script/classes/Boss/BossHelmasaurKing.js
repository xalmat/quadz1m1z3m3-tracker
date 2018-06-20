class BossHelmasaurKing extends Boss {
  constructor() {
    super("Helmasaur King");
  }

  canBeat() {
  	return hasSword() || has("hammer") || canShootArrows();
  }
}
