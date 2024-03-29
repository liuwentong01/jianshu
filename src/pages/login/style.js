import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 67px;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 220px;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  background-color: #3194d0;
  border-radius: 15px;
  margin-top: 10px;
  text-align: center;
`;

