//因为只新建立了一个i变量所以 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

boooo([1,2,3,4,5,6,7])

//有新建数据结构array 有新建变量 所以 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)