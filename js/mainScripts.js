document.head.innerHTML += '<link rel="stylesheet" href="/styles/styles.css">';

drawPage(document.body.innerHTML);

function drawPage(content) {
    let html = "";
    html += doHeader();

    html += bodyStart();
    //Content
    html += content;
    html += bodyEnd();

    document.body.innerHTML = html;
}

function bodyStart()
{
    //<div style="height: 64px;"></div>
    return '</div><div class="bodyInner"><div class="pageContent"><div class="pageContentInner">';
}

function bodyEnd()
{
    return '</div></div></div>';
}

function doHeader()
{
    var s = document.createElement("script");
    s.src = "/js/siteConstants.js";
    document.head.appendChild(s);
    s.onload = function(){drawHeaderMenu();};
    
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
    headerMenuHtml += '</div></div><div style="height: 64px; padding: 0; margin: 0;"></div>';
    document.getElementById("headerMenu").innerHTML = headerMenuHtml;
}