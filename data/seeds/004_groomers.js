exports.seed = async function (knex) {
  await knex('groomers').insert([
    {
      business_name: 'Muddy Paws',
      given_name: 'Bethany',
      family_name: 'Peters',
      phone_number: 2025551035,
      address: '1234 Muddy Paws Lane',
      city: 'Salt Lake City',
      state: 'UT',
      zip_code: '55555',
      country: 'United States',
    },
    {
      business_name: 'Wags to Riches',
      given_name: 'Nicholas',
      family_name: 'Duncan',
      phone_number: 2263389937,
      address: '4118 Hillcrest Circle',
      city: 'Buhl',
      state: 'ID',
      zip_code: '83316',
      country: 'United States',
    },
    {
      business_name: 'Ruff Cuts',
      given_name: 'Stewart',
      family_name: 'Tucker',
      phone_number: 4406066656,
      address: '2333 Single Street',
      city: 'Waltham',
      state: 'MA',
      zip_code: '02154',
      country: 'United States',
    },
    {
      business_name: 'Diamond in the Ruff',
      given_name: 'Brandy',
      family_name: 'Walsh',
      phone_number: 2233698766,
      address: '4721 Sun Valley Road',
      city: 'Kennewick',
      state: 'WA',
      zip_code: '99336',
      country: 'United States',
    },
    {
      business_name: 'Camp Bow Wow',
      given_name: 'Matty',
      family_name: 'Bowers',
      phone_number: 4119278902,
      address: '2370 Archwood Avenue',
      city: 'La Grange',
      state: 'WY',
      zip_code: '82221',
      country: 'United States',
    },
    {
      business_name: 'Bed and Biscuit',
      given_name: 'Leah',
      family_name: 'Parr',
      phone_number: 2818424189,
      address: '1412 Armbrester Drive',
      city: 'Bel Air',
      state: 'CA',
      zip_code: '90049',
      country: 'United States',
    },
    {
      business_name: 'Posh Paws',
      given_name: 'Jasmine',
      family_name: 'Welsh',
      phone_number: 7635673750,
      address: '4606  Lynch Street',
      city: 'Brentwood',
      state: 'CA',
      zip_code: '94513',
      country: 'United States',
    },
    {
      business_name: 'Animal House',
      given_name: 'Victoria',
      family_name: 'Rampling',
      phone_number: 9034573973,
      address: '2199 Poco Mas Drive',
      city: 'Dallas',
      state: 'TX',
      zip_code: '75212',
      country: 'United States',
    },
    {
      business_name: 'Doggy Diva',
      given_name: 'Stephanie',
      family_name: 'Gibson',
      phone_number: 9216376439,
      address: '4250  Hanifan Lane',
      city: 'Atlanta',
      state: 'GA',
      zip_code: '30305',
      country: 'United States',
    },
    {
      business_name: 'Bark Porch',
      given_name: 'Chloe',
      family_name: 'Smith',
      phone_number: 6556652936,
      address: '3840 Charmaine Lane',
      city: 'Lubbok',
      state: 'TX',
      zip_code: '79401',
      country: 'United States',
    },
    {
      business_name: 'Puppers and Pets',
      given_name: 'Andrew',
      family_name: 'Alexander',
      phone_number: 9987223840,
      address: '2436  Davis Place',
      city: 'Lima',
      state: 'OH',
      zip_code: '45801',
      country: 'United States',
    },
  ]);
};
