import styled from 'styled-components/native'
import {StyleSheet} from 'react-native';
import {
  borderRadius,
  color,
  fontFamily,
  fontSize,
  marginRight,
  lineHeight
} from 'styled-system'

const ColumnWrapper = styled.View`
  ${borderRadius};
  maxWidth: 400;
  ${marginRight};
  ${props => `height: ${props.columnHeight}`}
  borderWidth: ${StyleSheet.hairlineWidth};
  borderColor: #C3C3C3;
  overflow: hidden;  
`


const ParagraphWrapper = styled.View`
  alignItems: center;
  justifyContent: center;
`

const RowContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent:center;
  backgroundColor: #3F87C7;
  overflow: hidden;
  marginBottom: 10;
`  

const Paragraph = styled.Text`
  ${fontFamily};
  ${fontSize};
  ${color};
  ${lineHeight};
`
const ColumnHeader = styled.Text`
  ${fontFamily};
  ${fontSize};
  ${lineHeight};
  color: #ffffff;
  background-color: #3F87C7;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;
`
const RowWrapper = styled.View`
  opacity: 1;
`

const SumWrapper = styled.View`
  marginLeft: 8;
  alignItems: center;
  justifyContent: center;
`

export {
  ColumnWrapper,
  ParagraphWrapper,
  Paragraph,
  RowContainer,
  RowWrapper,
  SumWrapper,
  ColumnHeader
}
