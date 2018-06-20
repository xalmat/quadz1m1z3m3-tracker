class DungeonsIcePalace extends Dungeons {
  constructor(name = "Dungeons", subname = "IcePalace") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Ice Palace - Big Key Chest","","",regionName),
		new Location("Chest","Ice Palace - Compass Chest","","",regionName),
		new Location("Chest","Ice Palace - Map Chest","","",regionName),
		new Location("SpawnableChest","Ice Palace - Spike Room","","",regionName),
		new Location("SpawnableChest","Ice Palace - Freezor Chest","","",regionName),
		new Location("Chest","Ice Palace - Iced T Room","","",regionName),
		new Location("BigChest","Ice Palace - Big Chest","","",regionName),
		new Location("Boss","Kholdstare","","",regionName)
	],this);

	this.boss = new BossKholdstare();
  }

  initNoMajorGlitches() {
	this.locations["Ice Palace - Big Key Chest"].glitchless =
	this.locations["Ice Palace - Map Chest"].glitchless =
	this.locations["Ice Palace - Spike Room"].glitchless = function() {
		return has("hammer") && canLiftRocks()
			&& (! has("variation.ohko")										// FIXME: OHKO
				|| canInvul() || has("hookshot"))
			&& (has("hookshot")
				|| has("bigkey") ? has("hookshot") : has("key"));
	}
	this.locations["Ice Palace - Freezor Chest"].glitchless = function() {
		return canMeltThings();
	}
	this.locations["Ice Palace - Big Chest"].glitchless = function() {
		return has("bigkey");
	}
	this.locations["Kholdstare"].glitchless = function() {
		return has("hammer") && canMeltThings() && canLiftRocks()
			&& this.boss.canBeat()
			&& has("bigkey") && (
					(has("somaria") && has("key"))
					|| has("key",2)
			);
	}

	this.canEnter.glitchless = function() {
		return has("moonpearl") && canSwim()
			&& canLiftDarkRocks() && canMeltThings();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Kholdstare"].glitchless();
	}
  }

  initOverworldGlitches() {
	  this.initNoMajorGlitches();

	  this.canEnter.owglitches = function() {
		  return canLiftDarkRocks() && canMeltThings();
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  this.canEnter.majorglitches = function() {
		  let sdw = new DarkWorldSouth();

		  return (canLiftDarkRocks()
		  	|| (has("mirror") && glitchedLinkInDarkWorld()
		  		&& sdw.canEnter.majorglitches()));
	  }
  }
}
