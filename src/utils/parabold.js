let createBall = (left, top, Box) => {
    //创建小球元素
    let Ball = document.createElement('div')
    //设置小球的样式
    Ball.style.position = 'absolute'
    Ball.style.left = left + 'px'
    Ball.style.top = top + 'px'
    Ball.style.width = '20px'
    Ball.style.height = '20px'
    Ball.style.borderRadius = '50%'
    Ball.style.backgroundColor = '#FFAA33'
    //贝塞尔曲线
    //小球动画曲线
    Ball.style.transition = "left .7s linear, top .7s cubic-bezier(0.5,-0.5,1,1)"
    //最终小球设置完毕后添加到DOM元素中
    document.body.appendChild(Ball)
    //添加动画样式属性
    setTimeout(() => {
        Ball.style.left = Box.offsetLeft + Box.offsetWidth / 2 + "px"
        Ball.style.top = Box.offsetTop + "px"
    }, 0)
    //动画结束后，删除自己
    //ontransitionend事件，是在transition过度完之后执行的
    Ball.ontransitionend = function () {
        Ball.remove()
    }
}
 
//传入两个参数分别为：当前点击的元素、和小球飞入到盒子的元素（小球动画结束的位置）
const Add = (e, Box) => {
    // x,y指的是小球的起始坐标
    let x = e.clientX
    let y = e.clientY
    createBall(x, y, Box)
}
 
export default Add