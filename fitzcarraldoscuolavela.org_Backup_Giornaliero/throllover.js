/*
 * ThRollover v1.0
 *
 * Author: Giovanni Giacobbi <giovanni@giacobbi.net>
 * Copyright (C) 2003  Giovanni Giacobbi
 *
 */

ThAg = window.navigator.userAgent;
ThBVers = parseInt(ThAg.charAt(ThAg.indexOf("/") + 1), 10);
ThLib = new Object();

function IsIE() {
  return ThAg.indexOf("MSIE") >= 0;
}
function ThFindElement(n, ly) {
  if (ThBVers < 4)
    return document[n];
  var curDoc = ly ? ly.document : document; var elem = curDoc[n];
  if (!elem) {
    for (var i=0; i < curDoc.layers.length; i++) {
      elem = ThFindElement(n, curDoc.layers[i]);
      if (elem)
        return elem;
    }
  }
  return elem;
}
function ThShow(n, i) {
  if (document.images) {
    if (ThLib[n]) {
      var img = (!IsIE()) ? ThFindElement(n, 0) : document[n];
      if (img) {
        img.src = ThLib[n][i].src;
        if (i == 0)
          self.status = "";
        else
          self.status = ThLib[n][2];
      }
      return true;
    }
  }
  return false;
}
function ThLoad(im, ar) {
  if (document.images) {
    ThLib[im] = new Object();
    for (var i = 0; i <= 1; i++) {
      if (ar[i] != '') {
        ThLib[im][i] = new Image();
        ThLib[im][i].src = ar[i];
      }
      else ThLib[im][i] = 0;
    }
    ThLib[im][2] = ar[2];
  }
}
