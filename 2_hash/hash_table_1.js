class HashTable{
    constructor(){
        this.table=new Array(10);  //array的长度可以是4000
    }

    setItem=(key,value)=>{
        // 将字符串key转换成一个数字,来做index
        const index=this._hashStringToInt(key,this.table.length);
        if(this.table[index]){
            //如果index的地方有一个数组，就将新的 [key,value] 放入 数组里
            this.table[index].push([key,value]);
        }else{
            //如果index的地方没有一个数组，就将新的数组放在index这里
            this.table[index]=[[key,value]];
        }

        console.log(this.table);
        
    }

    getItem=(key)=>{
        let index=this._hashStringToInt(key,this.table.length);
        if(this.table[index]){
            return this.table[index].find(elem=>elem[0]===key)[1];
        }else{
            return null;
        }
    }

    _hashStringToInt=(string,tableSize)=>{
        let hash=17;
        for(let i=0;i<string.length;i++){
            //任何一个数取 tableSize 的余数，得到的余数结果的范围都是[0,tableSize)
            hash=(13*hash*string.charCodeAt(i))%tableSize
            console.log(hash);
        }
        //所以hash 的值都是在[0,tableSize) 这个区间
        //这个hash 将作为数组的index来使用

        console.log("----------------------");
        console.log(hash);
        return hash;
    }

}

const myTable=new HashTable();
myTable.setItem("firstName","zhang");
myTable.setItem("shitName","wang");
myTable.setItem("fuke","wang");
let result=myTable.getItem("firstName");
console.log(result);


// console.log(1019%20);  任何一个数取20 的余数，这个余数的范围都是 [0,20) 
//包含0 不包含 20
