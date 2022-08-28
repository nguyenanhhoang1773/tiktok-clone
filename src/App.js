import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import publicRoutes from '~/pages/Router';
import DefaultLayout from '~/Layout/DefaultLayout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(({ path, Component, Layout = DefaultLayout }, index) => {
            if (Layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
