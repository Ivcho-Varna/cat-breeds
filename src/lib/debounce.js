export default function(callback, delay) {
    let timeout = null;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}
