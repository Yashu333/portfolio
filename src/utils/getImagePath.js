
const isProd = process.env.NODE_ENV === 'production';

export const getImagePath = (path) => {
  if (isProd) {
    return path.replace(/^\/?/, ''); // Remove leading slash for production
  }
  return path; // Return as is for local development
};
