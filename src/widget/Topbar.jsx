import {
  Flex,
  Heading,
  Spacer,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import {
  useColorModeValue,
  ColorModeButton,
} from "@/components/ui/color-mode";

export default function Topbar() {
  const bgColor = useColorModeValue("#0E1111", "white");
  const textColor = useColorModeValue("white", "#0E1111");

  return (
    <Flex
      p={4}
      align="center"
      flexDirection={{ base: 'column', md: 'row' }}
      px={{ base: 6, md: 10 }}
      py={{ base: 10, md: 20 }}
      bg={bgColor}
      color={textColor}
      maxW="800px"
      mx="auto"
    >
      <Heading size="md" fontWeight="bold" mb={{ base: 4, md: 0 }} as="span"
                      bgGradient="to-r" gradientFrom="green.300" gradientTo="blue.500"
                      bgClip="heading">
        Chakra Ui V3.19.1
      </Heading>
      <Spacer />
      <Flex gap={6} pl={3} align="center">
        <ChakraLink as={RouterLink} to="/"color={textColor}>Home</ChakraLink>
        <ChakraLink as={RouterLink} to="/projects" color={textColor}>Projects</ChakraLink>
        <ChakraLink as={RouterLink} to="/about" color={textColor}>About</ChakraLink>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}
