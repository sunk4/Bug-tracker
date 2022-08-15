import Wrapper from '../../assets/wrappers/AdministrationPage'
import {
  AdministrationComponent,
  EditUserInformation,
} from '../../components/Administration'
import { Header } from '../../components/SharedLayout'

const Administration = () => {
  return (
    <Wrapper>
      <Header title="Organization" />
      <AdministrationComponent />
      <EditUserInformation />
    </Wrapper>
  )
}

export default Administration
