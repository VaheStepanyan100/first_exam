function removeDups(arr) {
    return arr.filter((el, index) => {
         return arr.indexOf(el) === index;
    })
};