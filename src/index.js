import React from 'react'
import ReactDOM from 'react-dom'

//导入 评论 组件
import CmtList from '@/components/CmtList'

//3.调用render函数渲染
ReactDOM.render(<div>
	<CmtList></CmtList>
	</div>, document.getElementById('app'))