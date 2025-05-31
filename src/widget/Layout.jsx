import {
  Box, Flex, Text, 
} from "@chakra-ui/react";
import Topbar from "./Topbar";
import {
  useColorModeValue,
} from "@/components/ui/color-mode";


const Layout = ({ children }) => {
  const bgColor = useColorModeValue("#0E1111", "white");
  const textColor = useColorModeValue("white", "#0E1111");

  return (
    <Flex direction="column" minH="100vh" bg={bgColor} >
      {/* Topbar */}
      <Topbar />
      <Box
        flex="1"
        px={{ base: 6, md: 10 }}
        py={{ base: 1, md: 5 }}
        maxW="800px"
        mx="auto"
        color={textColor}
      >
        {children}
      </Box>

      {/* Footer */}
      <Box textAlign="center" py={6}>
        <Text fontSize="sm" color={textColor}>
          © 2025 By{" "}
          <Text as="span" fontWeight="bold" textDecoration="underline" color={textColor}>
            AppankDev
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default Layout;