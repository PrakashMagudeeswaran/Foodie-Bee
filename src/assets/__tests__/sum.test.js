import { hasExpectedRequestMetadata } from "@reduxjs/toolkit/dist/matchers"
import {sum} from "../sum"

test("Sum",()=>{
  const result=sum(5,2);
  expect(result).toBe(7);
})