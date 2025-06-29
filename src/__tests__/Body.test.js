import { render } from "@testing-library/react"
import Body from "../Components/Body";
import { Mock_Data } from "../mocks/mockRestaurantList.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_Data);
        }
    })
});
test("Shoudl render The body component with Search", async ()=>{
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>))
    render(<Body/>);

})