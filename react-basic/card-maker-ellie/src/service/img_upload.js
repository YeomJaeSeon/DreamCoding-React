export default class Cloudinary {
  url = 'https://api.cloudinary.com/v1_1/daz7vskce/image/upload';
  uploadPreset = 'dgx6r2po';

  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset);
    const response = await fetch(this.url, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data;
  }
}
