const DEFAULTS = {
    delay: 50,
    timeout: 1000,
};

/**
 * Accepts a function to evaluate after delay until timeout.
 * @param {function} checkFn Function to provide return value to evaluate truthy/falsey
 * @param {Object{}} options
 * @param {number=} options.delay Millisecond delay between evaluations
 * @param {number=} options.timeout Total timeout threshold in milliseconds to keep trying
 * @return Promise.resolve(return from checkFn) || Promise.reject(error)
 */
export default function waitFor(checkFn, options = {...DEFAULTS}) {
    const config = {...DEFAULTS, ...options};

    return new Promise((resolve, reject) => {
        const now = Date.now();
        let timeoutId;

        function delayAndCheck() {
            if (Date.now() - now < config.timeout) {
                timeoutId = window.setTimeout(check, config.delay);
            }
            else {
                window.clearTimeout(timeoutId);
                reject(new Error('checkFn did not pass within timeout'));
            }
        };

        function check() {
            const result = checkFn();

            if (result) {
                resolve(result);
            }
            else {
                delayAndCheck();
            }
        };

        check();
    });
}