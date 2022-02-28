import React from "react";
import { Box, HStack, IconButton, Text, Icon } from "native-base";
import { Ionicons } from "@native-base/icons";

export function Header() {
  return (
    <Box>
      <HStack justifyContent="space-between" style={{ paddingTop: 20 }}>
        <Text fontSize="2xl" fontWeight="500">
          Good evening
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
