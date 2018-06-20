class BossLanmolas extends Boss {
  constructor() {
    super("Lanmolas");
  }

  canBeat() {
	  return hasSword() || has("hammer")
	  	|| canShootArrows() || has("firerod") || has("icerod")
	  	|| has("byrna") || has("somaria");
  }
}
