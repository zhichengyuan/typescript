class User {
    readonly id:number //不能改变
    name:string
    age:number
    gender:'男'|'女'
    pid?:string

    private publishNumber:number = 3;//每天一共可以发多少篇文章
    private curNumber:number = 0;//当前可以发布的文章数量

    constructor(name:string,age:number,gender:'男'|'女' = '男'){
        this.id = Math.random();
        this.name = name;
        this.age = age;
        this.gender = gender
    }

    publish(title:string) {
        if(this.curNumber < this.publishNumber){
            console.log('发布一篇文章' + title);
            this.curNumber ++
        }else{
            console.log('今日发布文章以达到上限')
        }
    }
}

const u = new User("aa",2);
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一'); 

