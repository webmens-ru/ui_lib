import React from "react";
import { Form } from "../../src";

export default function TestComponent() {
  return (
    // <Multifield
    //   type="combo"
    //   fields={[{ value: { text: "hteheth", type: ["test"] } }]}
    //   // comboParams={{ data: [{ value: "test", title: "getheth" }] }}
    //   onChange={console.log}
    // />
    <Form
      // @ts-ignore
      values={{ test: [{ value: 1 }] }}
      fields={[{ name: "test", type: "multifield", fieldParams: { type: "select", onChange: console.log, fieldParams: { data: [{ title: "test", options: [{ value: 1, title: "child test" }] }] } } }]}
    />
    // <Multifield
    //   type="select"
    //   fields={[{ value: [{ value: 1, title: "test" }] }]}
    //   fieldParams={{ data: [{ title: "test", options: [{ value: 1, title: "child test" }] }] }}
    //   onChange={console.log}
    //  />
    // <Select
    //   value={[{ value: 1, title: "test" }]}
    //   data={[{ title: "test", options: [{ value: 1, title: "child test" }] }]}
    // />
  )
}
