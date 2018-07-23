/**
 * @typedef {Object} Message
 * @property {String} message
 */

/**
 * @func getShortMessages
 * @param {Message[]} messages messages
 * @returns {String[]}
 */
function getShortMessages(messages) {
    return messages.filter(({ message }) => message.length < 50).map(({ message }) => message);
}

module.exports = getShortMessages;

