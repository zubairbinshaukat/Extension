/**
 * @function
 * @param {string} [selector='img'] 
 * @returns {Promise} 
 */
export const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};
