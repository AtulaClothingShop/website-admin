import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Card,
  TableHead,
  Table,
  FormControl,
  MenuItem,
  InputLabel,
  Select
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
import { TagsInput } from '../../../common-components';

// Actions
import { ProductActions } from '../redux/actions';

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    height: '70vh',
    width: '70vh'
  },
  dialogContent: {
    overflowX: 'hidden'
  }
}));

function CreateProductModal(props) {
  const { open, handleClose } = props;
  const classes = useStyles();
  const [product, setProduct] = useState({
    name: '',
    type: '',
    price: ''
  });
  const [productInfos, setProductInfos] = useState([{}, {}]);
  const [sizeRanges, setSizeRanges] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    console.log(sizeRanges, colors);
    let _productInfos = [];
    sizeRanges.forEach(size => {
      colors.forEach(color => {
        _productInfos.push({
          size: size,
          color: color,
          quantity: 0
        });
      });
    });

    setProductInfos(_productInfos);
  }, [sizeRanges, colors]);

  const handleSelecetedSizeTags = items => {
    setSizeRanges(items);
  };

  const handleSelecetedColorTags = items => {
    setColors(items);
  };

  const handleChangeProduct = (e, type) => {
    console.log(e.target.value);
    setProduct({
      ...product,
      [type]: e.target.value
    });
  };

  const handleCreateProduct = () => {
    props.createProduct({
      name: 'T-shirt',
      price: '2.8',
      type: 'MEN',
      sizeRanges: ['39', '40'],
      productInfos: [
        {
          color: 'red',
          size: '39',
          quantity: 2
        },
        {
          color: 'yellow',
          size: '39',
          quantity: 1
        }
      ]
    });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.dialogPaper }}
      fullWidth={true}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create New Product</DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  fullWidth
                  value={product.name}
                  onChange={e => handleChangeProduct(e, 'name')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth={true}>
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
                    <MenuItem value={'MEN'}>MEN</MenuItem>
                    <MenuItem value={'WOMEN'}>WOMEN</MenuItem>
                    <MenuItem value={'KID'}>KID</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                  label="Price ($)"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TagsInput
                  selectedTags={handleSelecetedSizeTags}
                  fullWidth
                  autoFocus
                  margin="dense"
                  id="size-ranges"
                  label="Size Ranges"
                  placeholder="Add size"
                />
              </Grid>
              <Grid item xs={12}>
                <TagsInput
                  selectedTags={handleSelecetedColorTags}
                  autoFocus
                  margin="dense"
                  id="colors"
                  label="Colors"
                  placeholder="Add color"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <Table
                className="table-hover table-alternate text-nowrap"
                stickyHeader
                aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell className="text-center">No.</TableCell>
                    <TableCell className="text-center">Size</TableCell>
                    <TableCell className="text-center">Color</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productInfos?.length > 0 &&
                    productInfos.map((item, index) => (
                      <TableRow key={'product-info' + index}>
                        <TableCell>
                          <div className="text-center">{index + 1}</div>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-weight-bold">{item.size}</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-weight-bold">{item.color}</span>
                        </TableCell>
                        <TableCell>
                          <TextField
                            variant="standard" // <== changed this
                            margin="normal"
                            required
                            id={'quantity' + index}
                            autoFocus
                            placeholder="Quantity"
                            type="number"
                            InputProps={{
                              disableUnderline: true // <== added this
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreateProduct} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
function mapState(state) {
  const { product } = state;
  return { product };
}
const actions = {
  createProduct: ProductActions.createProduct
};

export default connect(mapState, actions)(CreateProductModal);
