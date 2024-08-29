const isLogin = true

function App () {
  return (
    <div className="App">
      {/* 逻辑与 && */}
      {isLogin && <span>this is span</span>}
      {/* 三元运算 */}
      {isLogin ? <span>jack</span> : <span>loading...</span>}
    </div>
  )
}

export default App
