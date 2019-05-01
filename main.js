/////////////////////////////////////////////
// Use the filter method to get all the big spenders in the main array into a new one.
//////////////////////////////////////////

const placeHere = document.querySelector("#output");

const addBusinessInfoToDom = (business, order) => {
  placeHere.innerHTML += `
          <h3>${business}</h3>
          <p>$${order}</p>
          `;
};
// to list all orders >= 9000 (including duplicates)
const bigSpenders = businesses.filter(business => {
  business.orders.forEach(order => {
    if (order >= 9000) {
      console.log(business.companyName, order);
      addBusinessInfoToDom(business.companyName, order);
    }
  });
});

// to list only businesses that have >=1 order >=9000
const addBigSpenders2ToDom = (name, order) => {
  bigSpenders2.forEach(spender => {
    placeHere.innerHTML += `
      <h3>${spender.companyName}</h3>
      `;
  });
};

const bigSpenders2 = businesses.filter(business => {
  return business.orders.find(order => {
    return order >= 9000;
  });
});
console.log(bigSpenders2);
addBigSpenders2ToDom();

/////////////////////////////////
// Lightning 1&2 - USING REDUCE
//////////////////////////////
const totalRainfall = monthlyRainfall.reduce((total, num) => {
  return total + num;
});

console.log(totalRainfall);

/* total must be there, item can be anything "taco" */
let sentence = words.reduce((total, item) => {
  return `${total} ${item}`;
});
//to add period at end of sentence
sentence += `.`;

console.log(sentence);

////////////////////////
// Practice: SOLAR SYSTEM
///////////////////////
const addPlanetNameToDom = planet => {
  placeHere.innerHTML += `
    <h3>${planet}</h3>
    `;
};

const grabPlanetNames = () => {
  planets.forEach(planet => {
    console.log(planet);
    addPlanetNameToDom(planet);
  });
};

/////////////////////////////////
// Practice: SOLAR SYSTEM Part 2
////////////////////////////////
function capitalize(item) {
  let upperCaseVersion = item.charAt(0).toUpperCase();
  let restOfName = item.slice(1);
  return upperCaseVersion + restOfName;
}

console.log(planets.map(capitalize));

////////////////////////////
// Practice: SPAM SPAM SPAM
///////////////////////////
// customers; //customers.contacts.email[0];
const entireList = [];
const makeEmailList = () => {
  customers.forEach(customer => {
    customer.contacts.email.forEach(email => {
      entireList.push(email);
    });
  });
  console.log(entireList);
};

makeEmailList();

///////////////////////////////
// CHALLENGE: CHAINING METHODS
///////////////////////////////

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(
  integers.sort(function(a, b) {
    return a - b;
  })
);
