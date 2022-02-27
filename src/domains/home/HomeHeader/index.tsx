import React from "react";
import { Box, HStack, IconButton, Text, Icon } from "native-base";
import { Ionicons } from "@native-base/icons";

export function HomeHeader() {
  return (
    <Box safeAreaTop px="2">
      <HStack justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="500">
          Good afternoon
        </Text>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="notifications-outline"
                color="white"
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="ios-timer-outline"
                color="white"
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="ios-settings-outline"
                color="white"
                size="sm"
              />
            }
          />
        </HStack>
      </HStack>
    </Box>
  );
}
