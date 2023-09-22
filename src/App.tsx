import { NavigationContainer  as RootNavigationContainer} from '@react-navigation/native';
import Stack from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { AuthContextProvider } from './common/contexts/authCtx';

function App(): JSX.Element {

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  })
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <StatusBar hidden/>
        <RootNavigationContainer>
          <Stack />
        </RootNavigationContainer>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
