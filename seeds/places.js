exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Places').del()
    .then(function () {
      // Inserts seed entries
      return knex('Places').insert([
        {id: 1, place: 'Cape Reinga', date: '17/11/2015', description: 'Lighthouse', image: 'https://t1.pixers.pics/img/obrazy-na-plotnie-cape-reinga-lighthouse-krawedz-na-polnoc-od-nowej-zelandii.png?H4sIAAAAAAAAAyWKUQrCMBAFr6MgfUm2SdoeoL89QknjRiMioZuCeHojfr1h5uF4SUiMlJ-Vd5l2lvzhk1fqos6411pkAoS6kt-tt4mCP6OdMC9wBr0FOQzmp9Z5caa35AazJiLW2vsUgyKTjN-ubiS9-TFE1sp2j3L7AhACHOiCAAAA', lat:'-36.8547512', lng:'174.77874250000002'},
        {id: 2, place: 'Karikari Pennisula', date: '20/11/2015', description: 'Matai Bay, Puheke Beach', image: 'http://www.warrenwilliams.co.nz/2009/JAN_2934.jpg', lat:'-36.8547512', lng:'175.77874250000002'},
        {id: 3, place: 'Coopers Beach', date: '18/11/2015', description: 'nice beach', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/63/3d/taumarumaru-reserve-in.jpg', lat:'-36.8547512', lng:'176.77874250000002'},
        {id: 4, place: '90 Mile Beach', date: '19/11/2015', description: 'Giant Te Paki', image: 'http://www.radionz.co.nz/assets/news/47256/eight_col_90mile.jpg?1441761451', lat:'-36.8547512', lng:'177.77874250000002'},
        {id: 5, place: 'Kawakawa', date: '21/11/2015', description: 'Hundertwasser toilet', image: 'http://www.rogerwalker.co.nz/wp-content/uploads/2011/09/hundertwasser-toilet-exterior-new-zealand-kawakawa-cringel.com_.jpg', lat:'-36.8547512', lng:'178.77874250000002'}

      ]);
    });
};
