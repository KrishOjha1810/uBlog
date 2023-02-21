import React from "react";
import { Text, VStack, Avatar, Grid, GridItem } from "@chakra-ui/react";
import PostCard from "../homePage/PostCard";
import { useSelector } from "react-redux";
import AvatarHeading from "./AvatarHeading";
import EditProfile from "./EditProfile";

function Profile() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return (
    <Grid templateColumns={"repeat(4,1fr)"} gap={12}>
      <GridItem colSpan={{ base: "4", lg: "3" }}>
        <Text
          display={{ base: "none", lg: "block" }}
          fontSize="5xl"
          fontWeight="bold"
        >
          {user.name}
        </Text>
        <AvatarHeading name={user.name} img={user.avatar_url} />

        <Text fontSize="xl" fontWeight="bold" mb="5">
          Your Posts
        </Text>
        <hr />
        <VStack mt="10" spacing={5}></VStack>
      </GridItem>

      <GridItem p="10" display={{ base: "none", lg: "block" }}>
        <Avatar size="xl" src={user.avatar_url} cursor="pointer" />
        <Text mt="5" fontWeight="bold">
          {user.name}
        </Text>

        <Text size={"sm"}>{user.email}</Text>
        <EditProfile name={user.name} img={user.avatar_url} />
      </GridItem>
    </Grid>
  );
}

export default Profile;
