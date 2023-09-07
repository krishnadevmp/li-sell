export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const trimBase64Prefix = (file) =>
  file.replace(/^data:image\/[a-z]+;base64,/, "");

export const prefixBase64 = (file) => `data:image/jpeg;base64,${file}`;
