// 接口属性可以分头多次约束，可以合并
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dog: Animal = {
  name: '吴老狗',
  age: 1
}

// 类型名不能重复，只能定义一次
// type AnimaType = { age: number; }
// type AnimalType = { name: string; }