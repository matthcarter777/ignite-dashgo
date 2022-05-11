import { Icon, Link as  ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";

interface NavlinkProps extends ChakraLinkProps {
  icon: ElementType;
  text: string;
  href: string;
}

export function NavLink({ text, icon, href, ...rest }: NavlinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" color="gray.400" {...rest}> 
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{ text }</Text>
      </ChakraLink>
    </ActiveLink>
  )
}