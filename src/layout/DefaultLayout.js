import { Box, useColorModeValue, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import MobileNav from "@src/layout/Sidebar/MobileNav";
import SidebarContent from "@src/layout/Sidebar/SidebarContent";

const LinkItems = [
  { name: "Home", href: "/" },
  { name: "Trending", href: "/trending" },
  { name: "Explore", href: "/explore" },
  { name: "Favourites", href: "/favs" },
  { name: "Settings", href: "/settings" }
];

/**
 *
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
export default function DefaultLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        linkItems={LinkItems}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* Mobile Nav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <main>{children}</main>
      </Box>
    </Box>
  );
}
