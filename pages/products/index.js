import { Image, Box, Text, Button } from "@chakra-ui/react";
import useStore from "../../utils/store";
import ProductsList from "../../utils/productsList";
import Nav from "../../components/nav";
export default function Products() {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);
  return (
    <Box>
      <Nav />
      {ProductsList.map((product) => (
        <Box key={product.id}>
          <Image src={product.img} objectFit={"cover"} />
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
          <Button
            onClick={() => {
              addToCart(product.name, product.id);
              console.log(cart);
            }}
            colorScheme={"blue"}
          >
            Add to cart
          </Button>
        </Box>
      ))}
    </Box>
  );
}
