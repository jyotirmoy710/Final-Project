import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  allaction: any = [
    {
      id: 1,
      movie_name: 'The Dark Knight',
      year: '2008',
      desc: 'Action',
      img: '/assets/action/the dark knight.jpg',
    },
    {
      id: 2,
      movie_name: 'The Lord of the Rings: The Return of the King',
      year: '2003',
      desc: 'Action',
      img: '/assets/action/The Lord of the Rings 1.jpg'
    },
    {
      id: 3,
      movie_name: 'Inception',
      year: '2010',
      desc: 'Action',
      img: '/assets/action/Inception.jpg'
    },
    {
      id: 4,
      movie_name: 'The Lord of the Rings: The Fellowship of the Ring',
      year: '2001',
      desc: 'Action',
      img: '/assets/action/The Lord of the Rings 2.jpg'
    },
    {
      id: 5,
      movie_name: 'The Lord of the Rings: The Two Towers',
      year: '2002',
      desc: 'Action',
      img: '/assets/action/The Lord of the Rings 3.jpg'
    },

    {
      id: 6,
      movie_name: 'The Matrix',
      year: '1999',
      desc: 'Action',
      img: '/assets/action/The Matrix.jpg'
    },
    {
      id: 7,
      movie_name: 'Star Wars: Episode V - The Empire Strikes Back',
      year: '1980',
      desc: 'Action',
      img: '/assets/action/Star Wars 1.jpg'
    },

    {
      id: 8,
      movie_name: 'Star Wars: Episode IV - A New Hope',
      year: '1977',
      desc: 'Action',
      img: '/assets/action/Star Wars 2.jpg'
    },
    {
      id: 9,
      movie_name: 'Terminator 2: Judgment Day',
      year: '1991',
      desc: 'Action',
      img: '/assets/action/Terminator 2.jpg'
    },
    {
      id: 10,
      movie_name: 'Seven Samurai',
      year: '1954',
      desc: 'Action',
      img: '/assets/action/Seven Samurai.jpg'
    },
    {
      id: 11,
      movie_name: 'Harkiri',
      year: '1962',
      desc: 'Action',
      img: '/assets/action/Harkiri.jpg'
    },
    {
      id: 12,
      movie_name: 'Gladiator',
      year: '2000',
      desc: 'Action',
      img: '/assets/action/Léon.jpg'
    },
    {
      id: 13,
      movie_name: 'Léon: The Professional',
      year: '1994',
      desc: 'Action',
      img: '/assets/action/Léon.jpg'
    },
    {
      id: 14,
      movie_name: 'Guardians of the Galaxy Vol. 3',
      year: '2023',
      desc: 'Action',
      img: '/assets/action/Guardians of the Galaxy Vol. 3.jpg'
    },
    {
      id: 15,
      movie_name: 'Avengers: Endgame',
      year: '2019',
      desc: 'Action',
      img: '/assets/action/Avengers.jpg'
    },
    {
      id: 16,
      movie_name: 'Spider-Man: Into the Spider-Verse',
      year: '2018',
      desc: 'Action',
      img: '/assets/action/Spider-Man.jpg'
    },
   
    {
      id: 17,
      movie_name: 'Indiana Jones and the Raiders of the Lost Ark',
      year: '1981',
      desc: 'Action',
      img: '/assets/action/Indiana Jones and the Raiders of the Lost Ark.jpg'
    },
    {
      id: 18,
      movie_name: 'Aliens',
      year: '1986',
      desc: 'Action',
      img: '/assets/action/Aliens.jpg'
    },
    {
      id: 19,
      movie_name: 'Avengers: Infinity War',
      year: '2018',
      desc: 'Action',
      img: '/assets/action/Avengers Infinity War.jpg'
    },
    {
      id: 20,
      movie_name: 'Oldboy',
      year: '2003',
      desc: 'Action',
      img: '/assets/action/Oldboy.jpg'
    },

  ];

  alldrama: any = [
    {
      id: 21,
      movie_name: 'Taxi Driver',
      year: '1976',
      desc: 'Drama',
      img:"/assets/drama/Taxi Driver.jpg"
    },
    {
      id: 22,
      movie_name: 'Pulp Fiction',
      year: '1994',
      desc: 'Drama',
      img:"/assets/drama/Pulp Fiction.png"
    },
    {
      id: 23,
      movie_name: 'The Godfather',
      year: '1972',
      desc: 'Drama',
      img:"/assets/drama/The Godfather.jpg"
    },
    {
      id: 24,
      movie_name: 'Go now',
      year: '1995',
      desc: 'Drama',
      img:"/assets/drama/Go now.jpg"
    },
    {
      id: 25,
      movie_name: 'Boyhood',
      year: '2014',
      desc: 'Drama',
      img:"/assets/drama/Boyhood.jpg"
    },
    {
      id: 26,
      movie_name: "Pan's Labyrinth",
      year: '2006',
      desc: 'Drama',
      img:"/assets/drama/Pan's Labyrinth.jpg"
    },
    {
      id: 27,
      movie_name: "What's eating gilbert grape",
      year: '1993',
      desc: 'Drama',
      img:"/assets/drama/What's eating gilbert grape.jpg"
    },
    {
      id: 28,
      movie_name: 'Billy Elliot',
      year: '2000',
      desc: 'Drama',
      img:"/assets/drama/Billy Elliot.jpg"
    },
    {
      id: 29,
      movie_name: 'Liitle miss sunshine',
      year: '2006',
      desc: 'Drama',
      img:"/assets/drama/Liitle miss sunshine.jpg"
    },
    {
      id: 30,
      movie_name: 'Slumdog millionaire',
      year: '2008',
      desc: 'Drama',
      img:"/assets/drama/Slumdog millionaire.png"
    },
    {
      id: 31,
      movie_name: 'Sorry we missed you',
      year: '2019',
      desc: 'Drama',
      img:"/assets/drama/Sorry we missed you.jpg"
    },
    {
      id: 32,
      movie_name: 'Mommy(I)',
      year: '2014',
      desc: 'Drama',
      img:"/assets/drama/Mommy(I).jpg"
    },
    {
      id: 33,
      movie_name: 'Infernal Affairs',
      year: '2002',
      desc: 'Drama',
      img:"/assets/drama/Infernal Affairs.jpg"
    },
    {
      id: 34,
      movie_name: 'So long, my son',
      year: '2019',
      desc: 'Drama',
      img:"/assets/drama/So long, my son.jpg"
    },
    {
      id: 35,
      movie_name: 'Dearest',
      year: '2014',
      desc: 'Drama',
      img:"/assets/drama/Dearest.jpg"
    },
    {
      id: 36,
      movie_name: 'Whiplash',
      year: '2014',
      desc: 'Drama',
      img:"/assets/drama/Whiplash.jpg"
    },
    {
      id: 37,
      movie_name: 'Joker (I)',
      year: '2019',
      desc: 'Drama',
      img:"/assets/drama/Joker (I).jpg"
    },
    {
      id: 38,
      movie_name: 'Requiem for a dream',
      year: '2000',
      desc: 'Drama',
      img:"/assets/drama/Requiem for a dream.jpg"
    },
    {
      id: 39,
      movie_name: 'The broke circle breakdown',
      year: '2012',
      desc: 'Drama',
      img:"/assets/drama/The broke circle breakdown.jpg"
    },
    {
      id: 40,
      movie_name: 'Lion',
      year: '2016',
      desc: 'Drama',
      img:"/assets/drama/Lion.jpg"
    },
  ];

  allsci_fi:any=[
    {
      id: 41,
      movie_name: 'The Flash',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/The Flash.jpg"
    },
    {
      id: 42,
      movie_name: 'Bird box-Barcelona',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Bird box-Barcelona.jpg"
    },
    {
      id: 43,
      movie_name: 'Transformers: Rise of the Beasts',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Transformers  Rise of the Beasts.jpg"
    },
    {
      id: 44,
      movie_name: 'Guardians of the Galaxy Vol. 3',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Guardians of the Galaxy Vol. 1.jpg"
    },
    {
      id: 45,
      movie_name: 'Spider-Man: Across the Spider-Verse',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Spider-Man Across the Spider-Verse.jpg"
    },
    {
      id: 46,
      movie_name: 'Blue Beetle',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Blue Beetle.jpg"
    },
    {
      id: 47,
      movie_name: 'The Creator',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/The Creator.jpg"
    },
    {
      id: 48,
      movie_name: 'Intersteller',
      year: '2014',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Intersteller.jpg"
    },
    {
      id: 49,
      movie_name: 'They Cloned Tyrone',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/They Cloned Tyrone.jpg"
    },
    {
      id: 50,
      movie_name: 'Elemental',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Elemental.jpg"
    },
    {
      id: 51,
      movie_name: 'Avatar:The Way of Water',
      year: '2022',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/AvatarThe Way of Water.jpeg"
    },
    {
      id: 52,
      movie_name: '65',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/65.jpg"
    },
    {
      id: 53,
      movie_name: 'Inception',
      year: '2010',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Inception.jpg"
    },
    {
      id: 54,
      movie_name: 'Tenet',
      year: '2020',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Tenet.jpg"
    },
    {
      id: 55,
      movie_name: 'Nimona',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Nimona.jpg"
    },
    {
      id: 56,
      movie_name: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Teenage Mutant Ninja Turtles Mutant Mayhem.jpeg"
    },
    {
      id: 57,
      movie_name: 'Bird Box',
      year: '2018',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Bird Box.jpg"
    },
    {
      id: 58,
      movie_name: 'Kalki 2898-AD',
      year: '2023',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Kalki 2898-AD.jpg"
    },
    {
      id: 59,
      movie_name: 'Dune',
      year: '2021',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/Dune.jpg"
    },
    {
      id: 60,
      movie_name: 'The Prestige',
      year: '2006',
      desc: 'Sci-Fi',
      img:"/assets/sci-fi/The Prestige.jpg"
    },
];

