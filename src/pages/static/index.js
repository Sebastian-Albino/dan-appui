import { Heading, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";

const BOOKS = [
  { name: "Atomic Habits", href: "/explore/book/9781847941831" },
  { name: "Ancient Aztecs", href: "/explore/book/9781624035357" },
  { name: "Persephone", href: "/explore/book/0906427770" },
  { name: "Heart Bones", href: "/explore/book/9781398525047" },
  { name: "Quiet Tenant", href: "/explore/book/9780593534649" }
];

export default function StaticPage() {
  return (
    <VStack gap="6">
      <Heading>Static Pages</Heading>
      <Text>
        Si una página utiliza generación estática, el HTML de la página se genera en el momento de
        la compilación. Eso significa que en producción, la página HTML se genera cuando ejecuta la
        siguiente compilación. Este HTML se reutilizará en cada solicitud. Puede almacenarse en
        caché mediante una CDN.
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
