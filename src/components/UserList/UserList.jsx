import { UserCard } from 'components/UserCard/UserCard';
import s from './UserList.module.css';
import { useEffect, useState } from 'react';
import { getUsers } from 'services/services';

export const UserList = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const list = await getUsers(page);
        if (list) {
          setList(prevItem => {
            return page > 1 ? [...prevItem, ...list] : [...list];
          });
        }
      })();
    } catch (error) {
      return error;
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <ul className={s.styleList}>
        {list.map(user => {
          return <UserCard key={user.id} user={user} />;
        })}
      </ul>
      <button
        onClick={handleLoadMore}
        className={s.styleLoadMore}
        type="button"
      >
        Load More
      </button>
    </>
  );
};
