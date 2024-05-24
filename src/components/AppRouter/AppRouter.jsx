import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <ItemListContainer
              vision={
                'Productos de alta calidad importados para ventas al por mayor'
              }
            />
          }
        />
        <Route
          path='/category/:id'
          element={
            <ItemListContainer
              vision={
                'Productos de alta calidad importados para ventas al por mayor'
              }
            />
          }
        />
        <Route
          path='/item/:id'
          element={
            <ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
