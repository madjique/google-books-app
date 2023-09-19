import { NavigationContainer  as RootNavigationContainer} from '@react-navigation/native';
import Stack from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App(): JSX.Element {

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  })
  
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigationContainer>
        <Stack />
      </RootNavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
