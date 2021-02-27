import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import Form from "../../forms/Form";
import FormGroup from "../../forms/FormGroup";

function UserSettings(props) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <View>
      <Form>
        <FormGroup
          type="text"
          label="Full Name"
          value={fullname}
          onChange={(text) => setFullname(text)}
        />
        <FormGroup
          type="text"
          label="Username"
          value={username}
          onChange={(text) => setUsername(text)}
        />
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
        <FormGroup
          type="password"
          label="Repeat Password"
          value={password2}
          onChange={(text) => setPassword2(text)}
        />
        <AppButton>Register</AppButton>
      </Form>
    </View>
  );
}

export default UserSettings;
