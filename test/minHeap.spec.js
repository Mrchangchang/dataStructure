/*
 * @Author: Mr Chang
 * @Date: 2021-02-11 02:12:31
 * @LastEditTime: 2021-02-16 22:59:57
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \dataStructure\test\minHeap.spec.js
 */

 const MinHeap = require('../src/heap/minHeap')

describe('minHeap', () => {
  it('peek',() => {
    const heap = new MinHeap([4, 5, 8, 2])
    console.log(heap.nums)
    expect(heap.peek()).toBe(2)
  })
})