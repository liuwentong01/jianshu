import React, { PureComponent } from 'react';
import {actionCreators} from './store'
import {connect} from 'react-redux';
import {DetailWrapper, Header, Content} from './style';

class Detail extends PureComponent {
  componentDidMount(){
    console.log(111);
    this.props.getDetail(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    );
  }
}
const mapState = (state) => ({
  title: state.get('detail').get('title'),
  content: state.get('detail').get('content')
})
const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreators.getDetail(id));
  }
})
export default connect(mapState, mapDispatch)(Detail);