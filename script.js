'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector.trim();
    this.height = height.trim();
    this.width = width.trim();
    this.bg = bg.trim();
    this.fontSize = fontSize.trim();
};

DomElement.prototype.addElement = function() {
    let element = '';
    if (this.selector[0] === '.') {
        // Создаем div с классом
        element = document.createElement('div');
        element.className = this.selector.slice(1);
        element.innerText = `Это блок <DIV> с классом ${this.selector.slice(1)}`;
    }
    if (this.selector[0] === '#') {
        // Создаем параграф с id
        element = document.createElement('p');
        element.id = this.selector.slice(1);
        element.innerText = `Это блок <P> с ID ${this.selector.slice(1)}`;
    }
    element.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
    `;
    document.body.append(element);
};

const newElementDiv = new DomElement('.class1', '100px', '500px', '#ccc', '14px');
const newElementP = new DomElement('#id', '200px', '300px', '#333', '18px');

console.dir(newElementDiv);

newElementDiv.addElement();
newElementP.addElement();