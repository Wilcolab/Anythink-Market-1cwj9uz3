function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+/g, ' ') // Replace underscores, hyphens, and spaces with a single space
        .trim()
        .toLowerCase()
        .split(' ')
        .map((word, idx) => {
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Examples:
// toCamelCase('first name')      // 'firstName'
// toCamelCase('user_id')         // 'userId'
// toCamelCase('SCREEN_NAME')     // 'screenName'
// toCamelCase('mobile-number')   // 'mobileNumber'