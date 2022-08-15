import Wrapper from '../../assets/wrappers/AdministrationPage'
import {
  AdministrationComponent,
  EditUserInformationModal,
} from '../../components/Administration'
import { Header } from '../../components/Global'
import { useAppContext } from '../../context/appContext'

const Administration = () => {
  const { showModal, dataModal } = useAppContext()

  return (
    <Wrapper>
      <Header title="Organization" />
      <AdministrationComponent />
      {showModal && dataModal === 'modal-edit-user' && (
        <EditUserInformationModal />
      )}
    </Wrapper>
  )
}

export default Administration
