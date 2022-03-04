import { HStack, Icon, IconButton } from "native-base";

import { Ionicons } from "@native-base/icons";

import React from "react";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation();
  return (
    <HStack px="2" pt="2" safeAreaTop>
      <IconButton
        onPress={() => navigation.goBack()}
        icon={<Icon as={Ionicons} name="chevron-back" color="white" size="sm" />}
      />
    </HStack>
  );
}