allromance:any=[
  {
    id: 61,
    movie_name: 'Barbie (I)',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/Barbie (I).jpg"
},
  {
    id: 62,
    movie_name: 'The Out-Laws',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/The Out-Laws.jpg"
},
  {
    id: 63,
    movie_name: 'Asteroid City',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/Asteroid City.jpg"
},
  {
    id: 64,
    movie_name: 'No Hard Fellings',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/No Hard Fellings.jpg"
},
  {
    id: 65,
    movie_name: 'My Fault',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/My Fault.jpg"
},
  {
    id: 66,
    movie_name: 'The Little Mermaid (I)',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/The Little Mermaid (I).jpeg"
},
  {
    id: 67,
    movie_name: 'Titanic',
    year: '1997',
    desc: 'Romance',
    img:"/assets/romance/Titanic.jpg"
},
  {
    id: 68,
    movie_name: 'Pride & Prejudice',
    year: '2005',
    desc: 'Romance',
    img:"/assets/romance/Pride & Prejudice.jpg"
},
  {
    id: 69,
    movie_name: 'Love (II)',
    year: '2015',
    desc: 'Romance',
    img:"/assets/romance/Love (II).jpg"
},
  {
    id: 70,
    movie_name: 'Past Lives',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/Past Lives.jpg"
},
  {
    id: 71,
    movie_name: 'Little Women',
    year: '2019',
    desc: 'Romance',
    img:"/assets/romance/Little Women.jpg"
},
  {
    id: 72,
    movie_name: 'Ghosted (I)',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/Ghosted (I).jpg"
},
  {
    id: 73,
    movie_name: 'Red, White & Royal Blue',
    year: '2023',
    desc: 'Romance',
    img:"/assets/romance/Red, White & Royal Blue.jpg"
},
  {
    id: 74,
    movie_name: 'Forest Gump',
    year: '1994',
    desc: 'Romance',
    img:"/assets/romance/Forest Gump.jpg"
},
  {
    id: 75,
    movie_name: 'Fifty Shades of Grey',
    year: '2015',
    desc: 'Romance',
    img:"/assets/romance/Fifty Shades of Grey.jpg"
},
  {
    id: 76,
    movie_name: 'Stardust',
    year: '2007',
    desc: 'Romance',
    img:"/assets/romance/Stardust.jpg"
},
  {
    id: 77,
    movie_name: 'About Time',
    year: '2013',
    desc: 'Romance',
    img:"/assets/romance/About Time.jpg"
},
  {
    id: 78,
    movie_name: 'Where the Crawdads Sing',
    year: '2022',
    desc: 'Romance',
    img:"/assets/romance/Where the Crawdads Sing.jpg"
},
  {
    id: 79,
    movie_name: 'Twilight (I)',
    year: '2008',
    desc: 'Romance',
    img:"/assets/romance/Twilight (I).jpg"
},
  {
    id: 80,
    movie_name: 'Thor: Love and Thunder',
    year: '2022',
    desc: 'Romance',
    img:"/assets/romance/Thor Love and Thunder.jpg"
},
];

