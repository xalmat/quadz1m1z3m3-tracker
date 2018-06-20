class BossMoldorm extends Boss {
  constructor() {
    super("Moldorm");
  }

  canBeat() {
	  return hasSword() || has("hammer");
  }
}
