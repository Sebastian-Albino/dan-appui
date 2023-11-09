import { Box, useColorModeValue } from "@chakra-ui/react";
import MobileNav from "@src/layout/Sidebar/MobileNav";

export default function HeaderOnlyLayout({ children }) {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Mobile Nav */}
      <MobileNav fullWidth />
      <Box p="4">
        <main>{children}</main>
      </Box>
    </Box>
  );
}
