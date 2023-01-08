// import $ from 'https://code.jquery.com/jquery-3.3.1.min.js';
// import constants from "siteConstants.js";

// document.head.innerHTML += '<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>';
var s = document.createElement("script");
s.src = "/js/siteConstants.js";
document.head.appendChild(s);

s.onload = function(e){drawHeaderMenu();};

function drawHeaderMenu(){
    let headerLinks = getHeaderLinks();
    let headerMenuHtml = "";
    headerMenuHtml += '<div class="navbar">';
    for(let i = 0; i < headerLinks.length; i++)
    {
        let headerMenuItem = headerLinks[i];
        headerMenuHtml += '<a href="' + headerLinks[i].path + '" class="headerMenuItem">'+headerMenuItem.name+'</a>';
    }
    headerMenuHtml += '</div>';
    headerMenuHtml += '<div style="height: 160px"></div>';
    document.getElementById("headerMenu").innerHTML = headerMenuHtml;
}

