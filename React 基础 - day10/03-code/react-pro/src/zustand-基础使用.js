// zustand
import { create } from 'zustand'

// 1. 创建store
// 语法容易出错
// 1. 函数参数必须返回一个对象 对象内部编写状态数据和方法
// 2. set是用来修改数据的专门方法必须调用它来修改数据
// 语法1：参数是函数 需要用到老数据的场景   
// 语法2：参数直接是一个对象  set({ count: 100 })

const useStore = create((set) => {
  return {
    // 状态数据
    count: 0,
    // 修改状态数据的方法
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    }
  }
})

// 2. 绑定store到组件
// useStore => { count, inc }

function App () {
  const { count, inc } = useStore()
  return (
    <>
      <button onClick={inc}>{count}</button>
    </>
  )
}

export default App