allthriller:any=[
  {
    id: 81,
    movie_name: 'Identity',
    year: '2003',
    desc: 'Thriller',
    img:"/assets/thriller/Identity.jpg"
  },
  {
    id: 82,
    movie_name: 'Se7en',
    year: '1995',
    desc: 'Thriller',
    img:"/assets/thriller/Se7en.jpg"
  },
  {
    id: 83,
    movie_name: 'Fallen',
    year: '1998',
    desc: 'Thriller',
    img:"/assets/thriller/Fallen.jpg"
  },
  {
    id: 84,
    movie_name: 'The Bone Collector',
    year: '1999',
    desc: 'Thriller',
    img:"/assets/thriller/The Bone Collector.jpg"
  },
  {
    id: 85,
    movie_name: 'Secert Window',
    year: '2004',
    desc: 'Thriller',
    img:"/assets/thriller/Secert Window.jpg"
  },
  {
    id: 86,
    movie_name: 'The Book of Eli',
    year: '2010',
    desc: 'Thriller',
    img:"/assets/thriller/The Book of Eli.jpg"
  },
  {
    id: 87,
    movie_name: 'Deja Vu',
    year: '2006',
    desc: 'Thriller',
    img:"/assets/thriller/Deja Vu.jpg"
  },
  {
    id: 88,
    movie_name: 'Donnie Darko',
    year: '2001',
    desc: 'Thriller',
    img:"/assets/thriller/Donnie Darko.jpg"
  },
  {
    id: 89,
    movie_name: 'Sin City',
    year: '2005',
    desc: 'Thriller',
    img:"/assets/thriller/Sin City.jpg"
  },
  {
    id: 90,
    movie_name: 'Pulp Fiction',
    year: '1994',
    desc: 'Thriller',
    img:"/assets/thriller/Pulp Fiction.png"
  },
  {
    id: 91,
    movie_name: 'Kill Bill:Vol.1',
    year: '2003',
    desc: 'Thriller',
    img:"/assets/thriller/Kill Bill Vol.1.jpg"
  },
  {
    id: 92,
    movie_name: 'Kill Bill:Vol.2',
    year: '2004',
    desc: 'Thriller',
    img:"/assets/thriller/Kill Bill Vol.2.jpg"
  },
  {
    id: 93,
    movie_name: 'Training Day',
    year: '2001',
    desc: 'Thriller',
    img:"/assets/thriller/Training Day.jpg"
  },
  {
    id: 94,
    movie_name: 'The Hateful Eight',
    year: '2015',
    desc: 'Thriller',
    img:"/assets/thriller/The Hateful Eight.jpg"
  },
  {
    id: 95,
    movie_name: 'The Call (II)',
    year: '2013',
    desc: 'Thriller',
    img:"/assets/thriller/The Call (II).jpg"
  },
  {
    id: 96,
    movie_name: 'The Recruit',
    year: '2003',
    desc: 'Thriller',
    img:"/assets/thriller/The Recruit.jpg"
  },
  {
    id: 97,
    movie_name: 'Lucky Number Slevin',
    year: '2006',
    desc: 'Thriller',
    img:"/assets/thriller/The Recruit.jpg"
  },
  {
    id: 98,
    movie_name: 'Shutter Island',
    year: '2010',
    desc: 'Thriller',
    img:"/assets/thriller/Shutter Island.jpg"
  },
  {
    id: 99,
    movie_name: 'Baby Driver',
    year: '2017',
    desc: 'Thriller',
    img:"/assets/thriller/Baby Driver.jpg"
  },
  {
    id: 100,
    movie_name: 'What Lies Beneath',
    year: '2000',
    desc: 'Thriller',
    img:"/assets/thriller/What Lies Beneath.jpg"
  },
];

