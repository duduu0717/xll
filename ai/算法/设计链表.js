class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this._size = 0;
  // 创建永久的虚拟头节点
  this._dummy = new LinkNode(0, null);
};

// ========== 辅助方法：获取第 index 个节点 ==========
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size) return null;

  let cur = this._dummy;  // 从虚拟头出发，不需要每次 new 了！
  // 第一次从0开始再--
  while (index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};

// ========== 获取值 ==========
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this._size) return -1;
  return this.getNode(index).val;
};

// ========== 头部插入 ==========
MyLinkedList.prototype.addAtHead = function (val) {
  // 等价于 addAtIndex(0, val)
  const node = new LinkNode(val, this._dummy.next);
  this._dummy.next = node;
  this._size++;
};

// ========== 尾部插入 ==========
MyLinkedList.prototype.addAtTail = function (val) {
  // 找到最后一个节点（或 dummy 本身）
  let cur = this._dummy;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = new LinkNode(val, null);
  this._size++;
};

// ========== 任意位置插入 ==========
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return;
  if (index < 0) index = 0;

  // 找到 index 的前一个节点（index=0 时就是 dummy 本身）
  let prev = this._dummy;
  for (let i = 0; i < index; i++) {
    prev = prev.next;
  }
  prev.next = new LinkNode(val, prev.next);
  this._size++;
};

// ========== 删除 ==========
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size) return;

  // 找到 index 的前一个节点
  let prev = this._dummy;
  for (let i = 0; i < index; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  this._size--;
};