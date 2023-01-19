import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';
import Module from './module';
import * as Sentry from "@sentry/react";

function Pages() {
  return (
    <Sentry>
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
      <Module path="/track/:trackId/module/:moduleId" />
    </Router>
    </Sentry>
  );
}

export default Sentry.withProfiler(Pages);
