function removeAllfalseValue(object) {
    try {
        for (key in object) {
            if (typeof (object[key]) === 'number' && object[key] == 0) {
                delete object[key]
            }
            else if (typeof (object[key]) === 'boolean' && object[key] == false) {
                delete object[key]
            }
            else if (object[key] == null || object[key] == '') {
                delete object[key]
            }
            else if (Array.isArray(object[key])) {
                for (let i in object[key]) {
                    if (object[key][i] == false || object[key][i] == '' ){
                        object[key].splice(i,1);
                    }
                }
            }
            else if (typeof (object[key]) == 'object') {
                for (k in object[key]) {
                    if (object[key][k] == 0) {
                        delete object[key][k]
                    }
                }
            }
        }

        return console.log(object)
    } catch (error) {
        console.log("Error=========>>", error);
    }
}

removeAllfalseValue({
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
})