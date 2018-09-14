class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL)
    .then((response)=>{
      // console.log(response.data);
      fetchAll(response.data) })
    .catch((err)=>{
        console.log(err)
    })
  }

  getOneRegister (id) {
    // console.log("the full URL===" , this.BASE_URL+id)
    axios.get(this.BASE_URL+'/'+id)
    .then((response)=>{
      // console.log(response.data);
      fetchOne(response.data) })
    .catch((err)=>{
        console.log(err)
        printError();
    })
  }

  createOneRegister(newChar) {
    axios.post(this.BASE_URL, newChar)
    .then((response)=>{
      console.log("got one registered....", response)
      this.getFullList ();
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  updateOneRegister (id, char) {
    axios.put(this.BASE_URL+'/'+id, char)
    .then((response)=>{
      fetchOne(response.data) })
    .catch((err)=>{
        console.log(err);
    })
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL+'/'+id)
    .then((response)=>{
      console.log(response);
      this.getFullList (); })
    .catch((err)=>{
        console.log(err)
        printError();
    })
  }
}
