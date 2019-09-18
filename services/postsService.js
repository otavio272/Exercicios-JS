
var getPosts = function() {
  var posts = [
    {
      id: 1,
      title: 'Junglers',
      image: 'lee1.png',
      description: 'Junglers no meta atual',
      body: 'Lee sin, Karthus, Reksai, Olaf, Sejuani, Skarner, Taliyah, Jarvan, Elise'
    },
    {
      id: 2,
      title: 'Mid',
      image: 'azir1.png',
      description: 'Mids atualmente viáveis',
      body: 'Azir, Ahri, Cassiopeia, Vladimir, Orianna, Corki, Twisted Fate entre outros.'
    },
    {
      id: 3,
      title: 'Top',
      image: 'camille1.png',
      description: 'Tops do meta atual',
      body: 'Aatrox, camille, Urgot, Irelia, Gnar, Rumble entre outros.'
    }
  ];

  return posts;
}

module.exports = {
  getPosts: getPosts
}