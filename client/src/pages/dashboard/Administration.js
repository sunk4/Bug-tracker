import Wrapper from '../../assets/wrappers/AdministrationPage'
import {
  AdministrationComponent,
  EditUserInformation,
} from '../../components/Administration'

const Administration = () => {
  return (
    <Wrapper>
      <AdministrationComponent />
      <EditUserInformation />
    </Wrapper>
  )
}

export default Administration
