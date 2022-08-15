import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

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
  Select,
  FormHelperText
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { withFormik } from 'formik'
import * as Yup from 'yup'
import _ from 'lodash'

// Components
import { TagsInput } from '../../../common-components'

// Actions
import { ProductActions } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: '80vh',
    width: '80vh'
  },
  dialogContent: {
    overflowX: 'hidden'
  },
  tableCellInput: {
    width: '30%'
  }
}))

function CreateProductModal(props) {
  const { open, handleClose, values } = props
  const classes = useStyles()
  const [productInfos, setProductInfos] = useState([{}, {}])
  const [sizeRanges, setSizeRanges] = useState([])
  const [colors, setColors] = useState([])

  useEffect(() => {
    let _productInfos = []
    sizeRanges.forEach((size) => {
      colors.forEach((color) => {
        _productInfos.push({
          size: size,
          color: color,
          buyPrice: '',
          sellPrice: ''
        })
      })
    })

    setProductInfos(_productInfos)
  }, [sizeRanges, colors])

  const handleSelecetedSizeTags = (items) => {
    setSizeRanges(items)
  }

  const handleSelecetedColorTags = (items) => {
    setColors(items)
  }

  const handleProductBuyPrice = (e, index) => {
    let _productInfos = productInfos
    if (index < _productInfos.length) {
      _productInfos[index].buyPrice = e.target.value.toString()
    }

    setProductInfos(_productInfos)
  }

  const handleProductSellPrice = (e, index) => {
    let _productInfos = productInfos
    if (index < _productInfos.length) {
      _productInfos[index].sellPrice = e.target.value.toString()
    }

    setProductInfos(_productInfos)
  }

  const handleCreateProduct = () => {
    props.createProduct({
      ...props.values,
      sizeRanges: sizeRanges,
      colors: colors,
      productInfos: productInfos
    })
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} classes={{ paper: classes.dialogPaper }} fullWidth={true} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Create New Product</DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <FormControl fullWidth margin='normal'>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Name'
                    fullWidth
                    value={values.name}
                    onChange={props.handleChange}
                    error={!!props.errors.name}
                  />
                  <FormHelperText error={!!props.errors.name}>{props.errors.name}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin='normal'>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='description'
                    label='Description'
                    fullWidth
                    value={values.description}
                    onChange={props.handleChange}
                    error={!!props.errors.description}
                  />
                  <FormHelperText error={!!props.errors.description}>{props.errors.description}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='type-select-label'>Type</InputLabel>
                  <Select
                    labelId='type-select-label'
                    id='type-select'
                    label='Type'
                    value={values.type}
                    onChange={props.handleChange('type')}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'CAKE'}>CAKE</MenuItem>
                    <MenuItem value={'CANDY'}>CANDY</MenuItem>
                    <MenuItem value={'OTHER'}>OTHER</MenuItem>
                  </Select>
                  <FormHelperText error={!!props.errors.type}>{props.errors.type}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TagsInput
                  selectedTags={handleSelecetedSizeTags}
                  fullWidth
                  autoFocus
                  margin='dense'
                  id='size-ranges'
                  label='Size Ranges'
                  placeholder='Add size'
                />
              </Grid>
              <Grid item xs={12}>
                <TagsInput
                  selectedTags={handleSelecetedColorTags}
                  autoFocus
                  margin='dense'
                  id='colors'
                  label='Colors'
                  placeholder='Add color'
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <Table className='table-hover table-alternate text-nowrap' stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell className='text-center'>No.</TableCell>
                    <TableCell className='text-center'>Size</TableCell>
                    <TableCell className='text-center'>Color</TableCell>
                    <TableCell>Buy Price</TableCell>
                    <TableCell>Sell Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productInfos?.length > 0 &&
                    productInfos.map((item, index) => (
                      <TableRow key={'product-info' + index}>
                        <TableCell>
                          <div className='text-center'>{index + 1}</div>
                        </TableCell>
                        <TableCell className='text-center'>
                          <span className='font-weight-bold'>{item.size}</span>
                        </TableCell>
                        <TableCell className='text-center'>
                          <span className='font-weight-bold'>{item.color}</span>
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellInput }}>
                          <TextField
                            variant='standard' // <== changed this
                            id={'buyprice' + index}
                            placeholder='Buy Price'
                            type='number'
                            InputProps={{
                              disableUnderline: true // <== added this
                            }}
                            onChange={(e) => handleProductBuyPrice(e, index)}
                          />
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellInput }}>
                          <TextField
                            variant='standard' // <== changed this
                            id={'sellprice' + index}
                            placeholder='Sell Price'
                            type='number'
                            InputProps={{
                              disableUnderline: true // <== added this
                            }}
                            onChange={(e) => handleProductSellPrice(e, index)}
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
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleCreateProduct} color='primary' disabled={!_.isEmpty(props.errors)}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

// Connect state redux
function mapState(state) {
  const { product } = state
  return { product }
}
const actions = {
  createProduct: ProductActions.createProduct
}

// Formik
const FormikCreateProductModal = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      name: '',
      type: ''
    }
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    name: Yup.string()
      .required('Name is required')
      .min(5, 'Name must have min 5 characters')
      .max(10, 'Name have max 10 characters'),
    description: Yup.string(),
    type: Yup.string()
      .required('Type is required')
      .oneOf(['CAKE', 'CANDY', 'OTHER'])
  })
})(CreateProductModal)

export default connect(mapState, actions)(FormikCreateProductModal)
