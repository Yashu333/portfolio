// GitHub Pages doesn't allow images to start with "/", On the other hand the Next doesn't show images if it doesn't start with "/"
// TO fix it we will replace any symbols before the image in github
const isProd = process.env.NODE_ENV === 'production';

export const getImagePath = (path) => {
  if (isProd) {
    return path.replace(/^\/?/, ''); // Remove leading slash for production
  }
  return path; // Return as is for local development
};
