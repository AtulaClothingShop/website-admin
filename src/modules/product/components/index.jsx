/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons';

import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  IconButton,
  Grid,
  TextField,
  Button,
  CardContent,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

// Layout
import { PageTitle } from '../../../layout-components';

// Actions
import { ProductActions } from '../redux/actions';

function ProductManagement(props) {
  const { product } = props;
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    props.getProducts();
  }, []);

  let products = product?.products;
  return (
    <Fragment>
      <PageTitle titleHeading={`Product management`} />

      <Card className={'shop-card'}>
        <CardContent>
          <Grid
            container
            className="grid-container"
            alignItems="center"
            spacing={5}>
            <Grid item sm={3} className="grid-item">
              <TextField
                id="code-field"
                label="Code"
                variant="outlined"
                size="small"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={3} className="grid-item">
              <TextField
                id="name-field"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={3} className="grid-item">
              <FormControl variant="outlined" fullWidth={true} size="small">
                <InputLabel id="type-select-label">Type</InputLabel>
                <Select
                  labelId="type-select-label"
                  id="type-select"
                  // value={age}
                  // onChange={handleChange}
                  label="Type">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Men</MenuItem>
                  <MenuItem value={20}>Women</MenuItem>
                  <MenuItem value={30}>Kid</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={1} className="grid-item">
              <IconButton
                color="primary"
                size="medium"
                onClick={() => handleExpand()}>
                {expand ? (
                  <FontAwesomeIcon icon={faAngleDoubleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDoubleDown} />
                )}
              </IconButton>
            </Grid>
            <Grid item sm={2}>
              <Button
                variant="contained"
                color="primary"
                className="btn-bool"
                si
                fullWidth={true}>
                SEARCH
              </Button>
            </Grid>
          </Grid>
          {expand && (
            <Grid container spacing={5}>
              <Grid item sm={3}>
                <TextField
                  id="outlined-basic1"
                  label="Outlined"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item sm={3}>
                <TextField
                  id="outlined1"
                  label="Outlined"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>

      <Card className={'shop-card'}>
        <CardContent>
          <TableContainer className="mb-4">
            <Table
              className="table-hover table-alternate text-nowrap"
              stickyHeader
              aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell className="text-center">No.</TableCell>
                  <TableCell className="text-center">Code</TableCell>
                  <TableCell className="text-center">Name</TableCell>
                  <TableCell className="text-center">Type</TableCell>
                  <TableCell className="text-center">Price</TableCell>
                  <TableCell className="text-center">Size Ranges</TableCell>
                  <TableCell className="text-center">Total Quantity</TableCell>
                  <TableCell className="text-center">Discount</TableCell>
                  <TableCell className="text-center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.items?.length > 0 &&
                  products.items.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="text-center">{index + 1}</div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-weight-bold">{item.code}</span>
                      </TableCell>
                      <TableCell className="">
                        <span className="">{item.name}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="">{item.type}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className="font-weight-bold"
                          style={{ color: '#1445ff' }}>
                          ${item.price}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="">
                          {item.sizeRanges.map((size, index) => {
                            if (index === 0) {
                              return size;
                            } else {
                              return ', ' + size;
                            }
                          })}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="">{item.totalQuantity}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="">
                          {item.discount ? (
                            <FontAwesomeIcon
                              icon={['far', 'check-circle']}
                              color="#00c750"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={['far', 'window-close']}
                              color="#ff1414"
                            />
                          )}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Box>
                          <IconButton color="primary" size="small">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Fragment>
  );
}

function mapState(state) {
  const { product } = state;
  return { product };
}
const actions = {
  getProducts: ProductActions.getProducts
};

export default connect(mapState, actions)(ProductManagement);
