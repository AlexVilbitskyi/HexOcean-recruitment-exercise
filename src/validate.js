function validate(values) {
    const errors = {};
    const requiredFields = [
      'name',
      'preparation_time',
      'type',
      "no_of_slices",
      "diameter",
      "spiciness_scale",
      "slices_of_bread",
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    if ( 
      values.preparation_time &&
      values.preparation_time.length < 8 
    ) {
      errors.preparation_time = 'Enter time in format "hh:mm:ss"';
    }
    return errors;
}

export default validate