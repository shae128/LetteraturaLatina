//Variables
// -----------------------------------------------------------

var parentNode;


// -----------B----R----E-----A----K--------------------------

// -----------------------------------------------------------
// Functions
// -----------------------------------------------------------

function createTimeLineContent() {

    parentNode = document.getElementById("parent");

    var authorName = "Ennio";
    var periodDate = "206 - 195 a.C";

    var nodeFirstChild = document.createElement("div");
    nodeFirstChild.className = "col-lg-6 col-md-6 col-sm-12 col-xs-12 item";

    var nodeCaption = document.createElement("div");
    nodeCaption.className = "caption";
    nodeFirstChild.appendChild(nodeCaption);

    var nodeStar = document.createElement("div");
    nodeStar.className = "star center-block";
    nodeCaption.appendChild(nodeStar);

    var nodeHeadName = document.createElement("p");
    nodeHeadName.className = "h3";
    var nodeTextName = document.createTextNode(authorName);
    nodeHeadName.appendChild(nodeTextName);
    nodeStar.appendChild(nodeHeadName);

    var nodeHeadDate = document.createElement("p");
    var nodeTextDate = document.createTextNode(periodDate);
    nodeHeadDate.appendChild(nodeTextDate);
    nodeStar.appendChild(nodeHeadDate);

    var nodeImageDiv = document.createElement("div");
    nodeImageDiv.className = "image";
    nodeCaption.appendChild(nodeImageDiv);

    var nodeImg = document.createElement("img");
    var imgAddr = "images/" + authorName + ".png";
    nodeImg.setAttribute("src", imgAddr);
    nodeImageDiv.appendChild(nodeImg);

    var nodeTitleDiv = document.createElement("div");
    nodeTitleDiv.className = "title";
    nodeImageDiv.appendChild(nodeTitleDiv);

    var nodeH2 = document.createElement("h2");
    var nodeTextDetails = document.createTextNode("Scopri i dettagli ");
    nodeH2.appendChild(nodeTextDetails);
    nodeTitleDiv.appendChild(nodeH2);

    var nodeI = document.createElement("i");
    nodeI.className = "fa fa-arrow-circle-right";
    nodeI.setAttribute("aria-hidden" , "true");
    nodeH2.appendChild(nodeI);

    var nodeTextContentDiv = document.createElement("div");
    nodeTextContentDiv.className = "textContent";
    nodeCaption.appendChild(nodeTextContentDiv);

    var nodeDescription = document.createElement("p");
    nodeDescription.className = "lead";
    var nodeTextDescription = document.createTextNode("testtestsetsetsetset");
    nodeDescription.appendChild(nodeTextDescription);
    nodeTextContentDiv.appendChild(nodeDescription);

    parentNode.appendChild(nodeFirstChild);




    console.log(nodeFirstChild);



}

