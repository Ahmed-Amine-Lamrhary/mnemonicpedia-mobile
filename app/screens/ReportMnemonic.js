import React, { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import Container from "../components/Container";
import Form from "../forms/Form";
import FormGroup from "../forms/FormGroup";
// import { getMnemonic } from "../../api/mnemonic";
// import { reportMnemonic } from "../../api/report";

function ReportMnemonic() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const { params } = match;

  const handleGetMnemonic = async () => {
    // try {
    //   await getMnemonic(params.id);
    // } catch (error) {
    //   console.error(error);
    //   history.push("/notFound");
    // }
  };

  useEffect(() => {
    handleGetMnemonic();
  }, []);

  const handleReport = async () => {
    // await reportMnemonic({ _id: params.id, title, content });
  };

  return (
    <Container>
      <Form>
        <FormGroup
          type="text"
          label="Title"
          value={title}
          onChange={(text) => setTitle(text)}
        />
        <FormGroup
          type="text"
          label="Content"
          value={content}
          onChange={(text) => setContent(text)}
        />
        <AppButton>Report Mnemonic</AppButton>
      </Form>
    </Container>
  );
}

export default ReportMnemonic;
