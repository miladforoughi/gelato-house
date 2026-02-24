import Container from '../base/container/container'
import { Button } from '../base/button/button'
import Logo from '../base/logo/logo'

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className='flex justify-between items-center py-2'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='flex gap-2 [&>Button:not(:last-child)]:hidden md:[&>Button:not(:last-child)]:block'>
            <Button variant='text'>سفارش اینترنتی</Button>
            <Button variant='text'>قوانین سایت</Button>
            <Button variant='contained'>ورود</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
