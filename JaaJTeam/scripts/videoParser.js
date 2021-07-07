function loadDoc(range) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this, range);
        }
    };
    xhttp.open("GET", "media/search.json", true);
    xhttp.send();
}

function myFunction(json, range) {
    var i;
    var jsonDoc = JSON.parse(json.responseText);
    var htmlContent="";
    var x = jsonDoc.items;
    var gr;
    var prevRange = 0;
    if (range===10){
        prevRange=5;
    }
    if (range===20){
        prevRange=10;
    }
    if (i!==5){
        for (i = 0; i <prevRange; i++) {
            gr = x[i];
            if (i%2===0) {
                htmlContent += "                                <div class=\"col-lg-12\" style='width: 100%'>\n" +
                    "                    <div class=\"box2 \" style='width: 100%'>\n" +
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
                htmlContent += "                                <div class=\"col-lg-12\" style='width: 100%'>\n" +
                    "                    <div class=\"box2 \" style='width: 100%'>\n" +
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
    }
    for (i = prevRange; i <range; i++) {
        gr = x[i];
        if (i%2===0) {
            htmlContent += "                                <div class=\"col-lg-12\" style='width: 100%'>\n" +
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
            htmlContent += "                                <div class=\"col-lg-12\" style='width: 100%'>\n" +
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
    if (range===5){
        htmlContent += "            <btn id=\"AAA\" class=\"cta-btn align-middle\" onclick='loadDoc(10)'>Charger plus</btn>\n"
    }
    if (range===10){
        htmlContent += "            <a id=\"AAAA\" class=\"cta-btn align-middle\" onclick='loadDoc(20)'>Charger plus</a>\n"
        document.getElementById("AAA").style.display = 'none';
    }
    if (range===20){
        htmlContent += "       <div id=\"AAAAA\" style='width: 100%'><p>Rendez vous sur notre chaine Youtube pour plus de contenu:</p>\n" +
            "                        <p style='display: block; margin-left: auto;margin-right: auto;'>\n" +
            "                            <a href=\"https://www.youtube.com/channel/UCblK-xqtM6bhIKQG5Qd4vwA\"\n" +
            "                               target=\"_blank\" title=\"Youtube\" style='margin-left: auto;margin-right: auto;'>\n" +
            "                                <img src=\"../Media/404images/yt.png\"\n" +
            "                                     alt=\"Youtube\" title=\"Youtube\" style=\"width: 400px;margin-left: auto;margin-right: auto;\">\n" +
            "                            </a>\n" +
            "                        </p></div>"
        document.getElementById("AAAA").style.display = 'none';
    }
    document.getElementById("maino").innerHTML = htmlContent;
}