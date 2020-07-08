//什么时候使用array
/**
 * 优点:
 * 查询快，只要知道index
 * push 跟 pop 很快
 * 元素可以按顺序排列
 * 
 * 缺点:
 * 插入元素很慢
 * 删除元素很慢
 * 在一些语言中如果是固定长度的数组，会很不方便
 * 
 */



class MyArray{
    constructor(){
        this.length=0;
        this.data={};
    }

    get=(index)=>{
        return this.data[index];
    }

    push=(item)=>{
        this.data[this.length]=item;
        this.length++;
        return this.length
    }

    pop=()=>{
        let last_item=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--
        return last_item;
    }

    delete=(index)=>{
        let item=this.data[index];
        //删除一个元素之后，后面元素的index要发生变化
        this.shiftItems(index);
        this.length--;
    }

    shiftItems=(index)=>{
        
        for(let i=index;i <this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        //因为上面for 循环是赋值，而不是将元素移动，所以要将最后一个删掉
        //这里delete方法是数组自带的delete方法。
        delete(this.data[this.length-1])

    }

}

let newArray=new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("me");
console.log(newArray);

newArray.delete(1)
console.log(newArray);


// newArray.pop();
// console.log(newArray);
