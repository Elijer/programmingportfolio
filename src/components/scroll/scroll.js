export const scroll = () => {
    if (window.innerWidth < 480){

        document.addEventListener('scroll', function(e) {
            lastKnownScrollPosition = window.scrollY;

            

        })
    }
}