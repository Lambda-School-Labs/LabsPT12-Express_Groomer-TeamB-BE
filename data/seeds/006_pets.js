/* eslint-disable prettier/prettier */
exports.seed = async function (knex) {
  await knex('pets').insert([
    {
      pet_types_id: 1,
      customer_id: 1,
      pet_name: 'Fido',
      pet_picture: '',
      pet_color: 'Golden',
      pet_gender: 'Male',
      spay_neuter: true,
      special_request: 'Please give him a little cowboy bandana',
      pet_temperment: 'Gentle',
      shots_current: true,
    },
  ]);
};