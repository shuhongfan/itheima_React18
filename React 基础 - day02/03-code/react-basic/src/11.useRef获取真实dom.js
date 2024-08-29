// React中获取DOM

import { useRef } from "react"

// 1. useRef生成ref对象 绑定到dom标签身上

// 2. dom可用时，ref.current获取dom
// 渲染完毕之后dom生成之后才可用

function App () {
  const inputRef = useRef(null)
  const showDom = () => {
    console.dir(inputRef.current)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取dom</button>
    </div>
  )
}

export default App
