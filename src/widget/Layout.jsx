import {
  Box, Flex, useBreakpointValue,
} from "@chakra-ui/react";
import Topbar from "./Topbar";
import SidebarContent from "./Sidebar";
import {
  useColorModeValue as useColorModeValueCustom,
} from "@/components/ui/color-mode";
import { useState } from 'react';

import Products from '../components/pages/Products';
import Dashboard from '../components/pages/Dashboard'; 

const Layout = () => {
  const bgColor = useColorModeValueCustom("#12182B", "gray.200"); // Gunakan alias
  // const bgbox = useColorModeValueCustom("#0E1111", "white"); // Gunakan alias
  const textColor = useColorModeValueCustom("white", "#0E1111"); // Gunakan alias



  // Placeholder untuk konten halaman

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
  const sidebarWidth = "240px"; // Sesuaikan jika lebar sidebar Anda berbeda (misal md: 60 -> 240px)

  return (
    <Flex
      flexDirection="row" // Di desktop, sidebar akan di samping, konten utama di kanan
      minH="100vh"
      bg={bgColor}
    >
      {isDesktop && <SidebarContent
        activePage={activePage}
        setActivePage={setActivePage}
      />}

      <Flex
        flex="1"
        flexDirection="column"
        ml={isDesktop ? sidebarWidth : "0"}
      >
        <Topbar />

        {/* 2b. Konten utama */}
        <Box
          as="main"
          flex="1" 
          // overflowY="auto"
          px={{ base: 4, md: 6 }}
          py={{ base: 4, md: 6 }}
          color={textColor}
        >
          {renderActivePage()}
        </Box>

      </Flex>
    </Flex>
  );
};

export default Layout;