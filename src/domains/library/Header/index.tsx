import React from "react";
import { Avatar, Box, HStack, Icon, Text } from "native-base";
import { Feather, AntDesign } from "@native-base/icons";

export function Header() {
  return (
    <Box px="2" pt="2">
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space="2">
          <Avatar size="sm" rounded="full" />
          <Text fontWeight="700">Your Library</Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={<Feather />} name="search" size="xs" ml="2" color="white" />
          <Icon as={<AntDesign />} name="plus" size="xs" ml="2" color="white" />
        </HStack>
      </HStack>
    </Box>
  );
}
