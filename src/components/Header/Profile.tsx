import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">

      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Karazov</Text>
          <Text color="gray.300" fontSize="small">
            karazov@karazov.dev
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Karazov" src="https://github.com/karaz0v.png" />
    </Flex>
  );
}