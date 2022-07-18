import {
  Text,
  Box,
  Flex,
  IconButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import ThemeButton from "./themeButton";

export default function Nav() {
  return (
    <Box>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        p={4}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Brand
        </Text>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <ThemeButton />
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex
        display={{ base: "flex", md: "none" }}
        justify={"end"}
        align={"center"}
        p={2}
      >
        <ThemeButton />
        <Menu>
          <MenuButton
            mx={"1"}
            as={IconButton}
            icon={<BiMenu />}
            variant={"outline"}
          />
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Cart</MenuItem>
            <MenuItem>Products</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
