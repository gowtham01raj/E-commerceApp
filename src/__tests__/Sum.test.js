
import { Sum } from "../Components/Sum";

test("Adding two number",()=>{
    const results=Sum(3,5);

    expect(results).toBe(8);
});
