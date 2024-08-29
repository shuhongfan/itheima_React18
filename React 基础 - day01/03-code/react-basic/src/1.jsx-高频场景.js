// 项目的根组件
// App -> index.js -> public/index.html(root)

const count = 100

function getName () {
  return 'jack'
}

function App () {
  return (
    <div className="App">
      this is App
      {/* 使用引号传递字符串 */}
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>this is div</div>
    </div>
  )
}

export default App
