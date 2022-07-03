import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: "Harley Lin",
    description: "Hey! Is this item still available?",
    image: require("../assets/harley.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description: "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/harley.jpg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    // Call the server
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/harley.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
});