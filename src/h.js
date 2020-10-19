'use strict';

/**
 * Replaces every character in a string with 'h'.
 * This excludes punctuation, spaces, newlines and tabs.
 *
 * @param {string} str - The string to replace.
 * @returns {string} New string with replaced data.
 *
 * @example
 * let string = 'i love h!!!';
 * let hstring = h(string); // 'h hhhh h!!!'
 */

module.exports = str => {

    if (typeof str !== 'string') {
        throw new TypeError(`Expected 'string' but got '${typeof str}'`);
    }

    return str.replace(/[^\s\n\t.,/#!?$%^&*;:{}=\-`~()]/gu, 'h');
}