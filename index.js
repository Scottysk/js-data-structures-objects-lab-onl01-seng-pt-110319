const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...obj };
 
  newObj[key] = value;
 
  return newObj;
}