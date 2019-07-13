import React, { Component } from "react";
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import { actionCreators } from "../store";

/*后面添加评论点赞的icon-font */
class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              // key值出错先用index
              <ListItem key={index}>
                <img className="pic" src={item.get('imgUrl')} alt="图片无法显示" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">
                    {item.get('desc')}
                  </p>
                </ListInfo>
              </ListItem>
            )
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
