import React, { Fragment } from 'react';

import { Paper, Button } from '@material-ui/core';

function PageTitle(props) {
  return (
    <Fragment>
      <Paper square elevation={2} className="app-page-title">
        <div>
          <div className="app-page-title--first">
            <div className="app-page-title--heading">
              <h1>{props.titleHeading}</h1>
            </div>
          </div>
        </div>
        <Button variant="contained" color="primary" style={{ fontWeight: 600 }}>
          CREATE NEW
        </Button>
      </Paper>
    </Fragment>
  );
}

export default PageTitle;
