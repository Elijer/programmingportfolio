export function gg(id){
    return document.getElementById(id);
}

export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const bufferTop = 100;
    const bufferBottom = 70;
    return (
        rect.top >= 0 + bufferTop &&
        //rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight)-bufferBottom)
        //&& rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}