import { Alert, AlertIcon, Box, Code, Heading, VStack } from "@chakra-ui/react";

export default function BookPage({ data, id }) {
  return (
    <VStack gap={2}>
      <Heading>Book ISBN: {id} </Heading>
      <br />
      <Box w="100%" p={4}>
        <Code w="100%">{JSON.stringify(data)}</Code>
      </Box>
      <br />
      <Alert status="info">
        <AlertIcon />
        Si inspeccionan la red, van a poder ver que el contenido de la pagina ya viene generado con
        desde el servidor
      </Alert>
    </VStack>
  );
}

/**
 * Esta funcion se ejecuta en al momento del build y determina las rutas que se van a generar
 **/
export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "9781847941831"
        }
      },
      {
        params: {
          id: "9781624035357"
        }
      },
      {
        params: {
          id: "0906427770"
        }
      },
      {
        params: {
          id: "9781398525047"
        }
      },
      {
        params: {
          id: "9780593534649"
        }
      }
    ],
    fallback: true
  };
};

/**
 * Esta funcion se ejecuta tambien durante el tiempo de build usando los parametros de getStaticPaths
 */
export async function getStaticProps({ req, params }) {
  // Fetch data from external API
  const res = await fetch(`https://openlibrary.org/isbn/${params.id}.json`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  // Enviamos la data como props de nuestra page
  return { props: { data, id: params.id } };
}
