import React, { useState } from "react";
import { View } from "react-native";
import AppButton from "../components/AppButton";
import Container from "../components/Container";
import Form from "../forms/Form";
import FormCheck from "../forms/FormCheck";
import FormGroup from "../forms/FormGroup";
import Screen from "./Screen";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);

  // const { state } = location;

  const handleLogin = async () => {
    // if (state && state.from)
    //   return await login({ email, password, keepLogin }, history, state.from);
    // const loginStatus = await login({ email, password, keepLogin }, history);
    // if (!loginStatus) {
    //   history.push({
    //     pathname: "/activate",
    //     state: {
    //       email,
    //     },
    //   });
    // }
  };

  const handleCheck = () => {
    setKeepLogin(!keepLogin);
  };

  return (
    <Screen>
      {/* <FormNavigation
        links={[
          { to: "/register", text: "Register" },
          { to: "/login", text: "Log in" },
        ]}
      /> */}

      <Form>
        <FormGroup
          type="email"
          label="Email"
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <FormGroup
          type="password"
          label="Password"
          value={password}
          onChange={(text) => setPassword(text)}
        />

        <FormCheck
          label="Keep me logged in"
          id="keepLogin"
          checked={keepLogin}
          check={handleCheck}
          onChange={() => setKeepLogin(!keepLogin)}
        />

        <AppButton onPress={handleLogin}>Login</AppButton>
      </Form>
    </Screen>
  );
}

export default Login;
