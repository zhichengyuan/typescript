function take<T>(arr:T[],n:number) : T[] {
    if(n>arr.length){
        return arr;
    }
    const newArr:T[] = [];
    for(let i = 0;i < n;i++){
        newArr.push(arr[i])
    }
    return newArr;
}

const result = take<number>([1,3,4,5],2);
const result1 = take<string>(['12','wqw','sds'],2);

// const newArr = take([1,3,4,5],2);
// console.log(newArr);