import React, { PureComponent } from 'react';
import {RecomendWrapper, RecomendItem} from '../style';
import {connect} from 'react-redux';

class Recomend extends PureComponent {
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