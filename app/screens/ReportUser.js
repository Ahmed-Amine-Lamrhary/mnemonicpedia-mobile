import React, { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import Form from "../forms/Form";
import FormGroup from "../forms/FormGroup";
// import { getUser } from "../../api/user";
// import { reportUser } from "../../api/report";

function ReportUser() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const { params } = match;

  const handleGetUser = async () => {
    // try {
    //   await getUser(params.id);
    // } catch (error) {
    //   console.error(error);
    //   history.push("/notFound");
    // }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleReport = async () => {
    // await reportUser({ _id: params.id, title, content });
  };

  return (
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
      <AppButton>Report</AppButton>
    </Form>
  );
}

export default ReportUser;
