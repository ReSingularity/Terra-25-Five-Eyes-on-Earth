export function preloadImages(urls) {
    return Promise.all(urls.map(src => new Promise(res => {
        const img = new Image()
        img.onload = img.onerror = () => res(src)
        img.src = src
    })))
}