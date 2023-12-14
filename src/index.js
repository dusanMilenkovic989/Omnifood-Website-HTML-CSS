import smoothscroll from 'smoothscroll-polyfill'
import { HEADER_EL, LINK_EL_LIST, MENU_BUTTON_EL, SECTION_HERO_EL, YEAR_EL } from './utilities/domElements'
import WARNING_MESSAGES from './utilities/warnMessages'
import setupSmoothScroll from './utilities/setupSmoothScroll'
import setupStickyHeader from './utilities/setupStickyHeader'
import checkFlexGap from './utilities/checkFlexGap'

// Smooth scroll did not work properly on Safari and Edge browsers in the past - use polyfil
// Activate smooth-scroll polyfill here, because smooth scrolling could be enabled inside both HTML and JS
smoothscroll.polyfill()

// Calculate the year in the footer dynamically
YEAR_EL ? YEAR_EL.textContent = new Date().getFullYear() : console.warn(WARNING_MESSAGES[1])

// Add menu button functionality (on phone sized browsers) 
if (MENU_BUTTON_EL && HEADER_EL) 
{
    MENU_BUTTON_EL.addEventListener('click', () => 
    {
        HEADER_EL.classList.toggle('header__nav-menu-open')
    })
} 
else 
{
    console.warn(WARNING_MESSAGES[2])
}

// Smooth scrolling using JS, instead of hardcoding it inside the HTML
if (LINK_EL_LIST && HEADER_EL) 
{
    setupSmoothScroll(LINK_EL_LIST, () => 
    {
        if (HEADER_EL.classList.contains('header__nav-menu-open')) {
            HEADER_EL.classList.remove('header__nav-menu-open')
        }
    })
} 
else 
{
    console.warn(WARNING_MESSAGES[4])
}

// Setup sticky header
SECTION_HERO_EL ? setupStickyHeader(SECTION_HERO_EL) : console.warn(WARNING_MESSAGES[5])

// Fix the FLEXbox gap property missing in some Safari versions
checkFlexGap()
