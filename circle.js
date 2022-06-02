const getAreaofCircle = (radius) => {
  let area = Math.PI * Math.pow(radius, 2);
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
};
const radius = process.argv.slice(2);

getAreaofCircle(radius);
