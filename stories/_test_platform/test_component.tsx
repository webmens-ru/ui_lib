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
      values={{
        test: [{ value: { text: "hteheth", type: "test" } }] as unknown as any
      }}
      fields={[
        { name: "test", type: "multifield", fieldParams: { onChange: console.log, type: "combo" }, value: [{ value: { text: "hteheth", type: ["test"] } }] },
        { name: "test1", type: "input", value: "grekphtekmthkm" }
      ]}
    />
  )
}
