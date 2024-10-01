import { Ceo } from "ceo-client"
const ceo = new Ceo("localhost:50031")
ceo.pub("message", () => {
  return "Hello World"
})
