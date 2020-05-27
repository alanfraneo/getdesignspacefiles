var GridHTML = {};

GridHTML.getHTML = function (config) {
  var html =
    '<!DOCTYPE HTML><html><head><meta charset=utf-8><title>NeoGallery</title>\
      <link href="/bi/webapp/css/neogallery.v3.css" rel="stylesheet" type="text/css" />\
      </head><body><div id="title"></div>\
      <div id="tabs"></div>\
      <div id="neogallery"></div></body>\
      <script>var imgconfig = '+config+';</script>\
      <script src="/bi/webapp/js/neogallery.v3.js"></script>\
     </html>';
  return html;
};
