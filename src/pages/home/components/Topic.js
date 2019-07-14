import React, { PureComponent } from 'react';
import {TopicWrapper, TopicItem} from '../style.js';
import {connect} from 'react-redux';

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map(item => {
            return (
              /**这个get是哪个模块的方法？ */
              <TopicItem key={item.get('id')}>
                <img
                  className="topic-pic"
                  src={item.get('imgUrl')}
                  alt="无法加载图片"
                />
                {item.get('title')}
              </TopicItem>
            );
          })
        }
      </TopicWrapper>
    );
  }
}
const mapState = (state) => ({
  list:state.get('home').get('topicList')
})
export default connect(mapState, null)(Topic);
