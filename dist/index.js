class User {
    constructor(name, _age, gender = '男') {
        this.name = name;
        this._age = _age;
        this.gender = gender;
        this._publishNumber = 3;
        this._curNumber = 0;
        this.id = Math.random();
    }
    set age(value) {
        if (value < 0) {
            this._age = 0;
        }
        else if (value > 200) {
            this._age = 200;
        }
        else {
            this._age = Math.floor(value);
        }
    }
    get age() {
        return this._age;
    }
    publish(title) {
        if (this._curNumber < this._publishNumber) {
            console.log('发布一篇文章' + title);
            this._curNumber++;
        }
        else {
            console.log('今日发布文章以达到上限');
        }
    }
}
const u = new User("aa", 2);
u.age = 15.2;
console.log(u.age);
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
u.publish('文章一');
