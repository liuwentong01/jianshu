import React, { PureComponent } from "react";
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import { actionCreators } from "../store";
import {Link} from 'react-router-dom';

/*后面添加评论点赞的iconfont */
class List extends PureComponent {
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              // 一直点击更多  key值会出错先用index
              //<a key={index} href="./detail"></a> 这样做路由也可以，但是性能不好
              <Link key={index} to={'/detail/'+ item.get('id')}>
                <ListItem >
                  <img
                    className="pic"
                    src={item.get("imgUrl")}
                    alt="图片无法显示"
                  />
                  <ListInfo>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc">{item.get("desc")}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() =>this.props.getMoreList(this.props.page)}>更多文字</LoadMore>
      </div>
    );
  }
}
const mapState = state => ({
  list: state.get("home").get("articleList"),
  page: state.get("home").get("articlePage")
});
const mapDispatch = (dispatch) => ({
  getMoreList(page){
    const action = actionCreators.getMoreList(page);
    dispatch(action);
  }
})
export default connect(mapState, mapDispatch)(List);
