const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver);
  
  newDriver[key] = value;
  
  
}