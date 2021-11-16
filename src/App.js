import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import {
  Center,
  Button,
  Heading,
  VStack,
  HStack,
  Text,
  Image,
  Link
} from "@chakra-ui/react"

import { useState, React } from "react";

function App() {
//   const [predictionInfo, setPredictionInfo] = useState(null);
//   const findPrediction = () => {
//     fetch("https://burnished-ember-328422.nw.r.appspot.com/helloWorld")
//     .then((response) => response.json())
//     .then((data) => setPredictionInfo(data));
//   }
  const findPrediction = () => {
    return null
  }

  // fetch('https://burnished-ember-328422.nw.r.appspot.com/helloWorld')
  //   .then(function (response) {
  //     return response.json();
  //   }).then(function (text) {
  //     console.log('GET response:');
  //     console.log(text.greeting); 
  //   });

  return (
    <ChakraProvider>
      <Center bg = "black" color = "white" padding = {48}>
        <HStack>
          <VStack>
            <Heading padding = {16}>Section 1 Header</Heading>
            <Button size = "lg" color = "black" onClick = {findPrediction}>New Button!</Button>
            {/* {predictionInfo != null && <p>Data Exists</p>} */}
          </VStack>
          <VStack>
            <Heading padding = {16}>Section 2 Header</Heading>
            <Button size = "lg" color = "black" onClick = {findPrediction}>New Button!</Button>
          </VStack>
        </HStack>
      </Center>
      <Center bg = "pink" color = "white" padding = {48}>
        <iframe title = "P5" src="https://editor.p5js.org/JaredGlaub/full/Y0hZKucLW" width="600" height="650">
        </iframe>
      </Center>
    </ChakraProvider>
  );
}

export default App;