import { NavBar, Profile, RepositoryList } from "../../components";

export function Home() {
  return (
    <div className="contentWrapper">
      <NavBar />
      <Profile />
      <RepositoryList />
    </div>
  );
}
