type carModel = string;
type carPrice = number;
type carColor = string;
type caravailability = boolean;

type cars = {
  model: carModel;
  price: carPrice;
  color?: carColor;
  availability?: caravailability;
};

interface bikes {
  model: carModel;
  price: carPrice;
  color?: carColor;
  availability?: caravailability;
}

interface boat extends bikes {
  country: string;
}

type bikeType = number;
type boatType = number;

const bike: bikes = {
  model: "no",
  price: 20,
  color: "red",
};
