var json;

function getJson() {
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "food/list.json", true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readystate === 4 && xhttp.status === "200") {
            json = xhttp.responseText;
        }
    };
    var prsdJSON = JSON.parse(json);
    return prsdJSON;
}

function printLike() {
    var prsdJSON = getJson();
    var likeLen = prsdJSON.like.length;
    while (likeLen > 0) {
        document.getElementById("like").innerHTML = document.getElementById("like").innerHTML + "<li>" + prsdJSON.like[likeLen] + "</li>";
        likeLen = likeLen - 1;
    }
}

function printDislike() {
    var prsdJSON = getJson();
    var dislikeLen = prsdJSON.dislike.lenth;
    while (dislikeLen > 0) {
        document.getElementById("dislike").innerHTML = document.getElementById("dislike").innerHTML + "<li>" + prsdJSON.dislike[dislikeLen] + "</li>";
        dislikeLen = dislikeLen - 1;
    }
}

function printHate() {
    var prsdJSON = getJson();
    var hateLen = prsdJSON.hate.lenth;
    while (hateLen > 0) {
        document.getElementById("hate").innerHTML = document.getElementById("hate").innerHTML + "<li>" + prsdJSON.hate[hateLen] + "</li>";
        hateLen = hateLen - 1;
    }
}
