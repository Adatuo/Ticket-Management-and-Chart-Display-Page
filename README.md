# Ticket-Management-and-Chart-Display-Page
工单管理与图表展示页面（简化版）

## AI的使用
* 使用Copilot的Claude Sonnet4模型,在Home的Echarts模块,以及路由守卫,和login的UI布局,table

* Echarts组件的实例化由AI生成,使用pinia的共享状态管理,实现在管理员身份下删除row的时候,柱状图也同时改变
AI生成了Table的#bodyCell

## 最难的地方:
  * Claude Sonnet4模型目前还不能很好的用UI组件里的attribute进行布局,导致在生成布局的时候用始终达不到理想效果,查看Antd vue文档后才完成了布局.
  * 在路由守卫生成的时候AI吧登录的状态和鉴权写到了一起.后面debugger的时候发现了
  * 总的来说对于AI生成的代码,要更加清晰的描述,让AI知道调用哪里的模块和逻辑才能生成正确的代码

## 最满意的地方:
  由于没有接口,所以用pinia来控制数据状态再配合vue的响应式ref和v-if来进行登录鉴权成功实现了需求
