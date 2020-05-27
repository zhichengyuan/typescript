class User {
    readonly id:number //不能改变
    pid?:string

    private publishNumber:number = 3;//每天一共可以发多少篇文章
    private curNumber:number = 0;//当前可以发布的文章数量

    constructor(public name:string, public age:number,public gender:'男'|'女' = '男'){
        this.id = Math.random();
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

