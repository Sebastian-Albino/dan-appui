import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ icon, children, href, ...rest }) {
  const router = useRouter();
  const selectedRouter = router.pathname === href;
  // Como la regla de los hooks lo indica, no podemos usar un hook en forma condicional,
  // por eso asociales el resultado a una variable.
  const selectedItemColor = useColorModeValue("orange.400", "gray.600");

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={selectedRouter ? selectedItemColor : undefined}
        _hover={{
          bg: useColorModeValue("orange.700", "gray.700"),
          color: "white"
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white"
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
}
