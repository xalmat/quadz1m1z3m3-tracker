class BossArrghus extends Boss {
  constructor() {
    super("Arrghus");
  }

  canBeat() {
	  return has("hookshot") && (has("hammer") || hasSword()
	  	|| ((canExtendMagic(2) || canShootArrows()) && (has("firerod") || has("icerod"))));
  }
}
