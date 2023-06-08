import type { ReactChildren } from "react";
import { Menu } from "./menu";
import { Footer } from "./footer";
import { Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Flex flexDirection={"column"} minH={"100vh"}>
      <Menu />
      <main>{children}</main>
      <Footer />
    </Flex>
  );
}
