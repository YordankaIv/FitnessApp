import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import RootNavigation from './navigation/RootNavigation';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <RootNavigation />
        </QueryClientProvider>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
