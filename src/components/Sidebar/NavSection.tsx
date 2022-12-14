import { Stack, Box, Link, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
  title: String;
  children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}