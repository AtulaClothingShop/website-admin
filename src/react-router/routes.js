import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import { PublicRoute } from './publicRoute';
import { PermissionRoute, AllRoute } from './permission';

// Theme
import MuiTheme from '../theme';

// Layout Blueprints
import { LeftSidebar } from '../layout-blueprints';

// Component
const NotFound = lazy(() => import('../modules/not-found'));
const ProductManagement = lazy(() => import('../modules/product/components'));

const Routes = props => {
  const { user } = props;
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  let currentUser = user.currentUser;

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load the live preview examples
              </div>
            </div>
          }>
          <Switch>
            <Route path={AllRoute}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <PublicRoute
                      path={PermissionRoute.PRODUCT.path}
                      title={PermissionRoute.PRODUCT.title}
                      component={ProductManagement}
                    />
                    <PublicRoute
                      path={PermissionRoute.NOT_FOUND.path}
                      title={PermissionRoute.NOT_FOUND.title}
                      component={NotFound}
                    />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
            <Redirect to="/404" />
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

function mapState(state) {
  return state;
}
const actions = {};

const connectedRoutes = connect(mapState, actions)(Routes);
export { connectedRoutes as Routes };
