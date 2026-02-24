import type { JSX } from 'react'
import Logo from '/assets/images/logo.png'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: {
    width: 60,
    height: 60,
  },
  md: {
    width: 120,
    height: 120,
  },
  lg: {
    width: 180,
    height: 180,
  },
}

const logo: React.FC<LogoProps> = ({ size = 'sm' }): JSX.Element => {
  return (
    <img
      src={Logo}
      width={sizes[size].width}
      height={sizes[size].height}
      alt=''
    />
  )
}

export default logo
