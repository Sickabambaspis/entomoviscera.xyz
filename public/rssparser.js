function loadXML(){
    try {
        if (window.ActiveXObject){
            request = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            request = new window.XMLHttpRequest();
        }
        request.open("GET", "rss.xml", true);
        request.send(null);
        request.onreadystatechange = showFeed;
    } catch( exc ) {
        alert ("Error!" + exc.message);
    }
}

function showFeed(){
    xmlDoc = request.responseXML.documentElement;
    feedbody = "";
    date = "";
    var maxitems = xmlDoc.getElementsByTagName("item").length;
    var titlelist = xmlDoc.getElementsByTagName("title");
    var descriptions = xmlDoc.getElementsByTagName("description");
    var pubdate = xmlDoc.getElementsByTagName("pubDate");

    for (i = 1; i <= maxitems; i++) {
        date = pubdate[i-1].childNodes[0].nodeValue;
        feedbody += "" + "<h3>" + titlelist[i].childNodes[0].nodeValue + " - " + date.slice(4, 16)
        + "</h3><p>" + descriptions[i].childNodes[0].nodeValue + "</p>";
    }

    document.getElementById("rssfeed").innerHTML = feedbody;
}