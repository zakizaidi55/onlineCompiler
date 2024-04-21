import { Box, Button, Text } from '@chakra-ui/react'
import React, {useState}from 'react'
import { executeCode } from '../api';

function Output({editorRef, language}) {
    const [output, setOutput] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) {
            return;
        }

        try {
            setLoading(true);
            const {run} = await executeCode(language, sourceCode);
            setOutput(run.output.split("\n"));
            run.stderr ? setError(true) : setError(false);
        } catch (error) {
            console.log("Error while executing the code");
            console.log(error.message);
        } finally{
            setLoading(false);
        }

    }
  return (
    <Box w='50%'>
        <Text mb={2} fontSize='lg'></Text>
        <Button
            variant='outline'
            colorScheme='green'
            mb={4}
            onClick={runCode}
            isLoading={loading}
        >
        Run Code
        </Button>
        <Box
        height='75vh'
        p={2}
        color={
            error ? "red.400" : ""
        }
        border='1px solid '
        borderRadius={4}
        borderColor={
            error ? "red.500" : "#333"
        }>
        {
            output ? output.map((line, i)=> <Text key={i}>
                {line}
            </Text>) 
            : <p>Click "Run Button" to run the code</p>
        }
        </Box>
    </Box>
  )
}

export default Output