import React from "react";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

// View -> UIView for iOS
export default function App() {
  return (
    <Screen>
      <ListItem
        title="My title"
        subtitle="My subtitle"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
