import { Box, Menu, MenuButton,MenuList, MenuItem, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { LANGUAGE_VERSIONS } from '../constant'

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.900";
function LanguageSelector({language, onSelect}) {
  return (
    
    <Box ml={2} mb={4}>
        <Text mb={2} fontSize='lg'>Languages :</Text>
        <Menu isLazy>
        <MenuButton as={Button}>
        {language}
        </MenuButton>
        <MenuList bg='#100c1b'>
            {
                languages.map(([lang, version]) => (
                    <MenuItem key={lang}
                    color = {
                        lang === language ? "ACTIVE_COLOR" : ""
                    }

                    bg = {
                        lang === language ? "gray.900" : "transparent"
                    }

                    _hover = {{
                        color:"blue.900",
                        bg:"gray.900"
                    }}

                    onClick={() => onSelect(lang)}
                    > {lang}
                    &nbsp;
                    <Text as="span" color="gray.600" fontSize="sm">
                        {version}
                    </Text>
                    </MenuItem>
                ))
            }
        </MenuList>
        </Menu>
    </Box>
  )
}

export default LanguageSelector