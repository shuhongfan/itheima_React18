import { forwardRef, useImperativeHandle, useRef } from "react"

// 子组件

const Son = forwardRef((props, ref) => {
  // 实现聚焦逻辑
  const inputRef = useRef(null)
  const focusHandler = () => {
    inputRef.current.focus()
  }

  // 把聚焦方法暴露出去
  useImperativeHandle(ref, () => {
    return {
      // 暴露的方法
      focusHandler
    }
  })
  return <input type="text" ref={inputRef} />
})


// 父组件
function App () {
  const sonRef = useRef(null)
  const focusHandler = () => {
    console.log(sonRef.current)
    sonRef.current.focusHandler()
  }
  return (
    <>
      <Son ref={sonRef} />
      <button onClick={focusHandler}>focus</button>
    </>
  )
}

export default App