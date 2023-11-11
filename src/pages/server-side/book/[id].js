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
 * Esta funcion se ejecuta en cada request, del lado del servidor
 * @param {{id: string}} params
 * @param req
 * @param res
 * @return {Promise<{props: {data: any}}>}
 */
export async function getServerSideProps({ req, params }) {
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
