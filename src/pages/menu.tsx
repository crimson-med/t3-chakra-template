import { getCsrfToken } from "next-auth/react";
import { Button, Text, Box } from "@chakra-ui/react";

export const Menu = () => {
  return (
    <Box>
      <Text>Tester</Text>
      <Button variant={"ghost"}>plop</Button>
    </Box>
  );
};

export default Menu;
