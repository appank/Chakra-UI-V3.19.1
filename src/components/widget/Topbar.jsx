import {
  Flex,
  Box,
  IconButton,
} from "@chakra-ui/react";
import {
  useColorModeValue as useColorModeValueCustom,
  ColorModeButton,
} from "@/components/ui/color-mode";
import { FiMenu } from "react-icons/fi";



export default function Topbar(onOpen) {

  const bgColor = useColorModeValueCustom("#12182B", "white"); // Gunakan alias
  // const textColor = useColorModeValueCustom("white", "#0E1111"); // Gunakan alias

  return (
    //make colomn

    <Box
      px={6}
      py={4}
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      zIndex="1000"
      bg={bgColor}
      borderBottom="2px solid"
      borderColor={useColorModeValueCustom("#17223C", "transparent")}
      h={"80px"}
    >
      <Flex gap={6} pl={3} align="right">
        <ColorModeButton />
        <IconButton
          aria-label="Open menu"
          icon={<FiMenu />}
          display={{ base: "inline-flex", md: "none" }} // Hanya tampil di mobile
          onClick={onOpen}
        />

      </Flex>

    </Box>
  );
}
