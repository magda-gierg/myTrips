exports.seed = function(knex, Promise) {
  return knex('Places').del()
    .then(function () {
      return knex('Places').insert([
        {id: 1, place: 'Cape Reinga', date: '17/11/2015', description: 'Lighthouse', image: 'https://t1.pixers.pics/img/obrazy-na-plotnie-cape-reinga-lighthouse-krawedz-na-polnoc-od-nowej-zelandii.png?H4sIAAAAAAAAAyWKUQrCMBAFr6MgfUm2SdoeoL89QknjRiMioZuCeHojfr1h5uF4SUiMlJ-Vd5l2lvzhk1fqos6411pkAoS6kt-tt4mCP6OdMC9wBr0FOQzmp9Z5caa35AazJiLW2vsUgyKTjN-ubiS9-TFE1sp2j3L7AhACHOiCAAAA', lat:'-34.428779', lng:'172.68048699999997'},
        {id: 2, place: 'Karikari Pennisula', date: '20/11/2015', description: 'Matai Bay, Puheke Beach', image: 'http://www.warrenwilliams.co.nz/2009/JAN_2910.jpg', lat:'-34.828882', lng:'173.40992000000006'},
        {id: 3, place: 'Coopers Beach', date: '18/11/2015', description: 'nice beach', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/63/3d/taumarumaru-reserve-in.jpg', lat:'-34.9925501', lng:'173.50816770000006'},
        {id: 4, place: '90 Mile Beach', date: '19/11/2015', description: 'Giant Te Paki', image: 'http://www.radionz.co.nz/assets/news/47256/eight_col_90mile.jpg?1441761451', lat:'-34.7194348', lng:'172.92841450000003'},
        {id: 5, place: 'Kawakawa', date: '21/11/2015', description: 'Hundertwasser toilet', image: 'http://www.rogerwalker.co.nz/wp-content/uploads/2011/09/hundertwasser-toilet-exterior-new-zealand-kawakawa-cringel.com_.jpg', lat:'-36.1612445', lng:'174.44341039999995'}

      ]);
    });
};
