import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 94px;
`;

export const Image = styled.Image.attrs(({ source }) => ({
  source
}))`
  position: absolute;
  width: 17.66px;
  height: 17.03px;
  top: 12px;
  right: 350px;
  z-index: 50;
`;

export const Search = styled.TextInput`
  background-color:  #D6D6D6;
  color: #707070;
  height: 42.83px;
  width: 304.98px;
  border-radius: 5.22px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 60px;
`;
