import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Ejemplo de como usar{" "}
          <Text as="span" color={"orange.400"}>
            NextJs
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Este repositorio tiene un setup muy basico de como usar NextJs con Page Routing,
          JavaScript y Chakra UI. La parte teoria de como funciona NextJS y como gestionar les
          direntes rutas fue explicado durante una de las clases teoriacas de la materia DAN (
          Diseño de Aplicaciones en la Nube) dentro del marco de la UTN Santa Fe
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            as="a"
            target="_blank"
            href="https://nextjs.org/docs/pages/building-your-application/routing"
          >
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
