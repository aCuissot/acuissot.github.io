function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "media/search.json", true);
    xhttp.send();
}

function myFunction(json) {
    var i;
    var jsonDoc = JSON.parse(json.responseText);
    var table="";
    var x = jsonDoc.items;
    var gr;
    for (i = 0; i <x.length; i++) {
        gr = x[i];
        if (i%2===0) {
            table += "                                <div class=\"col-lg-12\" style='width: 100%'>\n" +
                "                    <div class=\"box2 wow fadeInLeft\" style='width: 100%'>\n" +
                "                        <div class=\"leftSec\" style='width: 30%'>\n" +
                "                            <div style=\"padding-bottom:56.25%; position:relative; display:block; width: 100%\"><iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube-nocookie.com/embed/" + gr.id.videoId + "\"\n" +
                "                            frameborder=\"0\"\n" +
                "                            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n" +
                "                            allowfullscreen style=\"position:absolute; top:0; left: 0\"></iframe></div>" +
                "                        </div>\n" +
                "                        <div class=\"rightSec\" style='width: 65%'>\n" +
                "                            <h4 class=\"title\">" + gr.snippet.title + "</h4>\n" +
                "                            <h6 class=\"dateV\">" + gr.snippet.publishedAt.substring(0, 10) + "</h6>\n" +
                "                            <p class=\"description\">" + gr.snippet.description + "</p>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>"
        } else {
            table += "                                <div class=\"col-lg-12\" style='width: 100%'>\n" +
                "                    <div class=\"box2 wow fadeInRight\" style='width: 100%'>\n" +
                "                        <div class=\"leftSec\" style='width: 30%'>\n" +
                "                            <div style=\"padding-bottom:56.25%; position:relative; display:block; width: 100%\"><iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube-nocookie.com/embed/" + gr.id.videoId + "\"\n" +
                "                            frameborder=\"0\"\n" +
                "                            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n" +
                "                            allowfullscreen style=\"position:absolute; top:0; left: 0\"></iframe></div>" +
                "                        </div>\n" +
                "                        <div class=\"rightSec\" style='width: 65%'>\n" +
                "                            <h4 class=\"title\">" + gr.snippet.title + "</h4>\n" +
                "                            <h6 class=\"dateV\">" + gr.snippet.publishedAt.substring(0, 10) + "</h6>\n" +
                "                            <p class=\"description\">" + gr.snippet.description + "</p>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>"
        }

    }
    document.getElementById("maino").innerHTML = table;
}