class BossArmosKnights extends Boss {
  constructor() {
    super("Armos Knights");
  }

  canBeat() {
    return hasSword() || has("hammer") || canShootArrows()
        || has("boomerang") || has("boomerang")
        || (canExtendMagic(4) && (has("firerod") || has("icerod")))
        || (canExtendMagic(2) && (has("byrna") || has("somaria")));
  }
}
