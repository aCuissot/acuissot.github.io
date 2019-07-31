function Song(title, artist, year, name, genres){
		this.title = title; 
		this.artist = artist; 
		this.year = year; 
		this.name = name; 
		this.genres = genres; 
}
 
Song.prototype.toString = function songToString(){
	var ret = '' + this.title + " - " + this.artist + "(" + this.year.toString() + ")," + this.name + " [" +this.genres.toString() + "]";
	return ret;
}

var TabSongList= [];
var TabSongGenres=[];

function initApp(){
	var SongGenres = document.getElementById("songgenre");
	var SongList = document.getElementById("songlist");
	TabSongList.push(new Song("Nessun Dorma", "Luciano Pavarotti", 1990, "nessundorma.mp3",["90's","Opera"]));
	TabSongList.push(new Song("Come Undone", "Duran Duran", 1993, "comeundone.mp3",["90's", "Pop"]));
	TabSongList.push(new Song("Think of Me", "Sarah Brightman", 1987, "thinkofme.mp3",["Showtunes"]));
	TabSongList.push(new Song("Unbelievable", "EMF", 1991, "unbelievable.mp3", ["90's", "Pop"]));
	remplir_List_Song(TabSongList, SongList);
	TabSongGenres= new Array("90's","Classical","Country","Hip-hop","Opera","Pop","Rock","Showtunes");
	remplir_List_Genre(TabSongGenres, SongGenres);
}

function remplir_List_Song(a, b){
	
	console.log(b);
	
	var res = "";
	for (var index = 0; index < a.length; ++index) {

		res += "<option value=\"" + a[index].name + "\">" + a[index] + "</option>";
		
	}
	b.innerHTML += res;
}

function remplir_List_Genre(a, b){
	
	console.log(b);
	
	var res = "";
	for (var index = 0; index < a.length; ++index) {

		res += "<option value=\"" + a[index] + "\">" + a[index] + "</option>";
		
	}
	b.innerHTML += res;
}


function getSelectedOptions(sel) {
    var opts = [], opt;
	var sng = document.getElementById("songlist").getElementsByTagName("option");
	for (var i=0; i<sng.length; i++) {
		sng[i].disabled = true;
	}

	
    for (var i=0; i<sel.options.length; i++) {
        opt = sel.options[i];
        
        if ( opt.selected ) {
            opts.push(opt);
			for (var j=0; j<sng.length; j++) {
				for (var index = 0; index<TabSongList.length; ++index){
					if (TabSongList[index].name==sng[j].value){
						if (TabSongList[index].genres.indexOf(opt.value)>-1){
							sng[j].disabled = false;
						}
					}
				}
			}
			console.log(opt.value);
		}
			
	}
    return opts;
}

document.getElementById('songgenre').onchange = function(e) { 
    getSelectedOptions(this);
};


function afficherInfo(){
	var e = document.getElementById("songlist");
	e	=  e.options[e.selectedIndex].value;
	document.getElementById("myAudio").src=e;
	document.getElementById("myAudio").play();

	var currSong;
	for (var index = 0; index<TabSongList.length; ++index){

		if (TabSongList[index].name == e){
			currSong = TabSongList[index];
			console.log(currSong.toString);
		}
		
	}
	var res = "<p>Nom:</p><p class=\"whitep\">" + currSong.title + "</p>" + "<p>Artiste:</p><p class=\"whitep\">" + currSong.artist + "</p>" + "<p>Année:</p><p class=\"whitep\">" + currSong.year + "</p>" +"<p>Nom du fichier:</p><p class=\"whitep\">" + currSong.name + "</p>";

	document.getElementById("info").innerHTML = res ; 
}


/*
  <select id="a" name="cars" size="4" onclick="jeej()">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <br><br>
<script>
function jeej(){
var e = document.getElementById("a");
var e = document.getElementById("b").innerHTML=  e.options[e.selectedIndex].text;
}
</script>
<p id="b"></p>
*/