export function gg(id){
    return document.getElementById(id);
}

export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const buffer = 100;
    return (
        rect.top >= 0 + buffer &&
        //rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight)-buffer)
        //&& rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}