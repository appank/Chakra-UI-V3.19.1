import { Box, Heading, } from "@chakra-ui/react";



function Dashboard() {
  return (
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
              <Heading className="animate__animated animate__fadeIn" fontSize="4xl" mb={2}>Dashboard</Heading>
          </Box>
  );
}
export default Dashboard; 