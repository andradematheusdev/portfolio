import { ApolloProvider } from '@apollo/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { MenuContextProvider }  from './contexts/MobileMenuContext';
import { client } from './libs/apollo';
import { Challenges, Home, Projects } from './pages/';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/challenges',
      element: <Challenges />
    },
  ]);

  return (
    <>
      <ApolloProvider client={client}>
        <MenuContextProvider>
          <RouterProvider router={router} />
        </MenuContextProvider>
      </ApolloProvider>      
    </>
  );
}

export default App;
