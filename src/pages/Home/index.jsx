import { NavBar } from '../../components/Navbar';
import { RepositoryList } from '../../components/RepositoryList';

export function Home() {
  return (
    <div className="contentWrapper">
      <NavBar />
      <RepositoryList />
    </div>
  );
}
