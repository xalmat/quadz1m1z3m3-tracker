class BossVitreous extends Boss {
  constructor() {
    super("Vitreous");
  }

  canBeat() {
      return has("hammer") || hasSword() || canShootArrows();
  }
}
