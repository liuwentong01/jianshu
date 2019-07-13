import React, { Component } from 'react';
import {RecomendWrapper, RecomendItem} from '../style';
import {connect} from 'react-redux';

class Recomend extends Component {
  render() {
    return (
      <RecomendWrapper>
      {
        this.props.list.map((item) => {
          return (
            <RecomendItem imgUrl={item.get('recomendUrl')}  id={item.get('id')} />
          );
        })
      }
      </RecomendWrapper>
    );
  }
}
const mapState = (state) => ({
  list:state.get('home').get('recomendList')
});
export default connect(mapState,null)(Recomend);