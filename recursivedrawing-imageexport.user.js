// ==UserScript==
// @name RecursiveDrawing Export
// @namespace http://mrcoles.com
// @description Add an export to image feature to recursivedrawing.com
// @version 0.0.1
// @match http://recursivedrawing.com/draw.html
// ==/UserScript==

var d = document,
    $d = function(x) { return d.getElementById(x); },
    sideBar = $d('sidebarRight'),
    link = d.createElement('a'),
    style = d.createElement('style');

function exportImage() {
    var c1 = $d('workspaceCanvas'),
        c2 = $d('drawFurther'),
        W = c1.width,
        H = c2.height,
        c3 = d.createElement('canvas'),
        ctx = c3.getContext('2d');
    c3.width=W;
    c3.height=H;
    ctx.drawImage(c1, 0, 0);
    ctx.drawImage(c2, 0, 0);
    window.open(c3.toDataURL());
    return false;
};

style.innerHTML = ('a.export {' +
                   '  position: absolute;' +
                   '  bottom: 0;' +
                   '  right: 0;' +
                   '  color: #999;' +
                   '}'
                  );

link.className = 'export';
link.href = '#';
link.innerHTML = 'export';
link.onclick = exportImage;

d.body.appendChild(style);
sideBar.appendChild(link);
