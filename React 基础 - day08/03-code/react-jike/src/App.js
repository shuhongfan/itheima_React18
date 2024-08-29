
function App () {
  const clickHandler = () => {
    console.log('button按钮点击了')
  }
  return (
    <button onClick={clickHandler}></button>
  )
}

export default App