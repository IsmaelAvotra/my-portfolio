import { ReactNode } from 'react'

interface TextSpanProps {
  children: ReactNode
  style?: React.CSSProperties
}

const TextSpan = ({ children, style }: TextSpanProps) => (
  <span style={style}>{children}</span>
)

export default TextSpan
