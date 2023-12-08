import React from "react";
import { Form } from "../../src";

export default function TestComponent() {
  return (
    <Form
      onSubmit={(values) => fetch("google.com", { body: JSON.stringify(values), method: "POST" })}
      onFieldChange={console.log}
      values={{ input: "test", select: [{ value: 1, title: "test2" }, { value: 2, title: "test3" }] }}
      fields={[
        { name: "select", type: "select", label: "Select", fieldParams: { data: [{ value: 1, title: "test2" }, { value: 2, title: "test3" }] } },
        { name: "select2", type: "select", label: "Select2", parentQueryFields: ["select"], fieldParams: { data: [{ value: 1, title: "test2" }] } },
        { name: "file", type: "file", label: "File" }
      ]}
    />
  )
}
