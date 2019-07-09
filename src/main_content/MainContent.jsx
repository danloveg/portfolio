import About from "./about_page/About"

/**
 * Note to self: This function will need to return different things depending on the page to be
 * shown in the main content section. Main Content will need to return something different depending
 * on which sidebar item was clicked, but on the site's first load I want it to open the About page.
 * I do not know how to do this yet!
 */
function MainContent() {
    return About()
}

export default MainContent