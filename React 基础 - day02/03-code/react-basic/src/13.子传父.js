// 核心：在子组件中调用父组件中的函数并传递实参

import { useState } from "react"


function Son ({ onGetSonMsg }) {
  // Son组件中的数据
  const sonMsg = 'this is son msg'
  return (
    <div>
      this is Son
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

function App () {
  const [msg, setMsg] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
  return (
    <div>
      this is App, {msg}
      <Son onGetSonMsg={getMsg} />
    </div>
  )
}

export default App
