import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavlinkProps extends ChakraLinkProps {
  icon: ElementType;
  text: string;
}

export function NavLink({ text, icon, ...rest }: NavlinkProps) {
  return (
    <Link display="flex" color="gray.400" {...rest}> 
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{ text }</Text>
    </Link>
  )
}