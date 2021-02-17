/*
 * @Author: Mr Chang
 * @Date: 2021-02-16 23:05:01
 * @LastEditTime: 2021-02-17 01:29:03
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \dataStructure\src\tree\binarySearchTree.js
 */
class Node {
  constructor (key) {
    // 节点值
    this.key = key
    this.left = null
    this.right = null
  }
}
/**
 * 二叉搜索树
 */
class BinarySearchTree {
  root = null
  constructor () {
  }
  // 插入节点
  insert (key) {
    if (!this.root) {
      this.root = new Node(key)
      return
    } else {
      this._insertNode(this.root, key)
    }
  }
  _insertNode (root, key) {
    if (root.key > key) {
      if (!root.left) {
        root.left = new Node(key)
      } else {
        this._insertNode(root.left, key)
      }
    } else {
      if (!root.right) {
        root.right = new Node(key)
      } else {
        this._insertNode(root.right, key)
      }
    }
  }
  // 查找节点
  search (key) {
    return this._searchNode(this.root, key)
  }
  // 查找节点
  _searchNode (root, key) {
    if (root.key > key) {
      return  this._searchNode(root.left, key)
    } else if (root.key < key) {
      return this._searchNode(root.right, key)
    } else {
      return root
    }
  }
  // 中序遍历所有节点
  inOrderTraverse (callback) {
    this._inOrderTraverse(this.root, callback)
  }
  _inOrderTraverse (root, callback) {
    if (!root) {
      return
    }
    this._inOrderTraverse(root.left, callback)
    callback && callback(root)
    this._inOrderTraverse(root.right, callback)
  }
  // 前序遍历所有节点
  preOrderTraverse (callback) {
    this._preOrderTraverse(this.root, callback)
  }
  _preOrderTraverse (root, callback) {
    if (!root) {
      return
    }
    callback && callback(root)
    this._preOrderTraverse(root.left, callback)
    this._preOrderTraverse(root.right, callback)
  }
  // 后序遍历所有节点
  postOrderTraverse () {

  }
  _postOrderTraverse (root, callback) {
    if (!root) {
      return
    }
    this._postOrderTraverse(root.left, callback)
    this._postOrderTraverse(root.right, callback)
    callback && callback(root)
  }
  // 返回最小节点
  min () {
    if (!this.root) {
      return null
    }
    return this._min(this.root)
  }
  _min (root){

    let node = root.left
    while(node.left) {
      node = node.left
    }
    return node
  }
  // 返回最大节点
  max () {
    if (!this.root) {
      return null
    }
    return this._max(this.root)
  }
  _max (root) {
    let node = root.right
    while (node.right) {
      node = node.right
    }
    return node
  }
  // 删除节点
  remove (key) {
    if (this.root) {
      return this._removeNode(this.root, key)
    } else {
      return null
    }
  }
  _removeNode (node, key) {
    if (node.key > key) {
      node.left = this._removeNode(node.left, key)
    } else if (node.key < key) {
      node.right = this._removeNode(node.right, key)
    } else {
      if (!node.left && !node.right) {
        return null
      } else if (node.left && node.right) {
        let temp = node.left
        while (temp.right) {
          temp = temp.right
        }
        temp.right = node.right
        return node.left
      } else {
        return node.left || node.right
      }
    }
  }
}