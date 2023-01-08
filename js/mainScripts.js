document.head.innerHTML += '<link rel="stylesheet" href="/styles/styles.css">';

drawPage(document.body.innerHTML);

function drawPage(content) {
    let html = "";
    html += bodyStart();
    html += doHeader();
    //Content
    html += content;
    html += bodyEnd();
    
    document.body.innerHTML = html;
}

function bodyStart()
{
    return '<div class="bodyInner"><div class="pageContent">';
}

function bodyEnd()
{
    return '</div></div>';
}

function doHeader()
{
    var s = document.createElement("script");
    s.src = "/js/siteConstants.js";
    document.head.appendChild(s);
    s.onload = function(e){drawHeaderMenu();};
    
    return '<div id="headerMenu">header</div>';
}

function drawHeaderMenu(){
    let headerLinks = getHeaderLinks();
    let headerMenuHtml = '<div class="navbar"><div class="navbarContent">';
    for(let i = 0; i < headerLinks.length; i++)
    {
        let headerMenuItem = headerLinks[i];
        headerMenuHtml += '<a href="' + headerLinks[i].path + '" class="headerMenuItem">'+headerMenuItem.name+'</a>';
    }
    headerMenuHtml += '</div></div><div style="height: 64px"></div>';
    document.getElementById("headerMenu").innerHTML = headerMenuHtml;
}