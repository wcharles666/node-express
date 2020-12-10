/*
 * @Description:
 * @Author: Charles
 * @Date: 2020-09-19 14:06:38
 * @LastEditTime: 2020-09-20 22:24:35
 * @FilePath: /GitHub/hello-ts/src/demo1.ts
 */

// function jsPang() {
//   let web: string = "hello ts";
//   console.log(web);
// }

// jsPang();

// // static Typing 静态类型,不可改变的

// let count: number = 1;

// // 继承了number上的属性和方法

// // count = "dsds";

// interface X1 {
//   name: string;
//   age: number;
// }

// const classMate: X1 = {
//   name: "sdsd",
//   age: 15,
// };

// function getTotal(one: number, two: number): number {
//   return 2;
// }

// function fornever(): never {
//   while (true) {}
//   console.log("hello world");
// }

// const numberArr = [1, 2, 3];

// const stringArr: string[] = ["a", "sv", "ds"];

// const arr: (number | string)[] = [1, "string", 2];

// // type alias 类型别名

// type Lady = { name: string; age: number };

// const xiaokoe: Lady[] = [{ name: "李秀英", age: 10 }];

// // 元组的概念

// const jiejie: [String, String] = [12, "sdhsh"];

// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistLine: number;
//   [propname: string]: any;
//   say(): string;
// }

// const girl: Girl = {
//   name: "dsd",
//   age: 18,
//   bust: 18,
//   waistLine: 100,
//   sex: "女",
//   say() {
//     return "sds";
//   },
// };

// interface Teacher extends Girl {
//   teach(): string;
// }

// class XiaoJiee implements Girl {
//   name = "sdjs";
//   age = 18;
//   bust = 18;
//   waistLine = 100;
//   say() {
//     return "sds";
//   }
// }

class Person {
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    super("teacher");
  }
}

const teacher = new Teacher(18);
console.log(teacher);
const person = new Person("jspang");
console.log(person);
