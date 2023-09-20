import { StackNavigation } from '../common/types'
import { useNavigation } from '@react-navigation/native';

const Redirect = ({to} : RedirectProps) => {
  const { navigate } = useNavigation<StackNavigation>(); 
  return navigate(to)
}

interface RedirectProps {
  to :string
}

export default Redirect