// react + ts

import { useState } from 'react'

type User = {
  name: string
  age: number
}

function App() {
  // 1. 限制初始值的类型
  // const [user, setUser] = useState<User>({
  //   name: 'jack',
  //   age: 18,
  // })
  // const [user, setUser] = useState<User>(() => {
  //   return {
  //     name: 'jack',
  //     age: 18,
  //   }
  // })

  const [user, setUser] = useState<User>({
    name: 'jack',
    age: 18,
  })

  const changeUser = () => {
    setUser(() => ({
      name: 'john',
      age: 28,
    }))
  }

  return <>this is app {user.name}</>
}

export default App
