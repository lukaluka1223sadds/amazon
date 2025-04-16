document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i < 25; i++) {
        let getElement = document.querySelector(`.component-1-component-${i}`);
        console.log(`Element ${i}:`, getElement); 
        if (
            getElement &&
            getElement.className !== 'component-1-component-7' &&
            getElement.className !== 'component-1-component-14' &&
            getElement.className !== 'component-1-component-21'
        ) {
            (getElement as HTMLElement).onmouseover = () => {
                console.log(`Mouse over on element ${i}`); 
                getElement.classList.add("container-3-component-all");
            };
        } {
        (getElement as HTMLElement).onmouseleave = () => {
            console.log(`Mouse leave on element ${i}`); 
            if (getElement) {
                getElement.classList.remove("container-3-component-all");
            }
        };
        }
    }
});