import React, { useState } from "react";
import { createContext } from "react";
import GithubUsers from "./GithubUsers";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";


export const ExampleContext = createContext();

export default function AppGitHub() {
  const [firstName, setFirstName] = useState("Hiiii");
  return (
    <ExampleContext.Provider value={{ firstName, setFirstName }}>
      <div>
        UseContextPlayground
        <hr/>
        <Content/>
        <hr />
        <Footer />
        <hr />
        <Header />
        <hr/>
       
      </div>
    </ExampleContext.Provider>
  );
}
