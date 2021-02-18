'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.getStyle = function() {
    let cssInner = ``;
    if (this.height !== undefined) {
        cssInner += `height: ${this.height};`;
    }
    if (this.width !== undefined) {
        cssInner += `width: ${this.width};`;
    }
    if (this.bg !== undefined) {
        cssInner += `background-color: ${this.bg};`;
    }
    if (this.fontSize !== undefined) {
        cssInner += `font-size: ${this.fontSize};`;
    }
    if (this.position !== undefined) {
        cssInner += `position: ${this.position};`;
    }
    if (this.posX !== undefined) {
        cssInner += `left: ${this.posX}px;`;
    }
    if (this.posY !== undefined) {
        cssInner += `top: ${this.posY}px;`;
    }

    return cssInner;
};

DomElement.prototype.addElement = function() {
    let 
        element = '',
        value = this.selector.slice(1);
    if (this.selector[0] === '.') {
        if (document.querySelector(`div.${value}`)) {
            element = document.querySelector(`div.${value}`);
        } else {
            element = document.createElement('div');
        }
        element.className = this.selector.slice(1);
        element.innerText = `Это блок <DIV> с классом ${this.selector.slice(1)}`;
    }
    if (this.selector[0] === '#') {
        if (document.querySelector(`p#${value}`)) {
            element = document.querySelector(`p#${value}`);
        } else {
            element = document.createElement('p');
        }
        element.id = this.selector.slice(1);
        element.innerText = `Это блок <P> с ID ${this.selector.slice(1)}`;
    }
    
    element.style.cssText = this.getStyle();
    document.body.append(element);
};

const square = new DomElement('#square', '100px', '100px', '#ccc');
square.position = 'absolute';
square.posX = 0;
square.posY = 0;

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
            this.posX -= 10;
            break;
        case 'ArrowRight':
            this.posX += 10;
            break;
        case 'ArrowUp':
            this.posY -= 10;
            break;
        case 'ArrowDown':
            this.posY += 10;
            break;
    }
    this.addElement();
}.bind(square));
document.addEventListener('DOMContentLoaded', square.addElement.bind(square));
