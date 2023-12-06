import { Button, Container, Heading, Stack, Text,HStack,Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {

  const [estadoMicroServicio,setEstadoMicroservicio] = useState({})

  const checkMicroService =  async (msURL) => {
      // Fetch data from external API
      const res = await fetch(msURL);
      const data = await res.json();
    
      if (!data) {
        return {
          notFound: true
        };
      }
      setEstadoMicroservicio(data);    
  }
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
        <HStack spacing='24px'>
        <Button
            rounded={"full"}
            px={6}
            as="a"
            onClick={()=>checkMicroService('http://localhost/usuarios/api/health')}
          >
            Check Usuarios
          </Button>
          <Button
            rounded={"full"}
            px={6}
            as="a"
            onClick={()=>checkMicroService('http://localhost/productos/api/health')}
          >
            Check Productos
          </Button>
          <Button
            rounded={"full"}
            px={6}
            as="a"
            onClick={()=>checkMicroService('http://localhost/pedidos/api/health')}
          >
            Check Pedidos
          </Button>
        </HStack>
        <HStack>
        <Text color={"gray.500"} maxW={"3xl"}>
            {estadoMicroServicio &&  JSON.stringify(estadoMicroServicio)}
        </Text>
        </HStack>
      </Stack>
    </Container>
  );
}
