// There's a new attraction at this year's Codeville festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

// The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

// Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

// In this challenge, we'll need to implement four functions.

// The first three will calculate the volume of the individual shapes:

// sphereVolume()will calculate the volume of a sphere given a radius
// coneVolume() will calculate the volume of a cone given a radius and a height
// prismVolume() will calculate the volume of a prism given a height, a width, and a depth
// The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

const sphereVolume = function(radius) {
  return Math.pow(radius, 3) * (4/3) * Math.PI;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189); //checks to make sure function is working properly

const coneVolume = function(radius, height) {
  return (1/3) * Math.PI * Math.pow(radius, 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49); //checks to make sure function is working properly

const prismVolume = function(height, width, depth) {
  return depth * width * height;
};

console.log(prismVolume(3, 4, 5) === 60); //checks to make sure function is working properly

const totalVolume = function(obj) {
  let totalVolume = 0;

  for (let x of obj) {
    if (x.type === 'sphere') {
      totalVolume += sphereVolume(x.radius);
    } else if (x.type === 'cone') {
      totalVolume += coneVolume(x.radius, x.height);
    }
  }

  return totalVolume;
};

//objects for total volume function
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000); //checks to make sure function is working properly