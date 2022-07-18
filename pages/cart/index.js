import { Box, Text } from "@chakra-ui/react";
import Nav from "../../components/nav";
import useStore from "../../utils/store";
export default function Cart() {
  const cart = useStore((state) => state.cart);
  return (
    <Box>
      <Nav />
      <Text>{cart.length} items in Cart</Text>
    </Box>
  );
}
