import { ApolloProvider } from '@apollo/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { LangContextProvider } from './contexts/LanguageContext';
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
        <LangContextProvider>
          <MenuContextProvider>
            <RouterProvider router={router} />
          </MenuContextProvider>
        </LangContextProvider>
      </ApolloProvider>      
    </>
  );
}

export default App;
