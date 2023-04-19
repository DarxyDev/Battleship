const domManager = (() => {
    function setElementAspectRatio(element, ratio = 1) {
        const parent = element.parentNode;
        window.addEventListener('resize', _onResize);
        _onResize();
        function _onResize(e) {
            const width = parent.offsetWidth;
            const height = parent.offsetHeight;

            let newSize;
            if (height > width) newSize = width;
            else newSize = height;

            let newWidth = newSize;
            let newHeight = newSize;
            if (ratio > 1) newHeight *= (1 / ratio);
            else newWidth *= ratio;

            element.style.width = newWidth + 'px';
            element.style.height = newHeight + 'px';
        }
    }
    return { setElementAspectRatio };
})();
export default domManager;