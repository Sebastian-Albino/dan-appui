import { Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import NavItem from "@src/layout/Sidebar/NavItem";

/**
 *
 * @param onClose
 * @param {name: string, icon: JSX.Element} linkItems
 * @param rest
 * @return {JSX.Element}
 * @constructor
 */
export default function SidebarContent({ onClose, linkItems, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}
