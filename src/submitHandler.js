export default (async function submitHandler(values) {
  fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
  .then(response => response.json())
  .then(data => {
    window.alert('Success:', data);
  })
  .catch((error) => {
    window.alert('Error:', error);
  });
});