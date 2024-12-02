import { useEffect } from "react";
import UseUserStore from "./UseUserStore.tsx";

function SearchPage() {
  const { fetchUsers, users } = UseUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const name = users.length > 0 ? users[0].name : "No user available";
  return (
    <div>
      <h1> hello {name}</h1>

      <input placeholder="name" />
      <input placeholder="email" />
      <input placeholder="password" />
    </div>
  );
}

export default SearchPage;
