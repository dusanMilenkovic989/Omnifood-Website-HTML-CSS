/**
 * @description Sets up a sticky header. Non-reusable helper function, with a purpose of abstracting portion of the code from the main file
 * @param {HTMLElement} target - An HTML element which intersection will be observed against the root element. In this case - the Hero section against the viewport
 * @returns {void} - Has no return value
 */

const setupStickyHeader = (target) => 
{
    const OBSERVER = new IntersectionObserver(([{ isIntersecting }]) =>
    {
        isIntersecting ? document.body.classList.remove('sticky') : document.body.classList.add('sticky')
    }, 
    {
        root: null,
        threshold: 0,
        rootMargin: '-80px'
    })

    OBSERVER.observe(target)
}

export { setupStickyHeader as default }