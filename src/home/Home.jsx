import {
  Box,
  Flex,
  useBreakpointValue,
  // Komponen Drawer dan terkait dari Chakra UI v3+
  Drawer,
  Portal,
  CloseButton,
  Button, // Ditambahkan jika diperlukan di sini, meskipun trigger ada di Topbar
} from "@chakra-ui/react";
import Topbar from "../components/widget/Topbar";
import SidebarContent from "../components/widget/Sidebar";

import {
  useColorModeValue as useColorModeValueCustom,
} from "@/components/ui/color-mode"; // Asumsi path ini benar
import { useState } from 'react';

import Products from '../pages/Product'; // Asumsi path ini benar
import Dashboard from '../pages/Dashboard'; // Asumsi path ini benar

const Home = () => {
  const bgColor = useColorModeValueCustom("#12182B", "gray.100");
  const textColor = useColorModeValueCustom("white", "#0E1111");

  const [activePage, setActivePage] = useState('Dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State untuk mengontrol Drawer

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

  const handleMenuOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Flex
      direction="row"
      minH="100vh"
      bg={bgColor}
    >
      {/* Sidebar Desktop */}
      {isDesktop && (
        <SidebarContent
          activePage={activePage}
          setActivePage={setActivePage}
        // onCloseDrawer tidak relevan untuk sidebar desktop permanen
        />
      )}

      {/* Drawer Mobile menggunakan Drawer.Root API */}
      {!isDesktop && (
        <Drawer.Root isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen} placement="left">
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg={bgColor} color={textColor} pt={4} maxW="260px"> {/* Sesuaikan maxW jika perlu */}
                <Drawer.Header borderBottomWidth="1px">
                  <Drawer.Title>Menu</Drawer.Title>
                  <Drawer.CloseTrigger asChild position="absolute" right="8px" top="8px">
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Header>
                <Drawer.Body p={0}>
                  <SidebarContent
                    activePage={activePage}
                    setActivePage={setActivePage}
                    onCloseDrawer={handleDrawerClose} // Fungsi untuk menutup drawer dari SidebarContent
                  />
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      )}

      <Flex
        flex="1"
        direction="column"
        ml={isDesktop ? sidebarWidth : "0"}
        // Tambahkan transisi untuk efek geser yang lebih halus jika diinginkan
        // transition={isDesktop ? "margin-left 0.2s ease-out" : "none"}
      >
        <Topbar onOpenMenu={handleMenuOpen} /> {/* Mengirim fungsi untuk membuka drawer */}

        <Box
          as="main"
          flex="1"
          overflowY="auto"
          px={{ base: 4, md: 8 }} // Penyesuaian padding untuk mobile
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