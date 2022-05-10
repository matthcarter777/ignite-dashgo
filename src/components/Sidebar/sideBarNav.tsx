import { Stack } from "@chakra-ui/react";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";

import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";


export function SidebarNav() {
  return (
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
  )
}