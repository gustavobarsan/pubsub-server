import { Ceo } from "ceo-client"
const ceo = new Ceo("localhost:50031")
ceo.sub("message", (msg) => console.log(msg))