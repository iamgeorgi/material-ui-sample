import React from 'react';
import { Container, ButtonGroup, Button, Typography, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
  btn: {
    fontSize: 16,
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      {/* its a <p> tag by default */}
      <Typography
        className={classes.title} 
        variant="h6" // it will use the size of h6
        component="h2" // it will be displayed as h2 component 
        gutterBottom
        color="textSecondary"
      >
        Create a new Note
      </Typography>

      {/* by default the text will be wrapped */}
      <Typography 
        color="secondary"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>

      <Button
        className={classes.btn}
        onClick = { () => console.log('you clicked me!') } 
        type="submit" 
        color="secondary"
        variant="contained"
        disableElevation // removes the dropshadow
        endIcon={<ArrowForwardIosIcon />}
        >
        Submit
      </Button>
    </Container>
  )
}
