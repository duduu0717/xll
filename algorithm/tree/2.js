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
// 前序遍历
function preOrder(root) {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}
preOrder(a)
// 中序遍历
function inOrder(root) {
  if (!root) return;
  inOrder(root.left);     // 先遍历左子树
  console.log(root.val);  // 再访问根
  inOrder(root.right);    // 最后遍历右子树
}
inOrder(a);
// 后序遍历
function postOrder(root) {
  if (!root) return;
  postOrder(root.left);   // 先遍历左子树
  postOrder(root.right);  // 再遍历右子树
  console.log(root.val);  // 最后访问根
}

postOrder(a);


function levelOrder(root) {
  const queue = [];
  const res = [];
  if (!root) return res;
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return res;

}
const arr = levelOrder(a);
console.log(arr);