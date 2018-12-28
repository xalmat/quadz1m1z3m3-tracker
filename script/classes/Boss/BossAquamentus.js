class BossAquamentus extends Boss {
  constructor() {
    super("Aquamentus");
  }

  canBeat() {
	  return hasSword() || has("bomb") || has("boomerang") || canShootArrowsZ1();
  }
}
