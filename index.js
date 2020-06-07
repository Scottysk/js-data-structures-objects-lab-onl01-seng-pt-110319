const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver);
  
  newDriver[key] = value;
  
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
  driver[key] = value;
  
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  
  delete newDriver[key];
  
  return newDriver;
}

function destructivelyDeleteDriverWithKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  
  delete driver[key];
  
  return driver;
}