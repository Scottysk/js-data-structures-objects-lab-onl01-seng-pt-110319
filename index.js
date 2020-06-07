const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver);
  
  newDriver[key] = value;
  
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
  Driver[key] = value;
  
  return Driver;
}