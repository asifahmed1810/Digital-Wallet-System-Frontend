
import Footer from "./Footer";
import Navbar from "./Navbar";
import type { ReactNode } from "react";

interface IProps{
    children:ReactNode;
}
const CommonLayOut = ({children}:IProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="grow-1">{children}</div>
            <Footer></Footer>
            
        </div>
    );
};

export default CommonLayOut;