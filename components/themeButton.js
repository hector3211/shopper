import {
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

export default function ThemeButton() {
  const { toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        size={"md"}
        colorScheme={useColorModeValue("purple", "orange")}
        icon={useColorModeValue(<BsMoonFill />, <BsFillSunFill />)}
        onClick={toggleColorMode}
      ></IconButton>
    </Box>
  );
}
