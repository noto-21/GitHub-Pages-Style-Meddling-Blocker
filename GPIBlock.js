document.addEventListener/*Listen for DOM Loading*/('DOMContentLoaded', () => 
{
    const observer = new MutationObserver/*Observe mutations to DOM*/(() => 
    {
        const styleElement = document.querySelector('style[data-styled]');//The change in question is the addition of a style tag with the attribute data-styled
        if (styleElement)//If it exists, remove it
        {
            styleElement.remove();
            observer.disconnect();//Stop observing mutations once the tag is removed
        }
    });
    
    observer.observe(document.head, {childList: true});//Observe changes in the head element when DOM Loads
});