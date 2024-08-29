// 父传子
// 1. 父组件传递数据  子组件标签身上绑定属性
// 2. 子组件接收数据  props的参数

function Son (props) {
  // props：对象里面包含了父组件传递过来的所有的数据
  // { name:'父组件中的数据'}
  console.log(props)
  return <div>this is son, {props.name}, jsx: {props.child}</div>
}


function App () {
  const name = 'this is app name'
  return (
    <div>
      <Son
        name={name}
        age={18}
        isTrue={false}
        list={['vue', 'react']}
        obj={{ name: 'jack' }}
        cb={() => console.log(123)}
        child={<span>this is span</span>}
      />
    </div>
  )
}

export default App
