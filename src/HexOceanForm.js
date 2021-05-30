import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { 
    Container,
    TextField,
    MenuItem,
    FormHelperText,
    Slider,
    Typography,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import validate from './validate';
import normalizeTime from './normalize_func/normalizeTime'
import normalizeNumber from './normalize_func/normalizeNumber'
import normalizeFloatNumber from './normalize_func/normalizeFloatNumber'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(0.5),
    background: 'white',
    '& > *': {
      margin: theme.spacing(1.5),
    },
  },
  buttonClear: {
    float: 'right'
  }
}));

const renderTextField = (
    { input, meta: { touched, error }, ...custom },
) => (
  <TextField
    variant="standard"
    helperText={touched && error}
    error={touched && error}
    fullWidth
    {...input}
    {...custom}
  />
);

const renderSlider = (
  { input, meta: { touched, error }, ...custom },
) => (
  <>
    <Slider
      {...input}
      {...custom}
    />
    <FormHelperText 
      error={touched && error}
    >
      {touched && error}
    </FormHelperText>
  </>
);

const renderSelect = (
  { input, meta: { touched, error }, children, ...custom }
) => (
  <TextField
    variant="standard"
    helperText={touched && error}
    error={touched && error}
    fullWidth
    select
    onChange={(value) => input.onChange(value)}
    {...input}
    {...custom}
    children={children}
  />
)

let HexOceanForm = props => {
  const { handleSubmit, pristine, reset, submitting, dishType } = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <form className={classes.root} onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={renderTextField}
            label="Dish name"
          />
        </div>
        <div>
          <Field
            name="preparation_time"
            component={renderTextField}
            label="Preparation time"
            placeholder="hh:mm:ss"
            normalize={normalizeTime}
          />
        </div>
        <div>
        <Field
            name="type"
            label="Dish type"
            component={renderSelect}
          >
            <MenuItem value="pizza">pizza</MenuItem>
            <MenuItem value="soup">soup</MenuItem>
            <MenuItem value="sandwich">sandwich</MenuItem>
        </Field>
        </div>
        {(() => {
          switch (dishType) {
            case 'pizza':
              return (
                <>
                <div>
                  <Field
                    name="no_of_slices"
                    component={renderTextField}
                    label="Number of slices"
                    type="number"
                    normalize={normalizeNumber}
                  />
                </div>
                <div>
                  <Field
                    name="diameter"
                    component={renderTextField}
                    label="Diameter"
                    type="number"
                    normalize={normalizeFloatNumber}
                  />
                </div>
                </>
              );
            case 'soup':
              return (
                <div>
                  <Typography gutterBottom>
                    Spiciness scale
                  </Typography>
                  <Field
                    name="spiciness_scale"
                    component={renderSlider}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                  />
                </div>
              );
            case 'sandwich':
              return (
                <div>
                  <Field
                    name="slices_of_bread"
                    component={renderTextField}
                    label="Slices of bread"
                    type="number"
                    normalize={normalizeNumber}
                  />
                </div>
              );
            default:
              return null;
          }
        })()}
        <div>
          <Button 
            variant="contained" 
            color="primary"
            disabled={pristine || submitting}
            type="submit"
          >
            Submit
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            disabled={pristine || submitting}
            onClick={reset}
            className={classes.buttonClear}
          >
            Clear Values
          </Button>
        </div>
      </form>
    </Container>
  );
};

HexOceanForm = reduxForm({
  form: 'HexOceanForm',
  validate,
})(HexOceanForm);


const selector = formValueSelector('HexOceanForm');
HexOceanForm = connect(state => {
  const dishType = selector(state, 'type');
  return {
    dishType,
  };
})(HexOceanForm);

export default HexOceanForm