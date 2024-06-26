export default function handleResponseFromAPI(promise) {
  promise
    .then((value) => {return { status: 200, body: 'Success' };})
    .then((result) => { console.log('Got a response from the API'); })
    .catch((error) => {return new Error();});
}
