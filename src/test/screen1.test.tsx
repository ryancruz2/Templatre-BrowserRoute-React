import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Screen1 from "../pages/Screen1"
import userEvent from "@testing-library/user-event";
import Menu from "../pages/Menu";


describe("pagination", () => {
    test("Dado que o usuario apertou no botão de screen1, troque para a pagina screen1", async () => {
        render( 
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Menu />}/>
              <Route path='/screen1' element={<Screen1 />} />
            </Routes>
        </BrowserRouter>);

        const screen1 = screen.getByTestId('screen1-route');
        await userEvent.click(screen1);

        expect(window.location.pathname).toEqual("/screen1");
    });
});