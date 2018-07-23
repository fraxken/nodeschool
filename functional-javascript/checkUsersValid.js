/**
 * @typedef {Object} User
 * @property {String} id
 */

/**
 * @func checkUsersValid
 * @param {User[]} goodUsers good users
 * @returns {function(User[]): Boolean}
 */
function checkUsersValid(goodUsers) {
    /**
     * @func allUsersValid
     * @param {User[]} submittedUsers submitted users
     * @returns {Boolean}
     */
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(({ id }) => {
            return goodUsers.some((user) => user.id === id);
        });
    };
}

module.exports = checkUsersValid;
