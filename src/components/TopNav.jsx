import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, 
  MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
  import { FaUserCheck } from "react-icons/fa";
  import { FaBars } from "react-icons/fa";


const TopNav = ({title,onOpen}) => {
  return (
    <Box px="4" bg="white">
      <HStack
      maxW={"65rem"} 
       h="16" 
      justify={"space-between"} 
      mx={"auto"}>

        <Icon as={FaBars} onClick={onOpen} display={{
          base:"block",
          lg:"none"
        }}/>
     
     <Heading fontWeight={"medium"} fontSize={"28px"}>{title}</Heading>
     <Menu>
<MenuButton >
  <Icon as={FaUserCheck} fontSize={"30px"}/>
</MenuButton>
<MenuList>
  <MenuItem>Login</MenuItem>
  <MenuItem>Logout</MenuItem>
  <MenuItem>Support</MenuItem>
</MenuList>
</Menu>
    
  </HStack>
    </Box>
  );
};

export default TopNav;
