// React.memo

import { memo, useState } from "react"

// 1. 验证默认的渲染机制  子跟着父一起渲染

// 2. memo进行缓存  只有props发生变化的时候才会重新渲染 （不考虑context）

const MemoSon = memo(function Son () {
  console.log('我是子组件，我重新渲染了')
  return <div>this is son</div>
})

// function Son () {
//   console.log('我是子组件，我重新渲染了')
//   return <div>this is son</div>
// }

function App () {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      {/* <Son /> */}
      <MemoSon />
    </div>
  )
}

export default App
