import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logo from '../../assets/logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransaction } from '../NewTransaction'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransaction />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
