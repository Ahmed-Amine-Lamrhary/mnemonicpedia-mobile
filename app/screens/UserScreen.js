import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Container from "../components/Container";
// import { getUser } from "../../api/user";
import Mnemonics from "../components/Mnemonics";

function User(props) {
  const [user, setUser] = useState({});

  const handleGetUser = async () => {
    setUser({
      fullname: "Amine Lam",
      username: "Aminos",
    });
    // try {
    //   const { data: user } = await getUser(params.id);
    //   setUser(user);
    // } catch (error) {
    //   console.error(error);
    //   history.push("/notFound");
    // }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  // const navs = () => {
  //   return [
  //     {
  //       to: `${url}/posts`,
  //       text: "Posts",
  //     },
  //     {
  //       to: `/report-user/${params.id}`,
  //       text: "Report User",
  //     },
  //   ];
  // };

  const { fullname, username } = user;

  return (
    <Container>
      {/* <Navs navs={navs()} /> */}

      <View>
        <Text>{fullname}</Text>
        <Text>@{username}</Text>
      </View>

      {/* <Switch>
        <Route
          path="/user/:id/posts"
          render={() => <Mnemonics query={{ author: params.id }} />}
        />
      </Switch> */}
    </Container>
  );
}

export default User;
