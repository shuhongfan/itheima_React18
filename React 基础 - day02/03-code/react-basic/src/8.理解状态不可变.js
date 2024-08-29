import { useState } from 'react'

function App () {
  let [count, setCount] = useState(0)

  const handleClick = () => {
    // 直接修改 无法引发视图更新
    // count++
    // console.log(count)
    setCount(count + 1)
  }

  // 修改对象状态
  const [form, setForm] = useState({ name: 'jack' })

  const changeForm = () => {
    // 错误写法：直接修改
    // form.name = 'john'
    // 正确写法：setFrom 传入一个全新的对象
    setForm({
      ...form,
      name: 'john'
    })
  }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  )
}

export default App
