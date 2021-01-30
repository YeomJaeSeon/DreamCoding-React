export default class UploadService{
  upload(file){
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dgx6r2po");
    return fetch( "https://api.cloudinary.com/v1_1/daz7vskce/image/upload", {
      method: "POST",
      body: formData
    })
      .then((response) => {
        return response.json();
      })
  }
}
