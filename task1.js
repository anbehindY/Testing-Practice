const stringLength = (string) => {
    if (string.length >= 1 && string.length < 11){
        return string.length;
    } else {
        throw new Error('String length out of range');
    }
}

module.exports = stringLength;