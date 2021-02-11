/*
 * @Author: Mr Chang
 * @Date: 2021-02-11 02:12:31
 * @LastEditTime: 2021-02-11 02:31:34
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \dataStructure\test\minHeap.spec.js
 */

 const MinHeap = require('../src/structure/minHeap')

describe('minHeap', () => {
  it('peek',() => {
    const heap = new MinHeap([4, 5, 8, 2])
    console.log(heap.nums)
    expect(heap.peek()).toBe(2)
  })
})