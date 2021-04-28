import styled from 'styled-components/native'
import {
  borderRadius,
  color,
  fontFamily,
  fontSize,
  marginRight,
  lineHeight
} from 'styled-system'

const ColumnWrapper = styled.View`
  paddingHorizontal: 8;
  ${borderRadius};
  maxWidth: 400;
  ${marginRight};
  ${props => `height: ${props.columnHeight}`}
`

const ParagraphWrapper = styled.View`
  alignItems: center;
  justifyContent: center;
`

const RowContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  paddingVertical: 18;
  paddingHorizontal: 10;
  justifyContent:center;

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
  width: 100%;
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
