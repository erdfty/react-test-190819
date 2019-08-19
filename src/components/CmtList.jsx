import React from 'react'

//导入 列表组件需要的 样式表
import cssobj from '@/css/cmtlist.less'


//导入 评论项 子组件
import CmtItem from '@/components/CmtItem'

import 'bootstrap/dist/css/bootstrap.css'

//使用class关键字，定义父组件
export default class CmtList extends React.Component{
	constructor(){
		super()
		this.state = {
			CommentList:[
				{id:1,user:'张三',content:'哈哈，沙发'},
				{id:2,user:'李四',content:'哈哈，板凳'},
				{id:3,user:'王五',content:'哈哈，凉席'},
				{id:4,user:'赵六',content:'哈哈，砖头'},
				{id:5,user:'田七',content:'哈哈，楼下山炮'},
			]
		}
	}

	render(){
		return <div>
			{/* 注意  在JSX中，如果想写行内样式了，不能 为style设置字符串的值 */}
			{/* 而是应该这么写 style={{ color: 'red' }} */}
			{/* 在行内样式中，如果是数组类型的样式，则可以不用引号包裹，如果是 字符串类型的 样式值，必须使用引号包裹 */}
			<h1 className={[cssobj.title,'test'].join(' ')}>这是评论列表组件</h1>
			{/*<button className={[bootcss.btn,bootcss['btn-primary']].join(' ')}>按钮</button>*/}
			<button className='btn btn-primary'>按钮</button>
			<div className="panel panel-primary"></div>
			{this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
		</div>
	}
}