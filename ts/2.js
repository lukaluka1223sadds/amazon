document.addEventListener("DOMContentLoaded", function () {
    var _loop_1 = function (i) {
        var getElement = document.querySelector(".component-1-component-".concat(i));
        console.log("Element ".concat(i, ":"), getElement);
        if (getElement &&
            getElement.className !== 'component-1-component-7' &&
            getElement.className !== 'component-1-component-14' &&
            getElement.className !== 'component-1-component-21') {
            getElement.onmouseover = function () {
                console.log("Mouse over on element ".concat(i));
                getElement.classList.add("container-3-component-all");
            };
        }
        {
            getElement.onmouseleave = function () {
                console.log("Mouse leave on element ".concat(i));
                if (getElement) {
                    getElement.classList.remove("container-3-component-all");
                }
            };
        }
    };
    for (var i = 1; i < 25; i++) {
        _loop_1(i);
    }
});
