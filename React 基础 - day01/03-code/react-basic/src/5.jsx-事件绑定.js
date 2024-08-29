
function App () {
  // 基础绑定
  // const handleClick = () => {
  //   console.log('button被点击了')
  // }

  // 事件参数e
  // const handleClick = (e) => {
  //   console.log('button被点击了', e)
  // }

  // 传递自定义参数
  // const handleClick = (name) => {
  //   console.log('button被点击了', name)
  // }

  // 既要传递自定义参数 而且还要事件对象e
  const handleClick = (name, e) => {
    console.log('button被点击了', name, e)
  }
  return (
    <div className="App">
      <button onClick={(e) => handleClick('jack', e)}>click me </button>
    </div>
  )
}

export default App
