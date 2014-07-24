(function () {

    /**
     * Our element factory function, useful for creating new dom
     * elements on the fly.
     * @param elementType
     * @param text
     * @param attributes
     * @param styles
     * @returns {HTMLElement}
     */
    function e(elementType, text, attributes, styles) {
        attributes = attributes || {};
        styles = styles || {};

        var newElement = document.createElement(elementType);

        if (text) {
            newElement.textContent = text;
        }

        //set the attributes on the tag
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                newElement.setAttribute(attr, attributes[attr]);
            }
        }

        //set the styles
        for (var style in styles) {
            if (styles.hasOwnProperty(style)) {
                newElement.style[style] = styles[style];
            }
        }

        return newElement;
    }

    window.e = e;

}());