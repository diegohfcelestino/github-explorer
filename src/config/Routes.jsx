import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { AuthProvider, useAuth } from '../context/Auth';
import { SearchUser } from '../pages/SearchUser/SearchUser';
import { Home } from '../pages/Home/Home';

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        //Renderiza a pagina somente se user existir, caso contrário, redireciona para a página de login
        return user ? <Component {...props} /> : <Redirect to='/' />;
      }}
    />
  );
}

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path='/' exact component={Login} />
          <PrivateRoute path='/home' exact component={Home} />
          <PrivateRoute path='/search-users' exact component={SearchUser} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
