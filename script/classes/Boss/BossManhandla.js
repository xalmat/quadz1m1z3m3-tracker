class BossManhandla extends Boss {
  constructor() {
    super("Manhandla");
  }

  canBeat() {
	  return hasSword() || has("bomb");
  }
}
