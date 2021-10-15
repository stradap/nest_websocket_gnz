interface IPriorityQueue<T> {
    insert(item: T, priority: number): void
    peek(): T
    pop(): T
    size(): number
    isEmpty(): boolean
  }

//Sorted Priority queue using array 
/* 
insert	O(n)
peek	O(1)
pop	O(1)
size	O(1)
isEmpty	O(1)i
*/
const priorityQueue = <T>(): IPriorityQueue<T> => {
    const data: [number, T][] = []
  
    return {
  
      insert: (i, p) => {
        if (data.length == 0) {
          data.push([p, i])
          return
        }
  
        for (let index = 0; index < data.length; index++) {
          if (index == data.length - 1) {
            data.push([p, i])
            return
          }
  
          if (data[index][0] > p) {
            data.splice(index, 0, [p, i])
            return
          }
        }
      },
  
      isEmpty: () => data.length == 0,
  
      peek: () => data.length == 0 ? null : data[0][1],
  
      pop: () => data.length == 0 ? null : data.pop()[1],
  
      size: () => data.length
    }
  }