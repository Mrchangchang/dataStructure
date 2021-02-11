/*
 * @Author: Mr Chang
 * @Date: 2021-02-11 01:39:55
 * @LastEditTime: 2021-02-11 17:30:01
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \dataStructure\src\structure\minHeap.js
 */
module.exports = class MinHeap {
  constructor (nums = []) {
    this.nums = []
    this.size = 0
    for (let num of nums) {
      this.push(num)
    }
  }
  peek () {
    return this.nums[0]
  }
  push (num) {
    // 添加到队尾
    this.nums.push(num)
    this.size++
    this.heapifyUp(this.size -1)
  }
  pop () {
    // 与队尾元素交换
    this.nums[0] = this.nums[this.size -1]
    this.nums.pop()
    this.size--
    this.heapifyDown(0)
  }
  heapifyUp (index) {
    let parentIndex = (index - 1) >> 1
    // 如果父级大于子节点
    if (this.nums[parentIndex] > this.nums[index]) {
      // 交换
      const temp = this.nums[index]
      this.nums[index] = this.nums[parentIndex]
      this.nums[parentIndex] = temp
      // 递归操作
      this.heapifyUp(parentIndex)
    }
  }
  heapifyDown (index) {
    let smallLast = index
    for (let childIndex of [index * 2 +1, index *2 + 2]) {
      if (childIndex < this.size && this.nums[childIndex] < this.nums[smallLast]) {
        smallLast = childIndex
      }
    }
    // 如果父节点大于子节点
    if (this.nums[index] > this.nums[smallLast]) {
      // 交换
      [this.nums[index], this.nums[smallLast]] = [this.nums[smallLast], this.nums[index]]
      this.heapifyDown(smallLast)
    }
  }
  size () {
    return this.size
  }
}