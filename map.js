// Set up the map, using CRS.Simple for a simple coordinate reference system
var map = L.map('map', {
    minZoom: 0,
    maxZoom: 5,
    zoomSnap: 1.0,
    center: [0, 0],
    zoom: 1,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 10,
    crs: L.CRS.Simple
});

map.attributionControl.remove(); //removes annoying leaflet link (bottom- right)

// Define the bounds of the image (in this case, a 1000x1000 image)
var imageWidth = 2100; // Replace with your image width
var imageHeight = 1500; // Replace with your image height
var imageBounds = [[0, 0], [imageHeight, imageWidth]];

// Add the image overlay to the map
L.imageOverlay('map.jpeg', imageBounds).addTo(map); // Replace with your image path

// Adjust map bounds to match image bounds
map.fitBounds(imageBounds);

// Makes image/map snap when reaching border
//map.setMaxBounds(imageBounds);

var defaultIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
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
    { name: "Rain House", coords: [502, 675], description: " also called the Rain House, is the seat of House Wylde in the stormlands. It sits in the eastern rainwood along the southern shore of Shipbreaker Bay near the northeastern tip of Cape Wrath.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Rain_House" target="_blank">Learn More</a>'},
    
    { name: "Mistwood", coords: [467, 630], description: "or Mistfall is the seat of House Mertyns in the stormlands. It is located in the southern rainwood in Cape Wrath.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Mistwood" target="_blank">Learn More</a>' },
    
    { name: "King's Landing", coords: [670, 570], description: "is the capital of the Seven Kingdoms, located in the crownlands on the east coast of Westeros. It is situated along the kingsroad at the mouth of the Blackwater Rush and overlooks Blackwater Bay. King's Landing is the site of the Iron Throne and the Red Keep, which is the seat of the king, Robert I from House Baratheon of King's Landing.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/King%27s_Landing" target="_blank">Learn More</a>', isCapital: true },
    
    { name: "Rosby", coords: [700, 570], description: "is the seat of House Rosby, northwest of Blackwater Bay in the crownlands. Rosby sits just northeast of King's Landing along the Rosby road, the shortest road between the capital and Duskendale. Lying around the small castle is a village with daub-and-wattle huts, a sept, apple orchards, and fields of barley.[2] Rosby's maester is Melwys<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Rosby" target="_blank">Learn More</a>' },
    
    { name: "Dragonstone", coords: [715, 653], description: "is a castle on the island of the same name at the entrance to Blackwater Bay, below the Dragonmont. It was the original seat of House Targaryen in Westeros, and had been colonized and fortified as the westernmost outpost of the Valyrian Freehold. Shaped from stone to look like dragons, the castle has a dark reputation.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Dragonstone" target="_blank">Learn More</a>' },

    { name: "Claw Isle", coords: [760, 677], description: "is the island seat of House Celtigar in the crownlands. It lies a few hours sail north from Dragonstone. The people of Crackclaw Point refer to the island as Crab Isle.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Claw_Isle" target="_blank">Learn More</a>' },

    { name: "Gulltown", coords: [833, 670], description: "is the major port city of the Vale of Arryn. It is located in a fine natural harbor[1] at the northern tip of the Bay of Crabs, southeast of the Eyrie and south of nearby Runestone. It is the largest settlement in the Vale, but is much smaller than King's Landing, Lannisport, and Oldtown..<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Gulltown" target="_blank">Learn More</a>' },

    { name: "Runestone", coords: [840, 677], description: "Runestone is the seat of House Royce in the Vale of Arryn. It lies on a peninsula north of the Bay of Crabs, east of Redfort and south of Old Anchor. While Runestone is on the northern shore of the peninsula, the nearby city of Gulltown is on the southern shore .<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Runestone" target="_blank">Learn More</a>' },

    { name: "Maidenpool", coords: [743, 570], description: "is a town in the eastern riverlands situated along the southern shore of the Bay of Crabs. It is the seat of House Mooton. The castle at Maidenpool sits on a hill, and the town is walled. East of Maidenpool are hills and soldier pines.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Maidenpool" target="_blank">Learn More</a>' },
    
    { name: "Wickenden", coords: [774, 600], description: "Wickenden is the seat of House Waxley in the Vale of Arryn. The town[1] is on the northern shore of the Bay of Crabs, northwest of Crackclaw Point.[2] It is famous for making scented beeswax candles.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Wickenden" target="_blank">Learn More</a>' },
    
    { name: "Antlers", coords: [720, 560], description: "Antlers,[1] also called the Antlers,[2] is the seat of House Buckwell in the crownlands. It is located southwest of Maidenpool, west of Rook's Rest, and northwest of Duskendale and Rosby.[3]<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Antlers" target="_blank">Learn More</a>' },

    { name: "Isle of Faces", coords: [737, 495], description: "The Isle of Faces is a sacred island in the middle of the lake called the Gods Eye, located in the southeastern riverlands. It is one of the few known locations of weirwoods in the south of Westeros, with most others having been cut down and burned.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Isle_of_Faces" target="_blank">Learn More</a>' },
    
    { name: "Harrenhal", coords: [765, 495], description: "the largest castle in the Seven Kingdoms, is the seat of House Whent in the riverlands, on the north shore of the Gods Eye. Since the burning of Harrenhal by dragonfire in Aegon's Conquest, however, the castle has become a dark and ruinous place. Harrenhal's holdings are some of the richest in Westeros, claiming vast tracts of green fertile land which reach as far as the hills of House Wode near the crownlands. Harrentown is found near the castle.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Harrenhal" target="_blank">Learn More</a>' },

    { name: "Stone Hedge", coords: [786, 440], description: "Stone Hedge, sometimes called the Stone Hedge, is the seat of House Bracken in the riverlands.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Stone_Hedge" target="_blank">Learn More</a>' },

    { name: "Riverrun", coords: [782, 410], description: "is the ancestral castle of House Tully, the Lords Paramount of the Trident. It is situated in the western riverlands, at the confluence of the Tumblestone and Red Fork rivers.[2] Riverrun is north of Pinkmaiden and northwest of Acorn Hall. The castle sits along the river road, an easy ride[3] which links Lannisport and the crossroads..<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Riverrun" target="_blank">Learn More</a>' },

    { name: "Raventree Hall", coords: [810, 410], description: "Raventree Hall, often called simply Raventree,is the seat of House Blackwood in Blackwood Vale in the riverlands. The castle is located north of Riverrun, southwest of Oldstones, and west of Fairmarket. Ironman's Bay is to the northwest<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Raventree_Hall" target="_blank">Learn More</a>' },

    { name: "The Twins", coords: [910, 418], description: "The Twins, sometimes known as the Crossing, is the seat of House Frey in the northern riverlands, located south of the bogs of the Neck and west of the kingsroad.[1] A fortified crossing of the Green Fork of the Trident, the Twins consists of identical castles on each side of the river and a tower in the middle of the bridge which connects them.[2] It is one of the most formidable strongholds of the Seven Kingdoms.[<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Twins" target="_blank">Learn More</a>' },

    { name: "Seagard", coords: [878, 418], description: "Seagard is a town in the northern riverlands, and its castle is the seat of House Mallister. Located on the western coast along Ironman's Bay, Seagard is sheltered by the Cape of Eagles and is nestled near the headwaters of the Blue Fork. It is southwest of the Twins and northwest of Oldstones.[<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Seagard" target="_blank">Learn More</a>' },

    { name: "Wendish Town", coords: [840, 418], description: "is a town with a timbered holdfast in the riverlands. It is the home of the mother and son in the song 'On a Misty Morn'. It may be that Wendish Town is under the dominion of House Darry as Raymun Darry reports on its status to the Iron Throne<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Wendish_Town" target="_blank">Learn More</a>' },

    { name: "High Heart", coords: [765, 440], description: "High Heart is a very tall hill sacred to the children of the forest in the riverlands. Around its crown stands a ring of thirty-one weirwood stumps. The hill is considered a safe place due to its relative height compared to the very flat surrounding land, making it nearly impossible to be approached unseen.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/High_Heart" target="_blank">Learn More</a>' },

    { name: "Acorn Hall", coords: [756, 430], description: "Acorn Hall is the seat of House Smallwood in the riverlands. It is located southeast of Riverrun, northeast of Pinkmaiden, and north of Stoney Sept. High Heart[1] and Blackbottom Bend[2] are nearby.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Acorn_Hall" target="_blank">Learn More</a>' },

    { name: "Pinkmaiden", coords: [740, 400], description: " or Pinkmaiden Castle, is the seat of House Piper in the southwestern riverlands. The castle is located on the Red Fork south of Riverrun, southeast of Acorn Hall, northwest of Stoney Sept, and northeast of Hornvale.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Pinkmaiden" target="_blank">Learn More</a>' },

    { name: "Stoney Sept", coords: [710, 430], description: "Stoney Sept is a walled town in the southern riverlands. It is located south of Acorn Hall, southeast of Pinkmaiden, and north of the Goldroad. The headwaters of the Blackwater Rush are nearby. A knight named Wilbert is described as having some authority in Stoney Sept, but his House is not mentioned.<br>"  + '<a href="https://awoiaf.westeros.org/index.php/Stoney_Sept" target="_blank">Learn More</a>' },

    { name: "Last Hearth", coords: [1300, 565], description: "is sometimes called The Last Hearth, is the seat of House Umber in the north. It lies close to the Gift in a forest east of the kingsroad. It is north of the Last River, northeast of Long Lake, and west of the Bay of Seals. With the exception of the castles of the Night's Watch, Last Hearth is the northernmost major castle of the Seven Kingdoms.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Last_Hearth" target="_blank">Learn More</a>' },

    { name: "Grey Cliffs", coords: [1305, 675], description: "The Grey Cliffs are a series of cliffs in the north. They lie along the shore of the Shivering Sea, east of Karhold. The waters near the cliffs have rich fishing grounds.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Grey_Cliffs" target="_blank">Learn More</a>' },

    { name: "Skagos", coords: [1380, 650], description: "Skagos is a large island in the mouth of the Bay of Seals. In theory, the island is part of the north and subject to House Stark of Winterfell. However, the island has little contact with mainland Westeros and the Seven Kingdoms, and in practice they rule themselves. The island's name means 'stone' in the Old Tongue.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Skagos" target="_blank">Learn More</a>' },

    { name: "Skane", coords: [1428, 627], description: "is an isle in the north, located north of the island of Skagos and the Bay of Seals. It has windswept hills and stony shores.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Skane" target="_blank">Learn More</a>' },

    { name: "Castle Black", coords: [1395, 525], description: "is the main stronghold of the Night's Watch and the seat of their Lord Commander. The castle is situated along the Wall between Queensgate to the west and Oakenshield to the east, near the center of the Wall, at the northern end of the kingsroad. The village of Mole's Town is located half a league to the south along the kingsroad.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Castle_Black" target="_blank">Learn More</a>' },

    { name: "Eastwatch", coords: [1390, 565], description: "also, Eastwatch-by-the-Sea, is the easternmost castle of the Night's Watch along the Wall, located on a grey, windswept shore by the Bay of Seals. To the west lies Greenguard, an abandoned castle. Some fisherfolk live near Eastwatch.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Eastwatch-by-the-Sea" target="_blank">Learn More</a>' },

    { name: "White Tree", coords: [1410, 530], description: "is a small free folk village located northwest of Castle Black, beyond the Wall.[1] Its name comes from the giant weirwood tree that is located in its midst.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Whitetree" target="_blank">Learn More</a>' },

    { name: "Craster's Keep", coords: [1425, 520], description: "is the home of Craster, an ornery wildling beyond the Wall who is a friend to the Night's Watch. It is not an actual keep, but is only given that title by members of the Watch.  <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Craster%27s_Keep" target="_blank">Learn More</a>' },

    { name: "Fist of the First Men", coords: [1448, 475], description: 'is a solitary hill, located next to the Milkwater, surrounded by the haunted forest. The hill was named by the free folk for its appearance, which looks like a fist punching up through the earth. Its bare earth slopes have stone "knuckles".  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Fist_of_the_First_Men" target="_blank">Learn More</a>' },

    { name: "Lands of Always Winter", coords: [1465, 270], description: 'The Land of Always Winter, or Lands of Always Winter, is the northernmost known part of Westeros, far beyond the Wall. The Frostfangs and several large lakes separate them from the haunted forest.  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Land_of_Always_Winter" target="_blank">Learn More</a>' },

    { name: "Queenscrown", coords: [1373, 510], description: "Queenscrown is an abandoned tower holdfast with a village in the New Gift. It is located west of the kingsroad and south of the Wall. The stone holdfast tower of Queenscrown is described both as a roundtower and a towerhouse, it stands upon an rocky island in a lake, with many oak trees growing thick along the shore <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Queenscrown" target="_blank">Learn More</a>' },


    { name: "Shadow Tower", coords: [1395, 477], description: "The Shadow Tower is one of three castles along the Wall that are still inhabited by the Night's Watch. It is located next to the northern mountains at the western end of the Wall.[1] It lies west of Sentinel Stand and east of Westwatch-by-the-Bridge,[2] both abandoned castles. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Shadow_Tower" target="_blank">Learn More</a>' },

    { name: "Haunted Forest", coords: [1477, 490], description: 'The haunted forest is a vast forest beyond the Wall in northern Westeros. Located beyond the Seven Kingdoms, it is inhabited by the free folk and is bounded to the west by the Frostfangs and to the east by the Shivering Sea and the Bay of Seals. North of the haunted forest is the unmapped Land of Always Winter.  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Haunted_forest" target="_blank">Learn More</a>' },

    { name: "The Frozen Shore", coords: [1417, 306], description: 'or frozen shore, is the western shore of the lands beyond the Wall, with the Bay of Ice and Bear Island to the south. An unnamed river with tributaries flows south through the region to the Bay of Ice and the Sunset Sea.  <br>'  + '<a href="https://awoiaf.westeros.org/index.php/Frozen_Shore" target="_blank">Learn More</a>' },

    { name: "Driftmark", coords: [705, 636], description: "is an island west of Dragonstone in Blackwater Bay. The seat of House Velaryon in the crownlands, it has a long point.[1] The Gullet separates Driftmark from Massey's Hook to the south. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Driftmark" target="_blank">Learn More</a>' },

    { name: "Sharp Point", coords: [680, 647], description: "is the seat of House Bar Emmon in the crownlands. The castle is located along the Gullet at the northern end of Massey's Hook, north of Stonedance.[1] It has a large watchtower upon which a great fire burns atop. <br>"  + '<a href="https://awoiaf.westeros.org/index.php/Sharp_Point" target="_blank">Learn More</a>' },
    // Add more locations as needed
    


];

// Add markers for each point of interest and bind popups
pointsOfInterest.forEach(function(poi) {
    L.marker(poi.coords).addTo(map)
        .bindPopup(`<b>${poi.name}</b><br>${poi.description}`);
});

// Search function to locate and zoom into a point of interest
function searchLocation(input) {
    input = input.toLowerCase();
    var found = pointsOfInterest.find(poi => poi.name.toLowerCase() === input);
    if (found) {
        var customZoom = 2;
        map.setView(found.coords, customZoom);
        L.popup()
            .setLatLng(found.coords)
            .setContent(`<b>${found.name}</b><br>${found.description}`)
            .openOn(map);
    } else {
        alert('Location not found');
    }
}

// Handle "Enter" key press
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if it's in a form
        var searchTerm = event.target.value;
        searchLocation(searchTerm);
    }
});

// Initialize autocomplete for search
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