var firstName = [
    "Alden", "Elysia", "Darius", "Lyra", "Finnian", "Elara", "Caelum", "Seraphina", "Thorin", "Luna",
    "Aurelia", "Rhydian", "Isolde", "Ezra", "Lysander", "Ariadne", "Cassius", "Sylvana", "Draven", "Thalia",
    "Lorcan", "Rhiannon", "Davian", "Serenity", "Lucian", "Aria", "Aldric", "Elowen", "Cyrus", "Lyanna",
    "Caelia", "Eldric", "Artemis", "Raine", "Thorn", "Selene", "Finley", "Eira", "Cassian", "Rowan",
    "Luna", "Aurora", "Rylan", "Isadora", "Kieran", "Lorelei", "Dorian", "Sylvanus", "Thalia", "Evangeline",
    "Draco", "Lyra", "Alistair", "Elena", "Cyril", "Elara", "Dante", "Seraphina", "Thorn", "Leona",
    "Finnian", "Aria", "Cassius", "Sylvana", "Ryder", "Lyra", "Aldric", "Elowen", "Caelum", "Selene",
    "Draven", "Elysia", "Darius", "Ariadne", "Luna", "Ezra", "Isolde", "Lorcan", "Aurelia", "Rhydian",
    "Thalia", "Raine", "Lysander", "Cassian", "Rowan", "Artemis", "Serenity", "Lucian", "Elara", "Cyrus",
    "Lyanna", "Alden", "Eira", "Kieran", "Elowen", "Dorian", "Rylan", "Aurora", "Elena", "Thorn",
    "Sylvanus", "Evangeline", "Draco", "Selene", "Leona", "Finnian", "Aria", "Cassius", "Sylvana", "Ryder",
    "Lyra", "Alistair", "Elara", "Dante", "Seraphina", "Thorn", "Isadora", "Kieran"
  ];
var lastName = [
    "Thornblade", "Shadowcaster", "Stormbringer", "Moonwhisper", "Frostbane", "Swiftwind", "Fireheart", "Starfall", "Silverleaf", "Nightshade",
    "Dawnseeker", "Darkmoon", "Ironheart", "Blackwood", "Frostbeard", "Mistwalker", "Bloodmoon", "Sunstrike", "Shadowclaw", "Emberstorm",
    "Stormchaser", "Emberheart", "Windwalker", "Starlight", "Shadowblade", "Evergreen", "Shadowthorn", "Firebloom", "Darkfire", "Frostfall",
    "Sunshard", "Nightingale", "Moonshadow", "Ironwood", "Stormrage", "Nightingale", "Frostborn", "Emberglow", "Shadowflame", "Brightblade",
    "Silvermoon", "Dawnbringer", "Shadowforge", "Sunflower", "Emberstorm", "Stormcaller", "Nightstalker", "Frostwood", "Sunseeker", "Silverwind",
    "Darkthorn", "Moonshadow", "Firestorm", "Frostbloom", "Sunbeam", "Shadowdancer", "Nightshade", "Emberheart", "Ironfist", "Sunstrike",
    "Shadowblade", "Stormsong", "Emberbane", "Frostwhisper", "Shadowheart", "Moonlight", "Frostgale", "Sunflower", "Shadowcaster", "Frostfall",
    "Nightstorm", "Dawnblade", "Stormcaller", "Nightingale", "Shadowfire", "Frostbloom", "Sunshard", "Shadowthorn", "Fireheart", "Frostbeard",
    "Shadowclaw", "Moonwhisper", "Darkmoon", "Sunstrike", "Emberstorm", "Moonshadow", "Frostbane", "Shadowblade", "Moonbeam", "Darkfire",
    "Stormchaser", "Emberheart", "Frostgale", "Shadowdancer", "Stormblade", "Nightingale", "Sunburst", "Frostforge", "Shadowflame", "Moonflower",
    "Firestorm", "Nightingale", "Frostbloom", "Sunbeam", "Shadowcaster", "Frostfall", "Darkfire", "Stormcaller", "Emberblade", "Nightwhisper",
    "Sunstrike", "Shadowheart", "Frostwood", "Sunseeker", "Darkthorn", "Stormheart", "Frostbloom", "Sunshard", "Shadowthorn"
  ];
function generateName() {
  var randomFirstNameIndex = Math.floor(Math.random() * firstName.length);
  var randomLastNameIndex = Math.floor(Math.random() * lastName.length);
  var randomFirstName = firstName[randomFirstNameIndex];
  var randomLastName = lastName[randomLastNameIndex];
    document.getElementById("randomName").innerText = randomFirstName + " " + randomLastName;
}