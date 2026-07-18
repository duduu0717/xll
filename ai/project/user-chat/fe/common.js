// js 不太严格
// 单引号 双引号 分号 类型声明 不强求
// js 不需要怎么学习，直接用
//console.log('我想去字节');
// 常量 数组 弱类型的语言
// [] 数组
// 数据
// 对象 object 拥有属性和方法  用{}表达 
let users = [
    // {   
    //     id: 1,
    //     name:"昌哥",
    //     hometown:"南昌",
    //     nickname:"昌哥nb666"
    // }, // 对象字面量,字面意思就能懂
    // {
    //     id:2,
    //     name:"胡航",
    //     hometown:"南昌",
    //     nickname:" 航哥"
    // },
    // {
    //  id: 3,
    //  name:"赵延祺",
    //  hometown:"新建",
    //  nickname:"赵蛋"

    // }

];

fetch('http://localhost:3000/users') //等
    .then(data => data.json()) //json化
    .then(data => {
        console.log(data);
        users =data;
        const oBody = document.querySelector('.table tbody');
        let i =1;
for (let user of users){
    oBody.innerHTML += `
    <tr>
        <td>${i}</td>
        <td>${user.name}</td>
        <td>${user.nickname}</td>
        <td>${user.hometown}</td>
    </tr>
    `
}

    })

// dom 期待动态的填入 编程
// dom 节点对象
// oBody o 表示类型
// 挂载点
const oBody = document.querySelector('.table tbody');
//console.log(oBody);
// 计数循环 快，cpu 计算规则
// 可读性差 太机械
// for (let i = 0; i < users.length; i++ ){
//     let users =users[i];
//     console.log(users);
// }
//js es6 新的for 循环  不需要计数
let i =1;
for (let user of users){
    oBody.innerHTML += `
    <tr>
        <td>${i}</td>
        <td>${user.name}</td>
        <td>${user.nickname}</td>
        <td>${user.hometown}</td>
    </tr>
    `
}