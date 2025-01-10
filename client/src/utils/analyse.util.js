export default function analyse(hairDataObject) {
  const shadeData = hairDataObject.map((hairData) => hairData.base_shade);

  // Sum of all numbers in the array
  const sum = shadeData.reduce((acc, num) => acc + num, 0);

  // calc the mean
  const mean = Math.floor(sum / shadeData.length);

  return mean;
}
