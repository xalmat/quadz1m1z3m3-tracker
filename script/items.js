var defaultItemGrid = {};
var dungeonchestsInit = {};
var dungeonbeatenInit = {};
var prizesInit = {};
var medallionsInit = {};
var itemsMin = {};
var itemsMax = {};

var gameItems = {};
gameItems.zelda3 = [
    "bow",
    "boomerang",
    "hookshot",
    "hammer",
    "firerod",
    "glove",
    "moonpearl",
    "sword",
    "tunic",
    "shield",
    "bombos",
    "ether",
    "quake",
    "somaria",
    "lantern",
    "flute",
    "book",
    "boots",
    "flippers",
    "mirror",
    "shovel",
    "mushroom",
    "powder",
    "bottle",
    "cape",
    "icerod",
    "byrna",
    "net",
    "silvers",
    "woods",
    "mpupgrade",
    "bomb",
    "heartcontainer",
    "heartpiece",
    "agahnim",

    "boss0",
    "boss1",
    "boss2",
    "boss3",
    "boss4",
    "boss5",
    "boss6",
    "boss7",
    "boss8",
    "boss9",

    "medallion0",
    "medallion1",
    "medallion2",
    "medallion3",
    "dungeon0",
    "dungeon1",
    "dungeon2",
    "dungeon3"
];
gameItems.zelda1 = [
    "boomerang",        // Z3
    "bomb",                // Z3
    "bow",                // Z3
    "woods",            // Z3
    "silvers",            // Z3
    "candle",
    "recorder",
    "food",
    "bottle",            // Z3
    "magicrod",
    "magicalrod",
    "sword",            // Z3
    "shield",            // Z3
    "heartcontainer",    // Z3
    "raft",
    "book",                // Z3
    "ring",
    "ladder",
    "magicalkey",
    "bracelet",
    "letter",
    "boss0",            // Z3
    "boss1",            // Z3
    "boss2",            // Z3
    "boss3",            // Z3
    "boss4",            // Z3
    "boss5",            // Z3
    "boss6",            // Z3
    "boss7"                // Z3
];
gameItems.metroid3 = [
    "charge",
    "ice",
    "wave",
    "spazer",
    "plasma",
    "varia",
    "gravity",
    "morph",
    "bombs",
    "springball",
    "screw",
    "hijump",
    "space",
    "speed",
    "missile",
    "supermissile",
    "powerbomb",
    "grappling",
    "xray",
    "kraid",
    "phantoon",
    "draygon",
    "ridley",
    "etank",
    "rtank",

    "boss0",
    "boss1",
    "boss2",
    "boss3",
    "boss4",
    "boss5",
    "boss6",
    "boss7",
    "boss8",
    "boss9"
];
gameItems.metroid1 = [
    "morph",        // M3
    "bombs",        // M3
    "long",
    "ice",            // M3
    "wave",            // M3
    "missile",        // M3
    "varia",        // M3
    "hijump",        // M3
    "screw",        // M3
    "kraid",        // M3
    "ridley",        // M3
    "kraidtotem",
    "ridleytotem"
];

var itemsInit = {
    blank: false,

    tunic: 1,
    sword: 0,
    shield: 0,
    bow: false,
    boomerang: 0,
    bomb: 0,
    hookshot: false,
    powder: false,
    mushroom: false,
    firerod: false,
    icerod: false,
    bombos: false,
    ether: false,
    quake: false,
    lantern: false,
    hammer: false,
    flute: 0,
    shovel: false,
    net: false,
    book: false,
    bottle:0,
    somaria: false,
    byrna: false,
    cape: false,
    mirror: false,

    boots: false,
    glove: 0,
    flippers: false,
    moonpearl: false,
    mpupgrade: 0,
    silvers: false,
    woods: false,

    heartcontainer: 0,
    heartpiece: 0,

    agahnim: 0,

    bracelet: false,
    candle: 0,
    food: false,
    ladder: false,
    letter: false,
    magicalkey: false,
    magicalrod: false,
    raft: false,
    recorder: false,
    ring: 0,
    triforcepiece1: false,
    triforcepiece2: false,
    triforcepiece3: false,
    triforcepiece4: false,
    triforcepiece5: false,
    triforcepiece6: false,
    triforcepiece7: false,
    triforcepiece8: false,

    charge: false,
    ice: false,
    wave: false,
    spazer: false,
    plasma: false,
    varia: false,
    gravity: false,
    morph: false,
    bombs: false,
    springball: false,
    screw: false,
    hijump: false,
    space: false,
    speed: false,
    missile: 0,
    supermissile: 0,
    powerbomb: 0,
    grappling: false,
    xray: false,
    kraid: false,
    phantoon: false,
    draygon: false,
    ridley: false,
    etank: 0,
    rtank: 0,

    long: false,
    kraidtotem: false,
    ridleytotem: false
};
