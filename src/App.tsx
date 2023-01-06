import { ApolloProvider } from '@apollo/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MenuContext from './contexts/MobileMenuContext';
import { client } from './libs/apollo';
import { Home } from './pages/Home';
import Projects from './pages/Projects';

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
  ]);

  return (
    <>
      <ApolloProvider client={client}>
        <MenuContext>
          <RouterProvider router={router} />
        </MenuContext>
      </ApolloProvider>      
    </>
  );
}

export default App;
