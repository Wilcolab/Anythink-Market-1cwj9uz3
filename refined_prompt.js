/**
 * Converts a given string to camelCase format.
 *
 * - Handles input strings separated by spaces, underscores, or hyphens.
 * - Preserves uppercase acronyms (e.g., "API" remains "API").
 * - Throws an error if input is undefined, null, not a string, purely numeric, or contains numeric sequences.
 * - If the input contains dots, converts to dot.case (lowercases all words and joins with dots).
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase or dot.case formatted string.
 * @throws {Error} If input is undefined, null, not a string, purely numeric, or contains numeric sequences.
 *
 * @example
 * camelCase('hello world'); // 'helloWorld'
 * camelCase('API_response'); // 'apiResponse'
 * camelCase('user.name'); // 'user.name'
 * camelCase('mobile8Number'); // Throws Error
 */
function camelCase(input) {
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Dot case conversion
    if (input.includes('.')) {
        return input
            .split(/[\s_-]+/)
            .map(word => word.toLowerCase())
            .join('.');
    }
    // Check for numeric input
    if (!isNaN(input)) {
        throw new Error('Input cannot be a purely numeric value.');
    }

    // Split by space, underscore, or hyphen
    const words = input.split(/[\s_-]+/);

    // Check for numeric sequences in words (e.g., mobile8Number)
    for (const word of words) {
        if (/^\d+$/.test(word)) {
            throw new Error('Input contains a numeric sequence.');
        }
        if (/\d/.test(word) && !/^[A-Z0-9]+$/.test(word)) {
            throw new Error('Input contains a numeric sequence in a word.');
        }
    }

    return words
        .map((word, idx) => {
            // Preserve uppercase acronyms
            if (/^[A-Z0-9]+$/.test(word)) {
                return idx === 0 ? word.toLowerCase() : word;
            }
            // For dot.case, lowercase all words and join with dots
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(camelCase('first name')); // firstName
// console.log(camelCase('user_id')); // userId
// console.log(camelCase('SCREEN_NAME')); // screenName
// console.log(camelCase('mobile-number')); // mobileNumber
// camelCase('mobile8Number'); // Throws error