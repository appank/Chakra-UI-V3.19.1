import { Box, Heading, Text, } from "@chakra-ui/react";
import Layout from "../widget/Layout";



function Home() {
  return (
      <Layout>
          <Box
              data-state="open"
              _open={{
                  animationName: "fade-in, scale-in",
                  animationDuration: "300ms",
              }}
              _closed={{
                  animationName: "fade-out, scale-out",
                  animationDuration: "120ms",
              }}
          >
              <Heading className="animate__animated animate__fadeIn" fontSize="4xl" mb={2}>This!</Heading>
              <Heading className="animate__animated animate__fadeIn" fontSize="5xl" fontWeight="bold" mb={4}>
                  is <Text as="span"
                      bgGradient="to-r" gradientFrom="green.200" gradientTo="blue.500"
                      bgClip="text" >Chakra Ui V3.19.1</Text>

              </Heading>
              <Text fontSize="lg" lineHeight="tall" className="animate__animated animate__fadeIn">
                  a New Version of Chakra Ui V3.19.1
              </Text>
          </Box>
      </Layout>
  );
}
export default Home; 