import { Center, Text, VStack } from "@chakra-ui/react";

function Home() {
  return (
    <Center py="8"> {/* Memberi padding vertikal */}
      <VStack spacing="4">
        <Text fontSize="3xl" fontWeight="bold">
          🏠 Selamat Datang!
        </Text>
        <Text>Ini adalah halaman utama aplikasi Anda.</Text>
      </VStack>
    </Center>
  );
}

export default Home; // Pastikan ada export default