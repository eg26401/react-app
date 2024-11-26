import { useEffect } from "react";
import useUserStore from "./user.js";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

function SearchPage() {
  const { fetchUsers, users } = useUserStore;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const name = users.name;
  return (
    <>
      <h1> hello {name}</h1>
      <Box background="grey" width="70%" padding="4%" color="black">
        my box
      </Box>
      <Stack gap="4">
        <Input placeholder="name" variant="subtle" required />
        <Input placeholder="email" variant="subtle" required />
        <Input placeholder="password" variant="subtle" required />
      </Stack>
      <Button variant="solid" color="red">
        search <RiArrowRightLine />
      </Button>
    </>
  );
}

export default SearchPage;
