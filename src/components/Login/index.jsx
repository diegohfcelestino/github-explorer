import "./login.scss";

export function Login() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=b4bbbc5f884420bca568`;

  return (
    <div className="loginBoxWrapper">
      <strong>Entre e visualize seu Github</strong>
      <a href={signInUrl} className="signInWithGithubButton">
        Entrar com Github
      </a>
    </div>
  );
}
