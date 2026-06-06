function Greeting(name) {
  console.log(this);
  this.name = name;
}
Greeting.prototype.say = function () {
  console.log(`我叫${this.name}, 很高兴认识你`);
}
Greeting.prototype.work = function () {
  console.log(`我叫${this.name}, 我正在工作`);
}
const zzh = new Greeting('张志和');
console.log(zzh.name);
zzh.say();
zzh.work();