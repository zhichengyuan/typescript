class User {
    constructor(name, age, gender = '男') {
        this.publishNumber = 3;
        this.curNumber = 0;
        this.id = Math.random();
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    publish(title) {
        if (this.curNumber < this.publishNumber) {
            console.log('发布一篇文章' + title);
            this.curNumber++;
        }
        else {
            console.log('今日发布文章以达到上限');
        }
    }
}
const u = new User("aa", 2);
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
