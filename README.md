## hi

`asd`
[asd]
(asd)

-   hahaha
-   hi

## 我测试过的东西：

-   Test 等 transition 结束，才可以切换 view
-   刷新一下页面，如果在 menu 是否可以切换成 home。
-   刷新页面时，左右按钮的位置是否在中间。按钮是否正常 transition 进来

-   home 翻页的时候，应该等一页动画差不多翻完，才会记录下一个翻页 wheel event。 （以防用户不停的触发 wheel event）

`简单测试`

-   切换 view，如果是当前 path 的，就没反应。如果是不同的 path，就会出现 transition。并且 transition 的动画方向
-   页面刷新时候，transition 会挡住 top-nav，其他时候，不会
-   放大屏幕时候，scroll to view 会下滑而且消失。
