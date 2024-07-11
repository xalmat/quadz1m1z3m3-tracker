class BossBlind extends Boss {
  constructor() {
    super("Blind");
  }

  canBeat() {
      return hasSword() || has("hammer")
          || has("somaria") || has("byrna");
  }
}
