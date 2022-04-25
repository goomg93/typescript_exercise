// @ts-check   // 자바스크립트 파일에서 타입스크립트의 타입체크만 사용하고 싶을때
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
}
/**
 * Exits the project
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
