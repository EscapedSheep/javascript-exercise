import Person from './person';
// TODO 14: 在这里写实现代码
export default class Worker extends Person {
  constructor(name, age) {
    super(name, age);
    this.introduce = () => {
      return 'I am a Worker. I have a job.';
    };
  }
}
