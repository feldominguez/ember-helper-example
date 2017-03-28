import Ember from 'ember';

export function truncate(params, hash) {
    let begin = hash.begin;
    let maxLength = hash.maxLength;
    let inputText = params[0];
    let outputText = '';

    if (inputText.length > maxLength) {
        outputText = inputText.substr(begin, maxLength) + ' ...';
    } else {
        outputText = inputText + ' ...';
    }

    return outputText;

}

export default Ember.Helper.helper(truncate);