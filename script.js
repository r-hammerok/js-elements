'use strict';

const DomElement = function(selector = '.hey', height = '100px', width = '350px', bg = 'green', fontSize = '2em') {
    this.selector = selector.trim();
    this.height = height.trim();
    this.width = width.trim();
    this.bg = bg.trim();
    this.fontSize = fontSize.trim();
    this.position = 'block';
    this.posX = 0;
    this.posY = 0;
};

DomElement.prototype.addElement = function() {
    const tag = this.selector[0] === '.' ? 'div' : 'p';
    
    let element = document.querySelector(this.selector) ?  
                document.querySelector(this.selector) : document.createElement(tag);

    if (tag === 'div') {
        element.className = this.selector.slice(1);
    } else {
        element.id = this.selector.slice(1);
    }
    element.innerText = 'Lorem Ipsum';
    
    let css = 
        `height: ${this.height}; 
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize}; 
        position: ${this.position};
        left: ${this.posX}px;
        top: ${this.posY}px;
        `;

    element.style.cssText = css;
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
