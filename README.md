what did i improve, what were the issues

# Feature detection (progressive enhancement)
All features are tested in the newest version of Chrome, Safari Firefox Opera, opera Neon and have a fallback for IE9.


I made sure that the user is able to see a simular experience on every browser.

## Table of contents
- [Optimizing css](#css)
- [Optimizing images](#img)
- [Lazy loading](#lazyloading)
- [JS remove child-node](#remove)


Browser support

### <a name="grid"></a>CSS grid
De styling starts with basic floats and if you support flexbox or css grid it will use that.

### Demo
https://soraya2.github.io/browser-technologies/css_grid/

### Code
https://github.com/soraya2/browser-technologies/blob/master/css_grid/index.html

### Support according to i use
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/grid_support.jpg)

### Basic styling with floats for IE9
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/display_inline.jpg)

### CSS grid fallback with feature detection flexbox in Firefox
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/flexbox.jpg)


### CSS grid with feature detection in Chrome
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/css_grid.jpg)



### <a name="rrggbbaa"></a>CSS rrggbbaa
De styling has a rgb fallback uses RGBA if it supports that through basic cascading.

### Demo
https://soraya2.github.io/browser-technologies/rrggbbaa/

### Code
https://github.com/soraya2/browser-technologies/blob/master/rrggbbaa/index.html

### Support according to i use
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/rrggbbaa_support.jpg)

### Test result in IE9
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/ie9.jpg)


### Test result in Chrome
![CSS rrggbbaa results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/no_rrggbaa.jpg)

### Test result in Safari
![CSS rrggbbaa results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/all_colors_safari.jpg)



### <a name="es6"></a>Arrow functions check ES6
If the browser accepts default parameters for example (b = 2) than the browser supports es6 if the browser gives an error than it does not support it. Depending on the the result it loads in an es6 file or es5 file.

### Demo
https://soraya2.github.io/browser-technologies/es6/

### Code
https://github.com/soraya2/browser-technologies/blob/master/es6/index.html

### Support according to i use
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/ed6arrow_support.jpg)


### Test result in IE9
![JS support check ES6](https://github.com/soraya2/browser-technologies/blob/master/screenshots/es6checkie9.jpg)


### Test result in Chrome
![JS support check ES6](https://github.com/soraya2/browser-technologies/blob/master/screenshots/es6checkchrome2.jpg)



### <a name="remove"></a>JS remove child
Remove child elements from the dom depending on if you support element.removeChild(child) or childNode.remove

### Demo
https://soraya2.github.io/browser-technologies/remove_node/

### Code
https://github.com/soraya2/browser-technologies/tree/master/remove_node

### Support according to i use
![CSS grid results](https://github.com/soraya2/browser-technologies/blob/master/screenshots/childnode_remove_suport.jpg)

### Result in Chrome with element.removeChild(child)
![JS remove child-node](https://github.com/soraya2/browser-technologies/blob/master/screenshots/remove_chrome.jpg)

### Result in IE9 with childNode.remove
![JS remove child-node](https://github.com/soraya2/browser-technologies/blob/master/screenshots/remove_ie.jpg)












