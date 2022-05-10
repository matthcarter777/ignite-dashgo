import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    > 
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mateus Henrique</Text>
          <Text color="gray.300" fontSize="sm">mateus@gmail.com</Text>
        </Box>
      )}


      <Avatar size="md" name="Mateus Henrique" />
    </Flex>
  );
}