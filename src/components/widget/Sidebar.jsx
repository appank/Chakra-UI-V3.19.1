import {
    Box,
    VStack,
    Text,
    Icon,
    Heading,
} from '@chakra-ui/react';
import {
    FiHome,
    FiBox,
    FiHeart,
    FiInbox,
    FiDollarSign,
    FiCalendar,
    FiCheckSquare,
    FiSettings,
    FiLogOut,
} from 'react-icons/fi';
import {
  useColorModeValue as useColorModeValueCustom, // Menggunakan alias
} from "@/components/ui/color-mode"; // Pastikan path ini benar



const NavItem = ({ icon, children, isActive, onClick }) => {
    // Warna untuk item aktif (teks dan ikon) - bisa tetap atau disesuaikan juga jika perlu
    const activeColor = useColorModeValueCustom('blue.600', 'blue.600'); // Contoh: biru untuk kedua mode
    const activeBg = useColorModeValueCustom('white', 'rgba(49, 130, 206, 0.1)'); // Latar belakang aktif, sedikit transparan di dark mode

    // Warna untuk item tidak aktif (teks dan ikon)
    const inactiveColor = useColorModeValueCustom('gray.200', 'gray.600'); // Teks lebih terang di dark mode

    // Warna untuk hover (teks dan ikon) - bisa sama dengan aktif atau berbeda
    const hoverColor = useColorModeValueCustom('white', '#0E1111');
    const hoverBg = useColorModeValueCustom('blue.500', 'rgba(49, 130, 206, 0.05)'); // Latar belakang hover

    return (
        <Box
            onClick={onClick} 
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none', outline: 'none' }}
            display="flex" 
            alignItems="center"
            p="3"
            mx="3"
            my="1"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            w={'80%'} 
            bg={isActive ? activeBg : 'transparent'}
            color={isActive ? activeColor : inactiveColor}
            _hover={{
                bg: hoverBg,
                color: hoverColor,
            }}
        >
            {icon && (
                <Icon
                    mr="4"
                    fontSize="20"
                    color={isActive ? activeColor : inactiveColor}
                    _groupHover={{
                        color: hoverColor,
                    }}
                    as={icon}
                />
            )}
            {children}
        </Box>
    );
};

const SidebarContent = ({ activePage, setActivePage }) => {
    const menuItems = [
        { name: 'Dashboard', icon: FiHome, },
        { name: 'Products', icon: FiBox },
        { name: 'Favorites', icon: FiHeart },
        { name: 'Inbox', icon: FiInbox },
    ];

    const pageItems = [
        { name: 'Pricing', icon: FiDollarSign },
        { name: 'Calender', icon: FiCalendar },
        { name: 'To-Do', icon: FiCheckSquare },
    ];

    const footerItems = [
        { name: 'Settings', icon: FiSettings },
        { name: 'Logout', icon: FiLogOut },
    ];

    const sectionTitleColor = useColorModeValueCustom('gray.400', 'gray.500'); // Lebih terang di dark mode

    // Warna garis border kanan sidebar
    const borderColor = useColorModeValueCustom("gray.700", "gray.200"); // Border lebih gelap di dark mode jika bg sidebar gelap

    const handleNavItemClick = (pageName) => {
        if (pageName === 'Logout') {
            // Logika khusus untuk logout bisa ditangani di sini atau di Layout
            console.log("Logout clicked!");
            // Contoh: setActivePage(pageName); // Jika Logout adalah halaman
            // atau panggil fungsi logout global
        } else {
            setActivePage(pageName);
        }
    };


    return (
        <Box
            transition="width 0.3s ease, background-color 0.3s ease, color 0.3s ease" // Menambahkan transisi untuk warna
            bg={useColorModeValueCustom("#12182B", "white")} // Contoh: Sidebar gelap di dark mode, putih di light mode
            color={useColorModeValueCustom("white", "gray.800")} // Warna teks default untuk Box utama
            borderRight="1px"
            borderRightColor={borderColor} // Menggunakan variabel borderColor
            w={{ base: 60, md: 60 }} // Lebar sidebar, 60 * 4px = 240px
            pos="fixed"
            h="full"
            border="2px solid"
            borderColor={useColorModeValueCustom("#17223C", "transparent")}
            overflowY="auto"
            // sx untuk scrollbar jika masih ingin disembunyikan
             sx={{
                '&::-webkit-scrollbar': { display: 'none' },
                'scrollbarWidth': 'none',
                '-ms-overflow-style': 'none',
            }}

        >
            <VStack spacing={0} align="stretch" h="full"> {/* Tambahkan h="full" jika belum */}
                <Box p="5" mx="3" display="flex" alignItems="center" justifyContent="space-between">
                   <Heading className="animate__animated animate__fadeIn" fontSize="2xl" fontWeight="bold" mb={4}>
                   <Text as="span"
                      bgGradient="to-r" gradientFrom="teal.500" gradientTo="blue.500"
                      bgClip="text" >AppankDev</Text>

              </Heading>
                </Box>

                <Box flexGrow={1} overflowY="auto" /* sx untuk scrollbar bisa juga di sini jika scroll utama di sini */ >
                    <Box mt={3}>
                        {menuItems.map((link) => (
                            <NavItem
                                key={link.name}
                                icon={link.icon}
                                pageName={link.name} // Teruskan nama halaman
                                isActive={activePage === link.name} // Tentukan isActive berdasarkan perbandingan
                                onClick={() => handleNavItemClick(link.name)} // Panggil setActivePage saat diklik
                            >
                                {link.name}
                            </NavItem>
                        ))}
                    </Box>

                    <Text px="5" py="3" fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase"> {/* Menggunakan sectionTitleColor */}
                        Pages
                    </Text>
                    {pageItems.map((link) => (
                        <NavItem
                            key={link.name}
                            icon={link.icon}
                            pageName={link.name}
                            isActive={activePage === link.name}
                            onClick={() => handleNavItemClick(link.name)}
                        >
                            {link.name}
                        </NavItem>
                    ))}

                    <Text px="5" py="3" fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase"> {/* Menggunakan sectionTitleColor */}
                        UI Elements
                    </Text>
                    {/* Anda bisa menambahkan item untuk UI Elements di sini jika ada */}
                </Box>

                <Box mt="auto" pb={4}>  {/* Menambahkan padding bawah jika perlu */}
                    {footerItems.map((link) => (
                       <NavItem
                            key={link.name}
                            icon={link.icon}
                            pageName={link.name}
                            isActive={activePage === link.name}
                            onClick={() => handleNavItemClick(link.name)}
                        >
                            {link.name}
                        </NavItem>
                    ))}
                </Box>
            </VStack>
        </Box>
    );
};

export default SidebarContent;