import { Box, Text } from "@chakra-ui/react";
import useStore from "../../utils/store";
export default function Products() {
  const cart = useStore((state) => state.cart);
  return (
    <Box>
      <Text>yur cart has {cart.length} items</Text>
    </Box>
  );
}