allcrime:any=[
  {
    id: 101,
    movie_name: 'The Out-Laws',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/The Out-Laws.jpg"
  },
  {
    id: 102,
    movie_name: ' A Haunting in Venice',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/A Haunting in Venice.jpg"
  },
  {
    id: 103,
    movie_name: 'John Wick: Chapter 4',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/John Wick Chapter 4.jpg"
  },
  {
    id: 104,
    movie_name: 'The Dark Knight',
    year: '2008',
    desc: 'Crime',
    img:"assets/crime/Batman Begins.jpg"
  },
  {
    id: 105,
    movie_name: 'God Is a Bullet',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/God Is a Bullet.png"
  },
  {
    id: 106,
    movie_name: 'Killers of the Flower Moon',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/Killers of the Flower Moon.jpg"
  },
  {
    id: 107,
    movie_name: 'Fast X',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/Fast X.jpg"
  },
  {
    id: 108,
    movie_name: 'The Batman',
    year: '2022',
    desc: 'Crime',
    img:"assets/crime/The Batman.jpg"
  },
  {
    id: 109,
    movie_name: 'The Wolf of Wall Street',
    year: '2013',
    desc: 'Crime',
    img:"assets/crime/The Wolf of Wall Street.jpg"
  },
  {
    id: 110,
    movie_name: 'The Godfather',
    year: '1972',
    desc: 'Crime',
    img:"assets/crime/The Godfather.jpg"
  },
  {
    id: 111,
    movie_name: 'Nobody (I)',
    year: '2021',
    desc: 'Crime',
    img:"assets/crime/Nobody (I).jpg"
  },
  {
    id: 112,
    movie_name: 'Pulp Fiction',
    year: '1994',
    desc: 'Crime',
    img:"assets/crime/Pulp Fiction.jpg"
  },
  {
    id: 113,
    movie_name: 'To Catch a Killer',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/To Catch a Killer.jpg"
  },
  {
    id: 114,
    movie_name: 'Infinity Pool',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/Infinity Pool.jpg"
  },
  {
    id: 115,
    movie_name: 'Batman Begins',
    year: '2005',
    desc: 'Crime',
    img:"assets/crime/The Batman.jpg"
  },
  {
    id: 116,
    movie_name: 'The Unbearable Weight of Massive Talent',
    year: '2022',
    desc: 'Crime',
    img:"assets/crime/The Unbearable Weight of Massive Talent.jpg"
  },
  {
    id: 117,
    movie_name: 'The Departed',
    year: '2006',
    desc: 'Crime',
    img:"assets/crime/The Departed.jpg"
  },
  {
    id: 118,
    movie_name: 'Shazam! Fury of the Gods',
    year: '2023',
    desc: 'Crime',
    img:"assets/crime/Shazam! Fury of the Gods.jpg"
  },
  {
    id: 119,
    movie_name: 'Heat',
    year: '1995',
    desc: 'Crime',
    img:"assets/crime/Heat.jpg"
  },
  {
    id: 120,
    movie_name: 'Prisoners',
    year: '2013',
    desc: 'Crime',
    img:"assets/crime/Prisoners.jpg"
  },
];

