class HashTable{
    constructor(){
        this.table=new Array(5);
        this.itemNum=0;
    }

    resize=()=>{
        let newTable=new Array(this.table.length*2);
        this.table.forEach((item)=>{
            //item 有可能为null
            if(item){
                item.forEach(([key,value])=>{
                    const index=this._hashStringToInt(key,newTable.length);
                    if(newTable[index]){
                        newTable[index].push([key,value]);
                    }else{
                        newTable[index]=[[key,value]];
                    }
                })
            }
        })
        this.table=newTable;
    }
    setItem=(key,value)=>{
        this.itemNum++;
        let loadFactor=this.itemNum/this.table.length;

        console.log(loadFactor);
        
        //如果大于0.8 就对数组进行扩容
        if(loadFactor>0.8){
            console.log("resize happening");
            this.resize();
        }

        const index=this._hashStringToInt(key,this.table.length);
        if(this.table[index]){
            this.table[index].push([key,value]);
        }else{
            this.table[index]=[[key,value]];
        }

        console.log(this.table);
        
    }

    getItem=(key)=>{
        let index=this._hashStringToInt(key,this.table.length);
        if(this.table[index]){
            return this.table[index].find(elem=>elem[0]===key)[1];
        }
    }

    _hashStringToInt=(string,tableSize)=>{
        let hash=17;
        for(let i=0;i<string.length;i++){
            hash=(13*hash*string.charCodeAt(i))%tableSize
        }
        return hash;
    }

}

const myTable=new HashTable();
myTable.setItem("firstName","zhang");
myTable.setItem("shitName","wang");
myTable.setItem("fuke","wang");
myTable.setItem("h","35");

console.log("-----------------------");

console.log("table length before resize:",myTable.table.length);

myTable.setItem("BIBI","100");
console.log("table length after resize:",myTable.table.length);

