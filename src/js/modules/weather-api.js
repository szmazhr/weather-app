async function fetchFromServer(url) {
  try {
    let response = await fetch(url, { mode: 'cors' });
    // console.log(response);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
export default fetchFromServer;