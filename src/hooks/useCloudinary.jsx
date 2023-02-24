import cloudinary from "cloudinary";

// Configure Cloudinary with your credentials
// cloudinary.config({
//   cloud_name: "dfmdacf6w",
//   api_key: "242969794617587",
//   api_secret: "Dm7ZfI-wru-g75QJslj_JNOpw2I",
// });

const useCloudinary = () => {


  const generateDeleteSignature = (publicId) => {
    // const timestamp = Math.round(new Date().getTime() / 1000);
    // const signature = cloudinary.utils.api_sign_request(
    //   { public_id: publicId, timestamp },
    //   cloudinary.config().api_secret
    // );
    // return { timestamp, signature };
  };

  return {
    generateDeleteSignature
  };
};

export default useCloudinary;
