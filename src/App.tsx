import { VStack, Textarea, Wrap, WrapItem, Box, Heading, Button, Text, useTab } from '@chakra-ui/react'
import { useState } from 'react';
import industryOptions from "../public/industry_options.json";
import { Select } from 'chakra-react-select';
export default function Home() {

  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [companyDescription, setCompanyDescription] = useState();
  const [industries, setIndustries] = useState();
  const [results, setResults] = useState(undefined);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  const submitValues = () => {
    console.log(companyDescription, industries);
    //const results = fetch("htt")
    setResults({"a": 2});
  }
  return (
    <>
    <Heading paddingTop={"2rem"} paddingBottom={"1rem"}>
      Will I be accpected to YC?
    </Heading>
    <VStack gap={"1rem"} align={"left"}>
        <Text>We use data from crunchbase.com to compare your companies to successful YC applications and calculate your chances.</Text>
        {results === undefined ? 
          <>
          <Textarea value={companyDescription} placeholder={'Describe the idea and business model of your company in 5 to 10 sentences.'} h={"10rem"} onChange={(e) => setCompanyDescription(e.target.value)} />
          <Box w={"100%"}>
          <Select
            value={industries}
            isMulti
            options={industryOptions}
            onChange={setIndustries}
          size={"lg"}
          
          />
        </Box>
        <Button colorScheme='green' onClick={submitValues}>Analyse my start-up</Button>
      </>
        :
       
        <>
         <Heading as='h4' size='md'>Your results</Heading>
          <Button colorScheme='cyan' onClick={() => setResults(undefined)}>Edit my start-up data</Button>
        </>
    }
    </VStack>
    </>
  );
}
