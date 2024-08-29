// React.memo props比较机制

// 1. 传递一个简单类型的prop   prop变化时组件重新渲染

// 2. 传递一个引用类型的prop   比较的是新值和旧值的引用是否相等  当父组件的函数重新执行时，实际上形成的是新的数组引用

// 3. 保证引用稳定 -> useMemo 组件渲染的过程中缓存一个值

import { memo, useMemo, useState } from 'react'

const MemoSon = memo(function Son ({ list }) {
  console.log('子组件重新渲染了')
  return <div>this is Son {list}</div>
})


function App () {
  const [count, setCount] = useState(0)

  // const num = 100

  const list = useMemo(() => {
    return [1, 2, 3]
  }, [])

  return (
    <div className="App">
      <MemoSon list={list} />
      <button onClick={() => setCount(count + 1)}>change Count</button>
    </div>
  )
}

export default App
