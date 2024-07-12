class BossAgahnim extends Boss {
  constructor() {
    super("Agahnim");
  }

  canBeat() {
      return hasSword() || has("hammer") || has("net");
  }
}
