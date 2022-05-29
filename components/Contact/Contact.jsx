import React, { useState } from "react";

// mantine
import {
  TextInput,
  CheckboxGroup,
  Checkbox,
  Textarea,
  Button,
  Notification,
} from "@mantine/core";

//components
import Title from "../Title/Title";
import Container from "../Container/Container";

const classNames = {
  input: "focus:border-white bg-transparent text-white font-raleway",
  label: "text-white font-raleway",
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendMsg, setSendMsg] = useState("");

  const reset = (msg) => {
    setName("");
    setEmail("");
    setProjects([]);
    setMessage("");
    setSendMsg(msg);
    setLoading(false);

    setTimeout(() => {
      setSendMsg("");
    }, 5000);
  };

  const handleSend = async () => {
    setLoading(true);
    const response = await fetch("https://formspree.io/f/myyoonvd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, projects, message }),
    });

    if (response.status === 200) {
      reset("Message successfully sent. Will contact you shortly");
    } else {
      reset("Message not sent. Check information and try again");
    }
  };

  return (
    <section id="contact" className="pb-10 text-white gradient">
      <Container>
        <Title text="contact" className="text-white" />

        <div className="space-y-5">
          <p>
            Have an idea for a web or mobile application ? Need a professional
            website or online store for your business?
          </p>

          <p>
            No matter your needs, I'm here to help you craft your ideas and
            bring them to life. Feel free to contact me.
          </p>
        </div>

        <div className="space-y-5">
          <TextInput
            label="Full Name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            classNames={classNames}
          />

          <TextInput
            label="Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classNames={classNames}
          />

          <CheckboxGroup
            defaultValue={["webapp"]}
            label="Select project(s)"
            required
            value={projects}
            onChange={setProjects}
            classNames={{
              label: "text-white font-raleway",
              input: "checked:bg-red-500",
            }}
          >
            <Checkbox value="webapp" label="Web Application" />
            <Checkbox value="mobileapp" label="Mobile Application" />
            <Checkbox value="website" label="Website" />
          </CheckboxGroup>

          <Textarea
            label="Message"
            required
            minRows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            classNames={classNames}
          />

          <Button
            onClick={handleSend}
            disabled={
              name === "" ||
              email === "" ||
              message === "" ||
              projects.length === 0
            }
            variant="outline"
            size="md"
            classNames={{
              outline: "border-white text-white",
            }}
            loading={loading}
          >
            Send
          </Button>

          {sendMsg && (
            <Notification onClose={() => setSendMsg("")}>
              {sendMsg}
            </Notification>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Contact;
