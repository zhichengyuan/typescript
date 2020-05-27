class User {
    readonly id:number //不能改变
    pid?:string

    private _publishNumber:number = 3;//每天一共可以发多少篇文章
    private _curNumber:number = 0;//当前可以发布的文章数量

    constructor(public name:string, private _age:number,public gender:'男'|'女' = '男'){
        this.id = Math.random();
    }

    set age(value:number) {
        if(value < 0) {
            this._age = 0
        }else if (value > 200) {
            this._age = 200
        }else {
            this._age = Math.floor(value)
        }
    }

    get age(){
        return this._age
    }

    publish(title:string) {
        if(this._curNumber < this._publishNumber){
            console.log('发布一篇文章' + title);
            this._curNumber ++
        }else{
            console.log('今日发布文章以达到上限')
        }
    }
}

const u = new User("aa",2);
u.age = 15.2;
console.log(u.age);
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一'); 

