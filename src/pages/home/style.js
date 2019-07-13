import styled from 'styled-components';

export  const  HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft  = styled.div`
  float: left;
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;


export const TopicWrapper  = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -15px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 15px;
  margin-bottom: 10px;
  background-color: #f7f7f7;
  color: black;
  font-size: 14px;
  border: 1px solid #000;
  /* border-radius: 50%; */
  .topic-pic{
    float: left;   /*浮动不会影响文字*/
    width: 32px;
    height: 32px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    float: right;
    width: 125px;
    height: 100px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;


export const RecomendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecomendItem = styled.div`
  width: 280px;
  height: 50px;
  background-image: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;