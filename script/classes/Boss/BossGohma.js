class BossGohma extends Boss {
  constructor() {
    super("Gohma");
  }

  canBeat() {
	  // return canShootArrowsZ1();
	  return canSwimZ1() && canShootArrowsZ1() && (hasSword() || has("magicalrod"));
  }
}
