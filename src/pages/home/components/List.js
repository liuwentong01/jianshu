import React, { Component } from "react";
import {ListItem, ListInfo} from '../style';
import {connect} from 'react-redux';

/*后面添加评论点赞的icon-font */
class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
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
      </div>
    );
  }
}
const mapState = (state) =>({
  list: state.get('home').get('articleList')
});
export default connect(mapState, null)(List);
