import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useProjectContext } from '../../context/projectContext'

const SelectComponent = ({ options }) => {
  const animatedComponents = makeAnimated()

  const { handleChangeSelect } = useProjectContext()

  return (
    <Select
      closeMenuOnSelect={false}
      onChange={(e) => handleChangeSelect(e)}
      components={animatedComponents}
      isMulti
      options={options}
      className="form-select"
    />
  )
}

export default SelectComponent
