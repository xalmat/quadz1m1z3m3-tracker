class DungeonsIcePalace extends Dungeons {
  constructor(name = "Dungeons", subname = "IcePalace", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Ice Palace - Big Key Chest","","",regionName),
			new Location("Chest","Ice Palace - Compass Chest","","",regionName),
			new Location("Chest","Ice Palace - Map Chest","","",regionName),
			new Location("SpawnableChest","Ice Palace - Spike Room","","",regionName),
			new Location("SpawnableChest","Ice Palace - Freezor Chest","","",regionName),
			new Location("Chest","Ice Palace - Iced T Room","","",regionName),
			new Location("BigChest","Ice Palace - Big Chest","","",regionName),
			new Location("Event","Ice Palace - Kholdstare","89.8%","85.8%",regionName)
		],this);
	}

	this.boss = new BossKholdstare();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let dungeon = this;

	if(this.buildLocations) {
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
	}

	this.locations["Ice Palace - Kholdstare"].glitchless = function() {
		return has("hammer") && canMeltThings() && canLiftRocks()
			&& boss.canBeat()
			&& has("bigkey") && (
					(has("somaria") && has("key"))
					|| has("key",2)
			);
	}

	this.canEnter.glitchless = function() {
		let access = (! isBunny(dungeon.subname)) && canSwim() && canMeltThings();

		if(has("state.inverted")) {
			return access;
		} else {
			return access && canLiftDarkRocks();
		}
	}
	this.canComplete.glitchless = function() {
		return dungeon.locations["Ice Palace - Kholdstare"].glitchless();
	}
  }

  initMinorGlitches() {
	  this.initNoMajorGlitches();

	  let boss = this.boss;
	  let dungeon = this;

	  this.canEnter.minorGlitches = function() {
		  let ret = this.glitchless();

		  if(ret) {
			  return ret;
		  }

		  if(has("state.inverted")) {
			  if(canMeltThings()) {
				  if(canSwim()) {
					  return true;
				  } else {
					  return "glitchavailable";
				  }
			  }
		  } else {
			  if(canLiftDarkRocks && canMeltThings()) {
				  if((! isBunny(dungeon.subname)) && canSwim()) {
					  return true;
				  } else {
					  return "glitchavailable";
				  }
			  }
		  }
	  }
	  this.canGetChest.minorGlitches = function() {
		  let mychests = trackerData.zelda3.dungeonchests[7];

		  if(dungeon.canEnter.glitchless()) {
			  if(has("hammer") && canLiftRocks()) {
				  if(canGrapple()) {
					  return true;
				  } else if(canInvul()) {
					  if(mychests >= 2) {
						  return true;
					  } else {
						  return "partial";
					  }
				  } else {
					  return "partial";
				  }
			  } else {
				  return "partial";
			  }
		  }
		  if(dungeon.canEnter.minorGlitches()) {
			  if(has("hammer") && canLiftRocks()) {
				  if(canGrapple()) {
					  return "glitchavailable";
				  } else {
					  if(mychests >= 2) {
						  return "glitchavailable";
					  } else {
						  return "glitchpartial";
					  }
				  }
			  } else {
				  return "glitchpartial";
			  }
		  }
	  }
  }

  initOverworldGlitches() {
	  this.initMinorGlitches();

	  this.canEnter.owGlitches = function() {
		  return canLiftDarkRocks() && canMeltThings();
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  this.canEnter.majorGlitches = function() {
		  let sdw = new DarkWorldSouth("","",false);

		  return (canLiftDarkRocks()
		  	|| (has("mirror") && glitchedLinkInDarkWorld()
		  		&& sdw.canEnter.majorGlitches()));
	  }
  }
}
