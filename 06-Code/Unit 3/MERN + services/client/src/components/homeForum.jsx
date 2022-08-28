import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../assets/css/pages/forum.css';
import img1 from '../assets/img/0-4.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#E2ECF5',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item>
            <p>Community</p>
            <p>Discuss World Of Warcraft</p>
            <p>General Discussion</p>
             </Item>
        </Box> 
        <Box gridColumn="span 4">
          <Item>
          <p>Community</p>
            <p>Discuss World Of Warcraft</p>
            <p>General Discussion</p>
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
          <p>Community</p>
            <p>Discuss World Of Warcraft</p>
            <p>General Discussion</p>
          </Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>
          <p>Community</p>
            <p>Discuss World Of Warcraft</p>
            <p>General Discussion</p>
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
