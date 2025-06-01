import {
  Box, Flex, useBreakpointValue,
} from "@chakra-ui/react";
import Topbar from "../components/widget/Topbar";
import SidebarContent from "../components/widget/Sidebar";
import {
  useColorModeValue as useColorModeValueCustom,
} from "@/components/ui/color-mode";
import { useState } from 'react';

import Products from '../pages/Product';
import Dashboard from '../pages/Dashboard'; 

const Home = () => {
  const bgColor = useColorModeValueCustom("#12182B", "gray.100");
  const textColor = useColorModeValueCustom("white", "#0E1111");

  const [activePage, setActivePage] = useState('Dashboard');

  const renderActivePage = () => {
    switch (activePage) {
      case 'Products':
        return <Products />;
      default:
        return <Dashboard />;
    }
  };

  const isDesktop = useBreakpointValue({ base: false, md: true });
  const sidebarWidth = "240px";

  return (
    <Flex
      direction="row"
      minH="100vh"
      bg={bgColor}
    >
      {isDesktop && (
        <SidebarContent
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}

      <Flex
        flex="1"
        direction="column"
        ml={isDesktop ? sidebarWidth : "0"}
      >
        <Topbar />

        <Box
          as="main"
          flex="1"
          overflowY="auto"
          px={{ base: 6, md: 10 }}
          py={{ base: 6, md: 10 }}
          color={textColor}
          w="full"
          mx="auto"
        >
          {renderActivePage()}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
