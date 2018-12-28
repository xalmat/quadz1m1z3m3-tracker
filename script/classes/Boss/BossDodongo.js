class BossDodongo extends Boss {
  constructor() {
    super("Dodongo");
  }

  canBeat() {
	  return hasSword() && has("bomb");
  }
}
