const parseImgUrl = ({ transform, src }) => {
  // Get position of 'upload/' in link
  let position = src.indexOf("upload/") + 7;

  //? If transform is empty (Catch in prop types definition)
  if (!transform) {
    transform = "";
  } else {
    transform = `${transform},`;
  }

  // Optimal quality image transform
  let image = [
    src.slice(0, position),
    `${transform}q_auto/`,
    src.slice(position),
  ].join("");

  // Poor quality image placeholder transform
  let placeholder = [
    src.slice(0, position),
    `${transform}q_1,f_auto/`,
    src.slice(position),
  ].join("");

  return { image, placeholder };
};

export default parseImgUrl;
