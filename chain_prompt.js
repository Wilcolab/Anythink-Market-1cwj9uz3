/**
 * Converts a string from camelCase, PascalCase, or space-separated words to kebab-case.
 * Returns an empty string for non-string inputs.
 * @param {string} str
 * @returns {string}
 */
function toKebabCase(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase & PascalCase
        .replace(/[\s_]+/g, '-')                // spaces & underscores
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2') // ABBRWord -> ABBR-Word
        .toLowerCase();
}