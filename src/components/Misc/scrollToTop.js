//A scroll-to-top-btn appears on the footer (navbar) when the user has scrolled 200px or more of content.

const ScrollToTop = () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

export default ScrollToTop;