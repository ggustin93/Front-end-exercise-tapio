import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default () => {
  return (
    <AppBar>
      <Toolbar>
        <h1 class="text-3xl font-bold"> Simple Blog Example</h1>

        <Typography
          variant="headline"
          color="colorSecondary"
          noWrap
        ></Typography>
      </Toolbar>
    </AppBar>
  )
}
