/**
 * @description Helper function tasked with checking if Flexbox gap property is supported by a browser, and adding a fix class if not. Some Safari versions in the past did not support the Flexbox gap property
 * @returns {void} - Has no return value
 */

const checkFlexGap = () =>
{
    const FLEX = document.createElement('div')
    FLEX.style.display = 'flex'
    FLEX.style.flexDirection = 'column'
    FLEX.style.rowGap = '1px'
  
    FLEX.appendChild(document.createElement('div'))
    FLEX.appendChild(document.createElement('div'))
  
    document.body.appendChild(FLEX)
    const IS_SUPPORTED = FLEX.scrollHeight === 1
    FLEX.parentNode.removeChild(FLEX)
    console.log(`Is the Flexbox gap supported? => ${IS_SUPPORTED}`)
  
    if (!IS_SUPPORTED) 
    {
        document.body.classList.add('no-flexbox-gap')
    }
}

export { checkFlexGap as default }