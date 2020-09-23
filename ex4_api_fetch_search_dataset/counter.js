// create our counter object
let frequencyCount = {};
function count(data) {
  // iterating through our data
  data.forEach(data => {
    // javascript objects have key: value pairs
    // we're going to set the key to be the material type
    // and value of that key to be the counter
    // ex) bronze: 1231
    // getting all the'keys'in our frequency counter
    // at first there will be no keys
    let keys = Object.keys(frequencyCount)
    // checking if the current material of our data is in keys
    // if not, jump to the else statement and create a new key and set the counter to 1
    // if there is a key that corresponds to our material, add 1 to our counter
    if(keys.includes(data.material)) {
      frequencyCount[data.material] += 1;
    } else {
      frequencyCount[data.material] = 1;
    }
  });
  // log to the console to see that it works!
  console.log(frequencyCount)
}
let sculptures = [
  {
    name: 'sculpture1',
    material: 'marble'
  },
  {
    name: 'sculpture2',
    material: 'bronze'
  },
  {
    name: 'sculpture3',
    material: 'marble'
  },
  {
    name: 'sculpture4',
    material: 'bronze'
  },
  {
    name: 'sculpture5',
    material: 'metal scraps'
  },
  {
    name: 'sculpture6',
    material: 'rubber'
  },
]
count(sculptures)

let sculptures = [

    {
      name: 'sculpture1',
      material: 'marble'
    },
    {
      name: 'sculpture2',
      material: 'bronze'
    },
    {
      name: 'sculpture3',
      material: 'marble'
    },
    {
      name: 'sculpture4',
      material: 'bronze'
    },
    {
      name: 'sculpture5',
      material: 'metal scraps'
    },
    {
      name: 'sculpture6',
      material: 'rubber'
    },
  ]
  