import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  icon?: JSX.Element
  size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  icon,
  size = 'medium',
  $fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} $fullWidth={$fullWidth} $hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
