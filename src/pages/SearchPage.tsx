import { useEffect } from "react";
import UseUserStore from "./UseUserStore.tsx";
//import { Box, Button, Input, Stack } from "@chakra-ui/react";
//import { RiArrowRightLine } from "react-icons/ri";

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
