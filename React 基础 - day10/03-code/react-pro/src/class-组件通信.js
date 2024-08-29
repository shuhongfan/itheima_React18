// Class API 父子通信

import { Component } from "react"
// 1. 父传子  直接通过prop子组件标签身上绑定父组件中的数据即可
// 2. 子传父  在子组件标签身上绑定父组件中的函数，子组件中调用这个函数传递参数

// 总结
// 1. 思想保持一致
// 2. 类组件依赖于this


// 子组件
class Son extends Component {
  render () {
    // 使用this.props.msg
    return <>
      <div>我是子组件 {this.props.msg}</div>
      <button onClick={() => this.props.onGetSonMsg('我是son组件中的数据')}>sendMsgToParent</button>
    </>
  }
}

// 父组件
class Parent extends Component {
  state = {
    msg: 'this is parent msg'
  }

  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }

  render () {
    return <div>我是父组件<Son msg={this.state.msg} onGetSonMsg={this.getSonMsg} /></div>
  }
}


function App () {
  return (
    <>
      <Parent />
    </>
  )
}

export default App