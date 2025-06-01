import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiBox,
  FiHeart,
  FiInbox,
  FiDollarSign,
  FiCalendar,
  FiCheckSquare,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

// Menu data (bisa diimpor dari file terpisah)
const menuItems = [
  { name: "Dashboard", icon: FiHome },
  { name: "Products", icon: FiBox },
  { name: "Favorites", icon: FiHeart },
  { name: "Inbox", icon: FiInbox },
];
const pageItems = [
  { name: "Pricing", icon: FiDollarSign },
  { name: "Calender", icon: FiCalendar },
  { name: "To-Do", icon: FiCheckSquare },
];
const footerItems = [
  { name: "Settings", icon: FiSettings },
  { name: "Logout", icon: FiLogOut },
];

// NavItem versi mobile (bisa pakai yang sama dengan desktop)
const NavItem = ({ icon, children, isActive, onClick }) => (
  <Button
    variant="ghost"
    leftIcon={icon ? <Icon as={icon} /> : null}
    justifyContent="flex-start"
    w="full"
    colorScheme={isActive ? "blue" : "gray"}
    fontWeight={isActive ? "bold" : "normal"}
    onClick={onClick}
    my={1}
    px={4}
  >
    {children}
  </Button>
);

const DrawerMobile = ({ activePage, setActivePage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handler klik menu
  const handleNavItemClick = (pageName) => {
    setActivePage(pageName);
    onClose(); // Tutup drawer setelah pilih menu
  };

  return (
    <Box display={{ base: "block", md: "none" }}>
      {/* Tombol hamburger */}
      <Button
        leftIcon={<FiMenu />}
        variant="outline"
        onClick={onOpen}
        m={4}
      >
        Menu
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading fontSize="xl">
              <Text
                as="span"
                bgGradient="linear(to-r, teal.500, blue.500)"
                bgClip="text"
              >
                AppankDev
              </Text>
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={0}>
              {menuItems.map((link) => (
                <NavItem
                  key={link.name}
                  icon={link.icon}
                  isActive={activePage === link.name}
                  onClick={() => handleNavItemClick(link.name)}
                >
                  {link.name}
                </NavItem>
              ))}
              <Text fontSize="xs" fontWeight="bold" color="gray.500" mt={4} mb={1}>
                Pages
              </Text>
              {pageItems.map((link) => (
                <NavItem
                  key={link.name}
                  icon={link.icon}
                  isActive={activePage === link.name}
                  onClick={() => handleNavItemClick(link.name)}
                >
                  {link.name}
                </NavItem>
              ))}
              <Text fontSize="xs" fontWeight="bold" color="gray.500" mt={4} mb={1}>
                UI Elements
              </Text>
              {/* Tambahkan item UI Elements jika ada */}
              <Box mt="auto" pt={4}>
                {footerItems.map((link) => (
                  <NavItem
                    key={link.name}
                    icon={link.icon}
                    isActive={activePage === link.name}
                    onClick={() => handleNavItemClick(link.name)}
                  >
                    {link.name}
                  </NavItem>
                ))}
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerMobile;
