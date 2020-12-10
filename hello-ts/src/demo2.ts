/*
 * @Description:
 * @Author: Charles
 * @Date: 2020-09-20 21:55:08
 * @LastEditTime: 2020-09-20 22:06:15
 * @FilePath: /GitHub/hello-ts/demo2.ts
 */
class jiejie {
  constructor(private _age: number) {}
  get age() {
    return this._age - 10;
  }

  set age(age: number) {
    this._age = age;
  }
}

const dajiao = new jiejie(28);
dajiao.age = 25;

console.log(dajiao.age);

/*
 * satic 方法可以不用new 实例
 */
class Girl {
  static sayLove() {
    return "I Love you!";
  }
}
Girl.sayLove();
