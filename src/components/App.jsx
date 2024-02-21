import s from './App.module.css';
import { UserCard } from './UserCard/UserCard';

export const App = () => {
  return (
    <div className={s.wrapperBox}>
      <UserCard />
    </div>
  );
};
