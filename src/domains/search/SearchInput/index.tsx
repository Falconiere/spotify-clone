import React from "react";
import { Box, Icon, Input } from "native-base";
import { FontAwesome } from "@native-base/icons";

export function SearchInput() {
  return (
    <Box p="2" bg="primary.50">
      <Box bg="white" overflow="hidden" rounded="sm">
        <Input
          leftElement={
            <Icon as={<FontAwesome />} name="search" size="xs" ml="2" />
          }
        />
      </Box>
    </Box>
  );
}
