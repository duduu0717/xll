function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

// 1. 定义节点构造器
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// 2. 逐个创建所有节点（a~g）
const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");
const g = new TreeNode("g");

// 3. 建立引用关系（核心：左右引用严格区分，不可互换）
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;   