// ==UserScript==
// @name         hide all image tags on a page
// @namespace    https://github.com/4ndr3wN
// @version      0.1
// @description  Hide all image tags
// @author       4ndr3wN@github
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let images = document.getElementsByTagName('img');

    setImagesNone(images);

    function setImagesNone(images){
        for (let img_k in images) {
            if (!images.hasOwnProperty(img_k)) continue;// skip loop if the property is from prototype

            var image_v = images[img_k];
            image_v.style.display = "none";
        }
    }
})();