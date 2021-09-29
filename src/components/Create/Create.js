import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function Create() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const userDetails = { firstName: firstName, lastName: lastName };

  const callMockAPI = () => {
    console.log(firstName);
    console.log(lastName);

    const endpointURL = "https://6150fecbd0a7c100170168dd.mockapi.io/quotes";

    axios
      .post(endpointURL, userDetails)
      .then((response) => console.log(response.data))
      .catch((response) => console.log(response));
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button color="green" onClick={callMockAPI} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
