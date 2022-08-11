import React from "react";
import {
  Heading,
  Image,
  MainContainer,
  Para,
  ReadMoreButton,
} from "./styledComponents";

const ReadMore = () => {
  const readMoreMsg =
    "Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.";
  const ExtendedMsg =
    "For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually";
  const [message, setMessage] = React.useState(readMoreMsg);
  const [ButtonName, setButtonName] = React.useState("Read More");

  const ShowReadMore = () => {
    if (ButtonName === "Read More") {
      setButtonName("Read Less");
      setMessage(readMoreMsg + " " + ExtendedMsg);
    } else {
      setButtonName("Read More");
      setMessage(readMoreMsg);
    }
  };

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{message}</Para>
      <ReadMoreButton onClick={ShowReadMore}>{ButtonName}</ReadMoreButton>
    </MainContainer>
  );
};

export default ReadMore;
