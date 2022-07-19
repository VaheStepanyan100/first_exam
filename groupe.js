function groupe(arr, prop) {
     return arr.reduce((acc, el) => {
         acc[el[prop]] = acc[el[prop]] || [];
         acc[el[prop]].push(el)
         return acc;
    }, {});
}

console.log(groupe(arr, 'country'));
