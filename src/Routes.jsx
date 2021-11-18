import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { AuthProvider, useAuth } from "./context/Auth";
import { Home } from "./pages/Home";

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        //Renderiza a pagina somente se user existir, caso contrário, redireciona para a página de login
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Home} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
