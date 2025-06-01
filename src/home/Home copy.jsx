// Home.jsx
import {
  Box,
  Flex,
  useBreakpointValue,
  // Komponen Drawer dan terkait dari Chakra UI v3+
  Drawer,
  Portal,
  CloseButton,
  Button, // Hanya untuk contoh jika diperlukan di sini, trigger utama di Topbar
  HStack, // Jika diperlukan untuk layout di dalam Drawer.Body
  // For, // Tidak digunakan dalam contoh dasar ini
} from "@chakra-ui/react";
import Topbar from "../components/widget/Topbar";
// Mengganti SidebarContent dengan Box sederhana untuk demo
// import SidebarContent from "../components/widget/Sidebar"; 

import {
  useColorModeValue as useColorModeValueCustom,
} from "@/components/ui/color-mode"; // Pastikan path ini benar
import { useState } from 'react';

import Products from '../pages/Product'; // Pastikan path ini benar
import Dashboard from '../pages/Dashboard'; // Pastikan path ini benar

const Home = () => {
  const bgColor = useColorModeValueCustom("#12182B", "gray.100");
  const textColor = useColorModeValueCustom("white", "#0E1111");
  const borderColor = useColorModeValueCustom("#17223C", "gray.200");


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
  const sidebarWidth = "240px"; // Digunakan jika ada sidebar desktop permanen

  const handleMenuOpen = () => {
    setIsDrawerOpen(true);
  };

  // Fungsi setIsDrawerOpen akan menangani penutupan melalui Backdrop click atau CloseButton
  // const handleDrawerClose = () => {
  //   setIsDrawerOpen(false);
  // };

  return (
    <Flex
      direction="row"
      minH="100vh"
      bg={bgColor}
    >
      {/* Sidebar Desktop (jika ada dan selalu terlihat) */}
      {isDesktop && (
        <Box
          as="aside"
          w={sidebarWidth}
          // bg={useColorModeValueCustom("gray.800", "gray.50")} // Contoh warna background
          p={4}
          color={textColor}
          // Anda bisa meletakkan SidebarContent di sini jika versi desktopnya berbeda
        >
          {/* Konten Sidebar Desktop */}
          <Box color={textColor}>Sidebar Desktop Tetap</Box>
        </Box>
      )}

      {/* Drawer Mobile menggunakan Drawer.Root API */}
      {!isDesktop && (
        <Drawer.Root isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen} placement="left">
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg={bgColor} color={textColor} pt={4} maxW="280px"> {/* Sesuaikan maxW jika perlu */}
                <Drawer.Header borderBottomWidth="1px" borderColor={borderColor}>
                  <HStack justify="space-between">
                    <Drawer.Title>Menu Navigasi</Drawer.Title>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </HStack>
                </Drawer.Header>
                <Drawer.Body p={4}>
                  {/* Konten Drawer Anda di sini */}
                  {/* Misalnya, daftar link atau komponen navigasi sederhana */}
                  <Box color={textColor}>Ini adalah konten Drawer.</Box>
                  <Button mt={4} onClick={() => { setActivePage('Dashboard'); setIsDrawerOpen(false); }}>Ke Dashboard</Button>
                  <Button mt={2} onClick={() => { setActivePage('Products'); setIsDrawerOpen(false); }}>Ke Produk</Button>
                  {/* Jika Anda ingin menggunakan SidebarContent di sini:
                    <SidebarContent 
                      activePage={activePage} 
                      setActivePage={setActivePage} 
                      onCloseDrawer={() => setIsDrawerOpen(false)} // SidebarContent perlu memanggil ini
                    /> 
                  */}
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
      >
        <Topbar onOpenMenu={handleMenuOpen} /> {/* Mengirim fungsi untuk membuka drawer */}

        <Box
          as="main"
          flex="1"
          overflowY="auto"
          px={{ base: 4, md: 8 }}
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