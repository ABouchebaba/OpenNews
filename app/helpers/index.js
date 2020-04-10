import { BACKEND_IMAGE_DIR } from "react-native-dotenv";

export const getImageSource = (partial_link) => {
  if (partial_link) return { uri: BACKEND_IMAGE_DIR + partial_link };
  // fallback image in assest
  // return { uri: "http://placehold.jp/320x240.png" };
  return require("../../assets/placeholder.jpg");
};

// TODO: CHANGE THIS PLEASE!!!
export const catInFrench = (cat) => {
  switch (cat) {
    case "Economy":
      return "Économie";
    case "Politics":
      return "Politique";
    default:
      return cat;
  }
};

export const dateDifference = (d) => {
  let current = new Date();
  let date = new Date(d.replace(" ", "T"));
  return timeAgoString(current - date);
};

const timeAgoString = (milis) => {
  let hours = Math.floor(milis / 1000 / 60 / 60);
  let days = Math.floor(hours / 24);
  if (days > 0) {
    hours = hours % 24;
    return `${days} days and ${hours} hours ago`;
  }
  return `${hours} hours ago`;
};
