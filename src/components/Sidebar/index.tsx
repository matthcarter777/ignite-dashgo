import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";


export function Sidebar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack
        spacing="12"
        align="flex-start"
      >
        <NavSection title="GERAL">
          <NavLink text="Dashboard" icon={RiDatabaseLine}/>
          <NavLink text="Usuários" icon={RiContactsLine}/>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink text="Formulários" icon={RiInputMethodLine}/>
          <NavLink text="Automação" icon={RiGitMergeLine}/>
        </NavSection>
      
      </Stack>
    </Box>
  )
}