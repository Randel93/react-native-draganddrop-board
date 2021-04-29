import styled from 'styled-components/native'
import {
  color,
  fontFamily,
  fontSize
} from 'styled-system'

const EmptyWrapper = styled.View`
  justifyContent: center;
  alignItems: center;
  marginTop: 100;
`

const Paragraph = styled.Text`
  ${fontFamily};
  ${fontSize};
  ${color};
`

export {
  EmptyWrapper,
  Paragraph
}
