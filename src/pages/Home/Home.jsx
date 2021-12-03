import { NavBar } from "../../components/Navbar/NavBar";
import { Profile } from "../../components/Profile/Profile";
import { RepositoryList } from "../../components/RepositoryList/RepositoryList";

export function Home() {
  return (
    <div className="contentWrapper">
      <NavBar />
      <Profile />
      <RepositoryList />
    </div>
  );
}
