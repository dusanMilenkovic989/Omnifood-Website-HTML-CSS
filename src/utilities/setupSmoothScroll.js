import WARNING_MESSAGES from "./warnMessages"

/**
 * @description Sets up the smooth scrolling from JS. Complementing code could be passed inside the callback for the execution
 * @param {NodeList} linksList - List of all links with a href attribute
 * @param {Function} [callback] - Callback function to be executed
 * @returns {void} - Has no return value
 */

const setupSmoothScroll = (linksList, callback) =>
{
    for (const LINK_EL of linksList) 
    {
        LINK_EL.addEventListener('click', (e) =>
        {
            e.preventDefault()
            const LINK_EL_HREF = LINK_EL.getAttribute('href')

            if (LINK_EL_HREF === '#') 
            {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } 
            else if (LINK_EL_HREF.startsWith('#') && LINK_EL_HREF.length > 1) 
            {
                const EL = document.querySelector(LINK_EL_HREF)
                EL ? EL.scrollIntoView({ behavior: 'smooth' }) : console.warn(WARNING_MESSAGES[3])
            }

            callback && callback()
        })
    }
}

export { setupSmoothScroll as default }