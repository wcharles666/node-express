/*
 * @Description:
 * @Author: Charles
 * @Date: 2020-09-20 22:10:51
 * @LastEditTime: 2020-09-20 22:16:41
 * @FilePath: /GitHub/hello-ts/demo3.ts
 */
abstract class Skill {
  abstract skill();
}

class Waiter extends Skill {
  skill() {
    console.log("一般般就行");
  }
}

// suhdjdsh
class BaseTeacher extends Skill {
  skill() {
    console.log("长得好看就行");
  }
}
