import "./login.scss";
import { supabase } from "../../supabaseClient";

export function Login() {
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }

  return (
    <div className="loginBoxWrapper">
      <strong>Entre e visualize seus projetos</strong>
      <button onClick={signInWithGithub} className="signInWithGithubButton">
        Entrar com Github
      </button>
    </div>
  );
}
