// Set up the map, using CRS.Simple for a simple coordinate reference system
var map = L.map('map', {
    minZoom: 0,
    maxZoom: 5,
    zoomSnap: 0.5,
    center: [0, 0],
    zoom: 1,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 10, 
    crs: L.CRS.Simple
});

map.attributionControl.remove(); //removes annoying leaflet link (bottom- right)

// Define the bounds of the image (in this case, a 1000x1000 image)
var imageWidth = 2100; 
var imageHeight = 1500; 
var imageBounds = [[0, 0], [imageHeight, imageWidth]];

// Add the image overlay to the map
L.imageOverlay('map.jpeg', imageBounds).addTo(map); // Replace with your image path

// Adjust map bounds to match image bounds
map.fitBounds(imageBounds);

// Makes image/map snap when reaching border but it's annoying so I'll comment it out
//map.setMaxBounds(imageBounds);

var defaultIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var waterIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var capitalIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});





// Define points of interest with names, coordinates relative to the image, and descriptions [y,x]
var pointsOfInterest = [
    { name: "Rain House", coords: [502, 675], description: " also called the Rain House, is the seat of House Wylde in the stormlands. It sits in the eastern rainwood along the southern shore of Shipbreaker Bay near the northeastern tip of Cape Wrath.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Rain_House" target="_blank">Learn More</a>' },

    { name: "Pov isles", coords: [410, 696], description: "not to be confused with Epstein island. jk <br>"  + '<a href="https://m.media-amazon.com/images/I/51TZJ22nDPL._UXNaN_FMjpg_QL85_.jpg" target="_blank">Learn More</a>',audioFile: 'Music/pov.mp3' },

    { name: "Mistwood", coords: [467, 630], description: "or Mistfall is the seat of House Mertyns in the stormlands. It is located in the southern rainwood in Cape Wrath.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Mistwood" target="_blank">Learn More</a>' },
    
    { name: "King's Landing", coords: [670, 570], description: "is the capital of the Seven Kingdoms, located in the crownlands on the east coast of Westeros. It is situated along the kingsroad at the mouth of the Blackwater Rush and overlooks Blackwater Bay. King's Landing is the site of the Iron Throne and the Red Keep, which is the seat of the king, Robert I from House Baratheon of King's Landing.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/King%27s_Landing" target="_blank">Learn More</a>', isCapital: true, audioFile: 'Music/The-Kings-Arrival.mp3'},
    
    { name: "Rosby", coords: [700, 570], description: "is the seat of House Rosby, northwest of Blackwater Bay in the crownlands. Rosby sits just northeast of King's Landing along the Rosby road, the shortest road between the capital and Duskendale. Lying around the small castle is a village with daub-and-wattle huts, a sept, apple orchards, and fields of barley.[2] Rosby's maester is Melwys<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Rosby" target="_blank">Learn More</a>' },
    
    { name: "Dragonstone", coords: [715, 653], description: "is a castle on the island of the same name at the entrance to Blackwater Bay, below the Dragonmont. It was the original seat of House Targaryen in Westeros, and had been colonized and fortified as the westernmost outpost of the Valyrian Freehold. Shaped from stone to look like dragons, the castle has a dark reputation.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Dragonstone" target="_blank">Learn More</a>,', isCapital: true, audioFile: 'Music/Dragonstone.mp3'},

    { name: "Claw Isle", coords: [760, 677], description: "is the island seat of House Celtigar in the crownlands. It lies a few hours sail north from Dragonstone. The people of Crackclaw Point refer to the island as Crab Isle.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Claw_Isle" target="_blank">Learn More</a>' },

    { name: "Claw Isle", coords: [760, 677], description: "is the island seat of House Celtigar in the crownlands. It lies a few hours sail north from Dragonstone. The people of Crackclaw Point refer to the island as Crab Isle.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Claw_Isle" target="_blank">Learn More</a>' },

    { name: "Gulltown", coords: [833, 670], description: "is the major port city of the Vale of Arryn. It is located in a fine natural harbor[1] at the northern tip of the Bay of Crabs, southeast of the Eyrie and south of nearby Runestone. It is the largest settlement in the Vale, but is much smaller than King's Landing, Lannisport, and Oldtown..<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Gulltown" target="_blank">Learn More</a>' },

    { name: "Runestone", coords: [840, 677], description: "Runestone is the seat of House Royce in the Vale of Arryn. It lies on a peninsula north of the Bay of Crabs, east of Redfort and south of Old Anchor. While Runestone is on the northern shore of the peninsula, the nearby city of Gulltown is on the southern shore .<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Runestone" target="_blank">Learn More</a>' },

    { name: "Maidenpool", coords: [743, 570], description: "is a town in the eastern riverlands situated along the southern shore of the Bay of Crabs. It is the seat of House Mooton. The castle at Maidenpool sits on a hill, and the town is walled. East of Maidenpool are hills and soldier pines.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Maidenpool" target="_blank">Learn More</a>' },
    
    { name: "Wickenden", coords: [774, 600], description: "Wickenden is the seat of House Waxley in the Vale of Arryn. The town is on the northern shore of the Bay of Crabs, northwest of Crackclaw Point. It is famous for making scented beeswax candles.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Wickenden" target="_blank">Learn More</a>' },

    { name: "Vale of Arryn", coords: [890, 635], description: "The Vale of Arryn, the Vale, or the kingdom of Mountain and Vale, is one of the constituent regions of the Seven Kingdoms of Westeros. It was formerly a sovereign nation ruled by the Kings of Mountain and Vale before Aegon's Conquest. The Mountains of the Moon surround the smaller Vale proper, although the valley's name is often applied to all of House Arryn's realm.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Vale_of_Arryn" target="_blank">Learn More</a>' },
    
    { name: "Eryie", coords: [850, 587], description: "or 'The Eyrie' is an ancient castle and seat of House Arryn, one of the oldest lines of Andal nobility, within the Vale of Arryn. It is situated in the Mountains of the Moon on a shoulder of the peak known as the Giant's Lance, several thousand feet above the valley below. Although small compared to the seats of other Great Houses in Westeros, the Eyrie is considered impregnable to attack. During wintertime, the Arryns seek refuge against the cold in the Gates of the Moon at the base of the mountain.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Eyrie" target="_blank">Learn More</a>' },

    { name: "Bloody Gate", coords: [837, 561], description: "The Bloody Gate is a series of battlements in the Vale of Arryn. It is located along the high road which leads into the Vale proper from the Mountains of the Moon. It protects against mountain clansmen and invading armies.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Bloody_Gate" target="_blank">Learn More</a>' },

    { name: "Antlers", coords: [720, 560], description: "Antlers,[1] also called the Antlers,[2] is the seat of House Buckwell in the crownlands. It is located southwest of Maidenpool, west of Rook's Rest, and northwest of Duskendale and Rosby.[3]<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Antlers" target="_blank">Learn More</a>' },

    { name: "Isle of Faces", coords: [737, 495], description: "The Isle of Faces is a sacred island in the middle of the lake called the Gods Eye, located in the southeastern riverlands. It is one of the few known locations of weirwoods in the south of Westeros, with most others having been cut down and burned.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Isle_of_Faces" target="_blank">Learn More</a>' },
    
    { name: "Gods Eye", coords: [723, 499], description: "The Gods Eye, the largest lake of the Seven Kingdoms, is located south of the Trident and west of the kingsroad in the southern riverlands.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Gods_Eye" target="_blank">Learn More</a>', isWater: true},

    { name: "Gods Eye Town", coords: [711, 494], description: "is located on the southern shore of the great lake called the Gods Eye in the southern riverlands, where a river flows south. The town's name has not been published.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Gods_Eye_Town" target="_blank">Learn More</a>' },

    { name: "Trident", coords: [798, 491], description: "The Trident is a major river in the riverlands of the Seven Kingdoms. Made of numerous smaller tributaries, it is one of the largest rivers on the continent of Westeros. It is a confluence of three main branches, the Red Fork, the Green Fork, and the Blue Fork.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Trident" target="_blank">Learn More</a>', isWater: true},

    { name: "Harrenhal", coords: [765, 495], description: "the largest castle in the Seven Kingdoms, is the seat of House Whent in the riverlands, on the north shore of the Gods Eye. Since the burning of Harrenhal by dragonfire in Aegon's Conquest, however, the castle has become a dark and ruinous place. Harrenhal's holdings are some of the richest in Westeros, claiming vast tracts of green fertile land which reach as far as the hills of House Wode near the crownlands. Harrentown is found near the castle.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Harrenhal" target="_blank">Learn More</a>' },

    { name: "Red Fork", coords: [810, 444], description: "Stone Hedge, sometimes called the Stone Hedge, is the seat of House Bracken in the riverlands.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Stone_Hedge" target="_blank">Learn More</a>' },

    { name: "Stone Hedge", coords: [788, 443], description: "Stone Hedge, sometimes called the Stone Hedge, is the seat of House Bracken in the riverlands.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Stone_Hedge" target="_blank">Learn More</a>' },

    { name: "Riverrun", coords: [782, 410], description: "is the ancestral castle of House Tully, the Lords Paramount of the Trident. It is situated in the western riverlands, at the confluence of the Tumblestone and Red Fork rivers.[2] Riverrun is north of Pinkmaiden and northwest of Acorn Hall. The castle sits along the river road, an easy ride[3] which links Lannisport and the crossroads..<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Riverrun" target="_blank">Learn More</a>' },

    { name: "Raventree Hall", coords: [810, 410], description: "Raventree Hall, often called simply Raventree,is the seat of House Blackwood in Blackwood Vale in the riverlands. The castle is located north of Riverrun, southwest of Oldstones, and west of Fairmarket. Ironman's Bay is to the northwest<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Raventree_Hall" target="_blank">Learn More</a>' },

    { name: "The Twins", coords: [910, 418], description: "sometimes known as the Crossing, is the seat of House Frey in the northern riverlands, located south of the bogs of the Neck and west of the kingsroad. A fortified crossing of the Green Fork of the Trident, the Twins consists of identical castles on each side of the river and a tower in the middle of the bridge which connects them. It is one of the most formidable strongholds of the Seven Kingdoms.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Twins" target="_blank">Learn More</a>' },

    { name: "Winterfell", coords: [1186, 443], description: "is the ancestral castle and seat of power of House Stark and is considered to be the capital of the north. It is in the center of the northernmost province of the Seven Kingdoms, on the kingsroad that runs from Storm's End to the Wall. It is situated at the eastern edge of the wolfswood, north of the western branch of the White Knife and Castle Cerwyn. Winterfell is south of the northern mountains and southwest of Long Lake, one hundred leagues (three hundred miles) southeast of Deepwood Motte.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Winterfell" target="_blank">Learn More</a>', isCapital: true, audioFile: 'Music/Winterfell.mp3' },

    { name: "Wolfswood", coords: [1227, 375], description: " The wolfswood is a large forest in the north named for the great many wolves one can hear howling in the night.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Wolfswood" target="_blank">Learn More</a>' },

    { name: "Torrhen's Square", coords: [1152, 380], description: " is a castle in the north and the seat of House Tallhart. It is south of the wolfswood, southwest of Winterfell, and north of Barrowton, on the northern shore of a large lake. A river from the lake leads south to the Saltspear.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Torrhen27%s_Square" target="_blank">Learn More</a>' },

    { name: "Castle Cerwyn", coords: [1143, 427], description: "or simply Cerwyn, is the seat of House Cerwyn in the north. It is located by the western branch of the White Knife. Because of the closeness of their castles, the Cerwyns often visit the Starks, as they are only half a day's ride from Winterfell.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Castle_Cerwyn" target="_blank">Learn More</a>' },

    { name: "Bear island", coords: [1330, 336], description: "is a remote island in the north that is home to House Mormont. It lies within the Bay of Ice, north of Deepwood Motte and south of the Frozen Shore. The Mormonts live at Mormont Keep. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Bear_Island" target="_blank">Learn More</a>' },

    { name: "Sea Dragon Point", coords: [1267, 299], description: "is a forested peninsula west of the wolfswood in the north.It juts out into Sunset Sea, near the Bay of Ice and Bear Island. The First Men of old built strongholds in Sea Dragon Point, which was more heavily populated in antiquity.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Sea_Dragon_Point" target="_blank">Learn More</a>' },

    { name: "Stony Shore", coords: [1150, 230], description: "or 'The Rills' is an area in the north ruled by House Ryswell. It is located southeast of the Stony Shore, north of Blazewater Bay, and west of the barrowlands.The area's name suggests it has numerous streams and brooks.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/stony_Shore" target="_blank">Learn More</a>' },

    { name: "Rills", coords: [1090, 280], description: "or 'The Rills' is an area in the north ruled by House Ryswell. It is located southeast of the Stony Shore, north of Blazewater Bay, and west of the barrowlands.The area's name suggests it has numerous streams and brooks.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/rills" target="_blank">Learn More</a>' },

    { name: "Flint's Finger", coords: [996, 282], description: "Flint's Finger is the seat of House Flint of Flint's Finger in the north. It is located on the southern shore of Blazewater Bay, north of the Flint Cliffs and east of Cape Kraken. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Flint%27s_Finger" target="_blank">Learn More</a>' },

    { name: "Cape Kraken", coords: [980, 243], description: "is a cape in the southwestern part of the north. Extending into the Sunset Sea, Cape Kraken lies south of Blazewater Bay and west of Flint's Finger and the Flint Cliffs. The Iron Islands are south of the cape,[1] which is named after the sea creature. Some maesters believe the blood of Cape Kraken's people is closer to that of ironborn than northmen. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Cape_Kraken" target="_blank">Learn More</a>' },

    { name: "Barrowlands", coords: [1105, 390], description: "or 'The barrowlands' is an area of extensive plains between Winterfell and Moat Cailin in the north.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/barrowlands" target="_blank">Learn More</a>' },

    { name: "Barrowtown", coords: [1072, 369], description: "Barrowton, occasionally called Barrowtown, is a prominent town in the north which contains Barrow Hall, the seat of House Dustin. It lies in the barrowlands at or near the confluence of two rivers which flow south to the Saltspear.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/barrowtown" target="_blank">Learn More</a>' },

    { name: "White Knife", coords: [1089, 489], description: "The White Knife is a major river in the north. White Harbor sits along the mouth of the White Knife where it meets the Bite .<br>"  + '<a href="https://awoiaf.westeros.org/index.php/White_Knife" target="_blank">Learn More</a>' },

    { name: "White Harbor", coords: [1069, 518], description: "White Harbor is a harbor city in the north which contains the New Castle, the seat of House Manderly. Located southeast of Winterfell, it is the largest settlement north of the Neck, but the smallest among the five major cities of Westeros. White Harbor is the north's primary trade port. Its location on the mouth of the White Knife provides opportunities for trade further north.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/White_Harbor" target="_blank">Learn More</a>' },
    
    { name: "Moat Cailin", coords: [1043, 465], description: "sometimes called the Moat, is an ancient stronghold of the First Men on the northern edge of the great swamp known as the Neck, in the south of the north. It is less than twenty miles from the headwaters of the Fever River. Moat Cailin is one of the north's most important strongholds, though much of it now stands in ruins. It commands the causeway, the safe route for armies to travel through the swamps of the Neck.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Moat_Cailin" target="_blank">Learn More</a>' },

    { name: "Oldcastle", coords: [1031, 530], description: "Oldcastle is the seat of House Locke in the north. It lies on the northern shore of the Bite, southeast of White Harbor and north of the Three Sisters.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Oldcastle" target="_blank">Learn More</a>' },

    { name: "The Neck", coords: [1019, 438], description: "is one of the southernmost regions of the north. Covered in swamp and bog, it divides the north from the rest of the Seven Kingdoms. West of the Neck is a large forest and a peninsula containing Flint's Finger, the Flint Cliffs, and Cape Kraken, while to the east is the Bite. North of the Neck are the barrowlands, while to the south are the Twins, Seagard, and the Cape of Eagles in the riverlands. The Green Fork of the Trident originates in the Neck.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/The_Neck" target="_blank">Learn More</a>' },

    { name: "Kingsroad", coords: [1019, 452], description: "The kingsroad is the main overland route in the Seven Kingdoms, extending for almost two thousand miles from Storm's End through King's Landing to the Wall. It is not as impressive as the great Valyrian roads of the past, but overall it increases mobility and speeds of travel.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Kingsroad" target="_blank">Learn More</a>' },

    { name: "Seagard", coords: [878, 418], description: "Seagard is a town in the northern riverlands, and its castle is the seat of House Mallister. Located on the western coast along Ironman's Bay, Seagard is sheltered by the Cape of Eagles and is nestled near the headwaters of the Blue Fork. It is southwest of the Twins and northwest of Oldstones.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Seagard" target="_blank">Learn More</a>' },

    { name: "Green Fork", coords: [870, 440], description: "The Green Fork is one of the three main rivers of the Trident in the riverlands, the other two being the Blue Fork and the Red Fork. The river is named after its murky green color, which comes from moss near its swampy source.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Green_Fork" target="_blank">Learn More</a>', isWater: true },

    { name: "Blue Fork", coords: [847, 434], description: "The Blue Fork is one of the three main rivers of the Trident in the riverlands, the other two being the Green Fork and the Red Fork. The Blue Fork is named for the purity of its waters. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Blue_Fork" target="_blank">Learn More</a>',  isWater: true },

    { name: "Wendish Town", coords: [840, 418], description: "is a town with a timbered holdfast in the riverlands. It is the home of the mother and son in the song 'On a Misty Morn'. It may be that Wendish Town is under the dominion of House Darry as Raymun Darry reports on its status to the Iron Throne<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Wendish_Town" target="_blank">Learn More</a>' },

    { name: "High Heart", coords: [765, 440], description: "High Heart is a very tall hill sacred to the children of the forest in the riverlands. Around its crown stands a ring of thirty-one weirwood stumps. The hill is considered a safe place due to its relative height compared to the very flat surrounding land, making it nearly impossible to be approached unseen.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/High_Heart" target="_blank">Learn More</a>' },

    { name: "Acorn Hall", coords: [756, 430], description: "Acorn Hall is the seat of House Smallwood in the riverlands. It is located southeast of Riverrun, northeast of Pinkmaiden, and north of Stoney Sept. High Heart[1] and Blackbottom Bend[2] are nearby.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Acorn_Hall" target="_blank">Learn More</a>' },

    { name: "Pinkmaiden", coords: [740, 400], description: " or Pinkmaiden Castle, is the seat of House Piper in the southwestern riverlands. The castle is located on the Red Fork south of Riverrun, southeast of Acorn Hall, northwest of Stoney Sept, and northeast of Hornvale.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Pinkmaiden" target="_blank">Learn More</a>' },

    { name: "Stoney Sept", coords: [710, 430], description: "Stoney Sept is a walled town in the southern riverlands. It is located south of Acorn Hall, southeast of Pinkmaiden, and north of the Goldroad. The headwaters of the Blackwater Rush are nearby. A knight named Wilbert is described as having some authority in Stoney Sept, but his House is not mentioned.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Stoney_Sept" target="_blank">Learn More</a>' },

    { name: "Casterly Rock", coords: [705, 290], description: "Casterly Rock, also known as the Casterly Rock or simply the Rock, is a castle and the seat of House Lannister. The capital of the westerlands, it is on the ocean road and overlooks the harbor of Lannisport and the Sunset Sea. Nearby strongholds include Kayce and Feastfires to the west, Sarsfield to the north, and Cornfield and Clegane's Keep to the south.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Casterly_Rock" target="_blank">Learn More</a>', isCapital: true, audioFile: 'Music/The-Rains-of-Castamere.mp3' },

    { name: "Lannisport", coords: [699, 272], description: "Lannisport is a walled city in the westerlands located less than a mile south of Casterly Rock, the seat of House Lannister. Lannisport is located along the coast of the Sunset Sea where the river road, the gold road, and the ocean road meet. It is one of the major ports of the Seven Kingdoms and is the largest settlement in the westerlands. Lannisport is smaller than King's Landing or Oldtown, but larger than Gulltown or White Harbor.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Lannisport" target="_blank">Learn More</a>'},

    { name: "Last Hearth", coords: [1300, 565], description: "is sometimes called The Last Hearth, is the seat of House Umber in the north. It lies close to the Gift in a forest east of the kingsroad. It is north of the Last River, northeast of Long Lake, and west of the Bay of Seals. With the exception of the castles of the Night's Watch, Last Hearth is the northernmost major castle of the Seven Kingdoms.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Last_Hearth" target="_blank">Learn More</a>' },

    { name: "Last River", coords: [1280, 578], description: " or 'The Last River' is a river found in the most northern part of the north, nearer to the Wall than to Winterfell. Much of the land on either side of the river is ruled by House Umber. The Last River's headwaters are a number of streams in the northern mountains. It flows east past the kingsroad and through the Umber forest containing Last Hearth. The river then continues southeast between the Dreadfort and Karhold to the Shivering Sea. There is ice fishing on the northern rivers.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Last_River" target="_blank">Learn More</a>' },

    { name: "Long Lake", coords: [1280, 507], description: "is a large lake in the northlocated northeast of Winterfell, east of the northern mountains, southwest of Last Hearth, and west of the Lonely Hills. The kingsroad runs along its northwestern shore on its way to the Wall. Long Lake is the source of the White Knife, which flows south into the Bite. There is ice fishing on Long Lake. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Long_Lake" target="_blank">Learn More</a>',isWater: true },

    { name: "Karhold", coords: [1275, 644], description: "is the seat of House Karstark in the north. It is located along a forested river in the eastern half of the north, south of the Bay of Seals. Further to the east are the Grey Cliffs.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/karhold" target="_blank">Learn More</a>' },

    { name: "Dreadfort", coords: [1222, 575], description: "also 'The Dreadfort' is a castle in the north and the seat of House Bolton in northeastern Westeros. Located on the northern bank of the Weeping Water, the fortress is southeast of the Lonely Hills and north of the Sheepshead Hills. The Dreadfort is north of Hornwood, south of Last Hearth, and southwest of Karhold.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Dreadfort" target="_blank">Learn More</a>' },
    { name: "Weeping Water", coords: [1200, 575], description: "is a river between the Last River, the Lonely Hills, and the Sheepshead Hills in the north. The Dreadfort, the seat of House Bolton, lies along the river, which flows southeast into the Shivering Sea.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Weeping_Water" target="_blank">Learn More</a>' },

    { name: "Hornwood", coords: [1162, 530], description: "Hornwood is a castle in the north and the seat of House Hornwood. The castle is located in the Hornwood forest near the northwestern edge of the Sheepshead Hills, which are within the dominion of House Manderly, and the Hornwood lands also neighbor those of House Bolton to the north. Medrick serves as maester at the castle to Lord Halys Hornwood. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Hornwood" target="_blank">Learn More</a>' },

    { name: "Broken Branch", coords: [1113, 593], description: "The Broken Branch is a river in the southeastern lands of the north. The headwaters of the Broken Branch lie in the Sheepshead Hills, while Ramsgate sits at its mouth, near where the Bite meets the Shivering Sea and the narrow sea.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Broken_Branch" target="_blank">Learn More</a>',  isWater: true },

    { name: "Ramsgate", coords: [1094, 581], description: "Ramsgate is a castle in the north located at the mouth of the Broken Branch, possibly along the northeastern Bite. The castle is west of Widow's Watch and east of White Harbor. According to a semi-canon source, Ramsgate owes allegiance to House Manderly.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Ramsgate" target="_blank">Learn More</a>' },

    { name: "Widow's Watch", coords: [1091, 644], description: "is the seat of House Flint of Widow's Watch in the north. It is located at the end of a peninsula between the Shivering Sea and the Bite, east of Ramsgate and the Broken Branch.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Widow%27s_Watch" target="_blank">Learn More</a>' },

    { name: "Grey Cliffs", coords: [1305, 675], description: "The Grey Cliffs are a series of cliffs in the north. They lie along the shore of the Shivering Sea, east of Karhold. The waters near the cliffs have rich fishing grounds.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Grey_Cliffs" target="_blank">Learn More</a>' },

    { name: "Skagos", coords: [1380, 650], description: "Skagos is a large island in the mouth of the Bay of Seals. In theory, the island is part of the north and subject to House Stark of Winterfell. However, the island has little contact with mainland Westeros and the Seven Kingdoms, and in practice they rule themselves. The island's name means 'stone' in the Old Tongue.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Skagos" target="_blank">Learn More</a>' },

    { name: "Skane", coords: [1428, 627], description: "is an isle in the north, located north of the island of Skagos and the Bay of Seals. It has windswept hills and stony shores.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Skane" target="_blank">Learn More</a>' },

    { name: "Castle Black", coords: [1395, 525], description: "is the main stronghold of the Night's Watch and the seat of their Lord Commander. The castle is situated along the Wall between Queensgate to the west and Oakenshield to the east, near the center of the Wall, at the northern end of the kingsroad. The village of Mole's Town is located half a league to the south along the kingsroad.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Castle_Black" target="_blank">Learn More</a>' },

    { name: "Eastwatch", coords: [1390, 565], description: "also, Eastwatch-by-the-Sea, is the easternmost castle of the Night's Watch along the Wall, located on a grey, windswept shore by the Bay of Seals. To the west lies Greenguard, an abandoned castle. Some fisherfolk live near Eastwatch.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Eastwatch-by-the-Sea" target="_blank">Learn More</a>' },

    { name: "White Tree", coords: [1410, 530], description: "is a small free folk village located northwest of Castle Black, beyond the Wall.[1] Its name comes from the giant weirwood tree that is located in its midst.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Whitetree" target="_blank">Learn More</a>' },

    { name: "Craster's Keep", coords: [1425, 520], description: "is the home of Craster, an ornery wildling beyond the Wall who is a friend to the Night's Watch. It is not an actual keep, but is only given that title by members of the Watch.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Craster%27s_Keep" target="_blank">Learn More</a>' },

    { name: "Fist of the First Men", coords: [1448, 475], description: 'is a solitary hill, located next to the Milkwater, surrounded by the haunted forest. The hill was named by the free folk for its appearance, which looks like a fist punching up through the earth. Its bare earth slopes have stone "knuckles".  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Fist_of_the_First_Men" target="_blank">Learn More</a>' },

    { name: "Lands of Always Winter", coords: [1465, 270], description: 'The Land of Always Winter, or Lands of Always Winter, is the northernmost known part of Westeros, far beyond the Wall. The Frostfangs and several large lakes separate them from the haunted forest.  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Land_of_Always_Winter" target="_blank">Learn More</a>', isCapital: true, audioFile: 'Music/winter.mp3' },

    { name: "Queenscrown", coords: [1373, 510], description: "Queenscrown is an abandoned tower holdfast with a village in the New Gift. It is located west of the kingsroad and south of the Wall. The stone holdfast tower of Queenscrown is described both as a roundtower and a towerhouse, it stands upon an rocky island in a lake, with many oak trees growing thick along the shore <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Queenscrown" target="_blank">Learn More</a>' },


    { name: "Shadow Tower", coords: [1395, 477], description: "The Shadow Tower is one of three castles along the Wall that are still inhabited by the Night's Watch. It is located next to the northern mountains at the western end of the Wall.[1] It lies west of Sentinel Stand and east of Westwatch-by-the-Bridge,[2] both abandoned castles. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Shadow_Tower" target="_blank">Learn More</a>' },

    { name: "Haunted Forest", coords: [1477, 490], description: 'The haunted forest is a vast forest beyond the Wall in northern Westeros. Located beyond the Seven Kingdoms, it is inhabited by the free folk and is bounded to the west by the Frostfangs and to the east by the Shivering Sea and the Bay of Seals. North of the haunted forest is the unmapped Land of Always Winter.  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Haunted_forest" target="_blank">Learn More</a>' },

    { name: "The Frozen Shore", coords: [1417, 306], description: 'or frozen shore, is the western shore of the lands beyond the Wall, with the Bay of Ice and Bear Island to the south. An unnamed river with tributaries flows south through the region to the Bay of Ice and the Sunset Sea.  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Frozen_Shore" target="_blank">Learn More</a>' },

    { name: "Driftmark", coords: [705, 636], description: "is an island west of Dragonstone in Blackwater Bay. The seat of House Velaryon in the crownlands, it has a long point.[1] The Gullet separates Driftmark from Massey's Hook to the south. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Driftmark" target="_blank">Learn More</a>' },

    { name: "Sharp Point", coords: [680, 647], description: "is the seat of House Bar Emmon in the crownlands. The castle is located along the Gullet at the northern end of Massey's Hook, north of Stonedance.[1] It has a large watchtower upon which a great fire burns atop. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Sharp_Point" target="_blank">Learn More</a>' },
    
    
    // Essos
    { name: "Valyria", coords: [112, 1220], description: "also called Old Valyria, is a ruined city in Essos. It is a long-dead city of wonderment, and was once the capital of a great empire called the Valyrian Freehold. It was destroyed by a cataclysmic event known as the Doom of Valyria a century before Aegon's Landing. It is the ancestral home of House Targaryen, House Celtigar, and House Velaryon. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Valyria" target="_blank">Learn More</a>', isCapital: true, audioFile: 'Music/The-Rains-of-Valyria.mp3'  },
    



];
//End of locations


var audioPlayer = document.getElementById('audioPlayer');

function playAudio(audioFile) {
    if (audioFile) {
        console.log("Attempting to play audio:", audioFile);
        audioPlayer.src = audioFile;
        audioPlayer.play().then(() => {
            console.log("Audio started playing");
        }).catch(e => {
            console.error("Error playing audio:", e);
        });
    } else {
        console.log("No audio file specified");
    }
}

function stopAudio() {
    console.log("Stopping audio");
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

pointsOfInterest.forEach(function(point) {
    var markerIcon;
    if (point.isCapital) {
        markerIcon = capitalIcon;
    } else if (point.isWater) {
        markerIcon = waterIcon;
    } else {
        markerIcon = defaultIcon;
    }
    var marker = L.marker(point.coords, {icon: markerIcon}).addTo(map);

    marker.bindPopup("<strong><center><u>" + point.name + "</u></center></strong><br>" + point.description);

    marker.on('popupopen', function() {
        console.log("Popup opened for:", point.name);
        if (point.audioFile) {
            console.log("Audio file found:", point.audioFile);
            playAudio(point.audioFile);
        } else {
            console.log("No audio file for this point");
        }
    });

    marker.on('popupclose', function() {
        console.log("Popup closed for:", point.name);
        stopAudio();
    });
});












// Search function to locate and zoom into a points of interest, zoom-out button doesn't work but i can scroll/pinch-to-zoom....hmmm
function searchLocation(input) {
    input = input.toLowerCase();
    var found = pointsOfInterest.find(poi => poi.name.toLowerCase() === input);
    if (found) {
        var customZoom = 2;
        map.setView(found.coords, customZoom);
        
        // Create and open the popup with all the text for the areas
        var popup = L.popup()
            .setLatLng(found.coords)
            .setContent(`<strong>${found.name}</strong><br>${found.description}`)
            .openOn(map);
        
        // Play audio if available
        if (found.audioFile) {
            console.log("Audio file found:", found.audioFile);
            playAudio(found.audioFile);
        } else {
            console.log("No audio file for this point");
        }

        // Set up the popupclose event to stop the audio
        popup.on('remove', function() {
            console.log("Popup closed for:", found.name);
            stopAudio();
        });
    } else {
        alert('Location not found');
    }
}




// Handle "Enter" key press
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if it's in a form, which it isn't :D
        var searchTerm = event.target.value;
        searchLocation(searchTerm);
    }
});

// Initialises autocomplete but it isn't working, idk why x(
new autoComplete({
    selector: '#search-input',
    minChars: 1,
    source: function(term, suggest) {
        term = term.toLowerCase();
        var choices = pointsOfInterest.map(poi => poi.name);
        var suggestions = choices.filter(choice => choice.toLowerCase().includes(term));
        suggest(suggestions);
    },
    onSelect: function(event, term, item) {
        searchLocation(term);
    }
});

