import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@mui/material/Grid'
import SecondaryHeader from '../header/secondaryHeader'
import { DoubleP } from '../common/textComponents'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import SanMateo from './projects/SanMateo'
import Fishing from './projects/Fishing'
import StevensCreek from './projects/StevensCreek'
import SanDiego from './projects/SanDiego'
const useStyles = createUseStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#666666',
  },

  link: {
    marginRight: '24px',
  },

  paper: {
    margin: '0 auto',
    padding: '0',
    backgroundColor: 'white',
    textAlign: 'left',
    minHeight: 'calc(100vh - 60px + 200px)',
  },
}))
const renderSwitch = (param) => {
    switch(param) {
      case 'san-mateo':
        return <SanMateo/>;
      case 'stevens-creek':
        return <StevensCreek/>
      case 'fishing':
        return <Fishing/>
      case 'san-diego':
        return <SanDiego/>
      default:
        return <div>nothing</div>;
    }
  }

const WorkDetailsPage = () => {
  const classes = useStyles()
  const params  = useParams();
  const id = params.id



  
  return (
    <>
      <SecondaryHeader />
      <div className={classes.container}>
        <div className={classes.paper}>
            {
                renderSwitch(id)
            }
        </div>
      </div>
    </>
  )
}

export default WorkDetailsPage
