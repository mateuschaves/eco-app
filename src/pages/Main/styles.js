import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-left: 28px;
`;

export const Title = styled.Text`
  font-size: ${props => (`${props.fontSize}` || '34px')};
  color: #707070;
  font-weight: bold;
  margin-top: 60px;
`;
