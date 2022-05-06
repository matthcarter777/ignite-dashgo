import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

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
        <Box fontWeight="bold" color="gray.400" fontSize="small">
          <Text>GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" color="pink.400"> 
              <Icon as={RiDatabaseLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>
            <Link display="flex"> 
              <Icon as={RiContactsLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box fontWeight="bold" color="gray.400" fontSize="small">
          <Text>AUTOMAÇÃO</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex"> 
              <Icon as={RiInputMethodLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Formulários</Text>
            </Link>
            <Link display="flex"> 
              <Icon as={RiGitMergeLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>

      </Stack>
    </Box>
  )
}