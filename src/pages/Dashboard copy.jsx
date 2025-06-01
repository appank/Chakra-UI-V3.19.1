import {
    Flex, Box, Alert, Table, Heading, Blockquote, Text, SimpleGrid, Image, IconButton,
    Pagination,
    Stack, ButtonGroup,
} from "@chakra-ui/react";
import {
    useColorModeValue as useColorModeValueCustom, // Menggunakan alias
} from "@/components/ui/color-mode";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"


function Dashboard() {

    const bgColor = useColorModeValueCustom("#17223C", "white"); // Gunakan alias
    const borderColor = useColorModeValueCustom("transparent", "gray.200");

    return (
        <Flex
            mx="auto"
            w="full"
            direction="column"
            transition="all 0.3s ease"
        >
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
                <Blockquote.Root>
                    <Blockquote.Caption>
                        <cite>- Lorem Ipsum</cite>
                    </Blockquote.Caption>
                </Blockquote.Root>
            </Box>
            <Box h="30px"></Box>
            <Alert.Root bg={bgColor} color={"#7DA9AE"} status="info" title="This is the alert title">
                <Alert.Indicator />
                <Alert.Title>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Alert.Title>
            </Alert.Root>
            <Box h="10px"></Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" >
                {/* Item 1 */}
                <Box
                    textAlign="left"
                    p={6}
                    bg={bgColor}
                    borderRadius="xl"
                    border={"2px solid"}
                    borderColor={borderColor}
                >
                    <Image
                        src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/google/google.svg"
                        alt="Google"
                        boxSize="80px"
                        mx="inherit"
                        mb={4}
                    />
                    <Text fontSize="xl" fontWeight="bold" color="teal.600">
                        Client 0Auth2
                    </Text>
                    <Text mt={2} fontSize="sm" >
                        Google 0Auth2 Sebagai Authentikasi User
                    </Text>
                </Box>

                {/* Item 2 */}
                <Box
                    textAlign="left"
                    p={6}
                    bg={bgColor}
                    borderRadius="xl"
                    border={"2px solid"}
                    borderColor={borderColor}
                >
                    <Image
                        src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/bc82276a7ea47630ae52edd6137e58da18cfedce/public/logos/technology/supabase/supabase.svg"
                        alt="Supabase"
                        boxSize="80px"
                        mx="inherit"
                        mb={4}
                    />
                    <Text fontSize="xl" fontWeight="bold" color="teal.600">
                        Supabase
                    </Text>
                    <Text mt={2} fontSize="sm" >
                        Authentikasi User dibuat menggunakan Supabase
                    </Text>
                </Box>

                {/* Item 3 */}
                <Box
                    textAlign="left"
                    p={6}
                    bg={bgColor}
                    borderRadius="xl"
                    border={"2px solid"}
                    borderColor={borderColor}
                >
                    <Image
                        src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/bc82276a7ea47630ae52edd6137e58da18cfedce/public/logos/technology/chakraui/chakraui.svg"
                        alt="Chakra UI"
                        boxSize="80px"
                        mx="inherit"
                        mb={4}
                    />
                    <Text fontSize="xl" fontWeight="bold" color="teal.600">
                        Chakra Ui
                    </Text>
                    <Text mt={2} fontSize="sm">
                        Stayle ini dibuat menggunakan Chakra UI V2.10.7
                    </Text>
                </Box>
            </SimpleGrid>
            <Box h="10px"></Box>
            <Box
                bg={bgColor}
                p={6}
                borderRadius="xl"
                border={"2px solid"}
                borderColor={borderColor}
            >
                <Stack width="full" gap="5">
                    <Heading size="xl">Products</Heading>
                    <Table.Root variant="striped" color={bgColor} >
                        <Table.Header >
                            <Table.Row bg={'#086677'}>
                                <Table.ColumnHeader color={"#7DA9AE"}  >Product</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#7DA9AE"}  >Category</Table.ColumnHeader>
                                <Table.ColumnHeader color={"#7DA9AE"} textAlign="end">Price</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body  >
                            {items.map((item) => (
                                <Table.Row bg={'#7DA9AE'} key={item.id}>
                                    <Table.Cell color={"#086677"}  >{item.name}</Table.Cell>
                                    <Table.Cell color={"#086677"}>{item.category}</Table.Cell>
                                    <Table.Cell color={"#086677"} textAlign="end">{item.price}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>

                    <Pagination.Root count={items.length * 5} pageSize={5} page={1}>
                        <ButtonGroup color={bgColor} variant="ghost" size="sm" wrap="wrap">
                            <Pagination.PrevTrigger asChild>
                                <IconButton>
                                    <LuChevronLeft />
                                </IconButton>
                            </Pagination.PrevTrigger>

                            <Pagination.Items
                                render={(page) => (
                                    <IconButton color={page.isSelected ? "teal.600" : "gray"} variant={{ base: "ghost", _selected: "outline" }}>
                                        {page.value}
                                    </IconButton>
                                )}
                            />

                            <Pagination.NextTrigger asChild>
                                <IconButton>
                                    <LuChevronRight />
                                </IconButton>
                            </Pagination.NextTrigger>
                        </ButtonGroup>
                    </Pagination.Root>
                </Stack>
            </Box>
        </Flex>
    );
}
const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Quantum Gadget", category: "Dsds", price: 1499.95 },
    { id: 6, name: "Gaming Laptop", category: "Electronics", price: 1299.99 },
    { id: 7, name: "Toaster Oven", category: "Home Appliances", price: 39.99 },

]
export default Dashboard; 