allcomedy:any=[
  {
    id: 121,
    movie_name: 'Scrooged',
    year: '1988',
    desc: 'Comedy',
    img:'/assets/comedy/Scrooged.jpg'
  },
  {
    id: 122,
    movie_name: 'Groundhog Day',
    year: '1993',
    desc: 'Comedy',
    img:'/assets/comedy/Groundhog Day.jpg'
  },
  {
    id: 123,
    movie_name: 'Friday',
    year: '1995',
    desc: 'Comedy',
    img:'/assets/comedy/Friday.jpg'
  },
  {
    id: 124,
    movie_name: 'Ted',
    year: '2012',
    desc: 'Comedy',
    img:'/assets/comedy/Ted.jpg'
  },
  {
    id: 125,
    movie_name: 'Zombieland',
    year: '2009',
    desc: 'Comedy',
    img:'/assets/comedy/Zombieland.jpg'
  },
  {
    id: 126,
    movie_name: 'The Nutty Professor',
    year: '1996',
    desc: 'Comedy',
    img:'/assets/comedy/The Nutty Professor.jpg'
  },
  {
    id: 127,
    movie_name: 'The Truman Show',
    year: '1998',
    desc: 'Comedy',
    img:'/assets/comedy/The Truman Show.jpg'
  },
  {
    id: 128,
    movie_name: 'Fear and Loathing in Las Vegas',
    year: '1998',
    desc: 'Comedy',
    img:'/assets/comedy/Fear and Loathing in Las Vegas.jpg'
  },
  {
    id: 129,
    movie_name: 'The Waterboy',
    year: '1998',
    desc: 'Comedy',
    img:'/assets/comedy/The Waterboy.jpg'
  },
  {
    id: 130,
    movie_name: 'Scary Movie',
    year: '2000',
    desc: 'Comedy',
    img:'/assets/comedy/Scary Movie.jpg'
  },
  {
    id: 131,
    movie_name: 'American Pie',
    year: '1999',
    desc: 'Comedy',
    img:'/assets/comedy/American Pie.jpg'
  },
  {
    id: 132,
    movie_name: 'Bad Boys',
    year: '1995',
    desc: 'Comedy',
    img:'/assets/comedy/Bad Boys.jpg'
  },
  {
    id: 133,
    movie_name: 'Bruce Almighty',
    year: '2003',
    desc: 'Comedy',
    img:'/assets/comedy/Bruce Almighty.jpg'
  },
  {
    id: 134,
    movie_name: 'The Longest Yard',
    year: '2005',
    desc: 'Comedy',
    img:'/assets/comedy/The Longest Yard.jpg'
  },
  {
    id: 135,
    movie_name: 'The Bucket List',
    year: '2007',
    desc: 'Comedy',
    img:'/assets/comedy/The Bucket List.jpg'
  },
  {
    id: 136,
    movie_name: 'Tropic Thunder',
    year: '2008',
    desc: 'Comedy',
    img:'/assets/comedy/Tropic Thunder.jpg'
  },
  {
    id: 137,
    movie_name: "Big Momma's House",
    year: '2000',
    desc: 'Comedy',
    img:"/assets/comedy/Big Momma's House.jpg"
  },
  {
    id: 138,
    movie_name: 'Movie 43',
    year: '2013',
    desc: 'Comedy',
    img:'/assets/comedy/Movie 43.jpg'
  },
  {
    id: 139,
    movie_name: '22 Jump Street',
    year: '2014',
    desc: 'Comedy',
    img:'/assets/comedy/22 Jump Street.jpg'
  },
  {
    id: 140,
    movie_name: 'Central Intelligence',
    year: '2016',
    desc: 'Comedy',
    img:'/assets/comedy/Central Intelligence.jpg'
  },
]




  constructor() { }
}
