import { Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const BOOKS = [
  { name: "Atomic Habits", href: "/explore/book/9781847941831" },
  { name: "Ancient Aztecs", href: "/explore/book/9781624035357" },
  { name: "Persephone", href: "/explore/book/0906427770" },
  { name: "Heart Bones", href: "/explore/book/9781398525047" },
  { name: "Quiet Tenant", href: "/explore/book/9780593534649" }
];

export default function ServerSidePage() {
  return (
    <VStack gap="6">
      <Heading>Server Side Pages</Heading>
      <Text>
        Si una página utiliza renderizado del lado del servidor, el HTML de la página se genera en
        cada solicitud. Para utilizar la representación del lado del servidor para una página, debe
        exportar una función asíncrona llamada getServerSideProps. El servidor llamará a esta
        función en cada solicitud.
      </Text>
      <VStack>
        {BOOKS.map((book) => (
          <Link key={book.href} href={book.href}>
            {book.name}
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}
