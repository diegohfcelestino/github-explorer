import "./login.scss";
import { supabase } from "../../supabaseClient";
import { useAuth } from "../../context/Auth";
//import { useEffect } from "react";

export function RedirectHome() {
  const { user } = useAuth();

  if (user) window.location.href = "/home";

  return null;
}

export function Login() {
  const { user } = useAuth();
  //const history = useHistory();

  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }

  if (user) RedirectHome();
  // useEffect(() => {
  //   function RedirectTo() {
  //     if (user) return history.push("/home");
  //   }

  //   RedirectTo();
  // }, [user, history]);

  return (
    <div className="loginBoxWrapper">
      <strong>Entre e visualize seus projetos</strong>
      <button onClick={signInWithGithub} className="signInWithGithubButton">
        Entrar com Github
      </button>
    </div>
  );
}
