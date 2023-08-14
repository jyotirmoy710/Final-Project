import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoscarService {


  oscarmovies:any=[{
    id:1,
    movie_name:'The Godfather: Part II',
    year:'1974',
    desc:'Crime thriller',
    img:'/assets/oscar/The Godfather Part II.jpg'
  },
  {
    id:2,
    movie_name:'Casablanca',
    year:'1942',
    desc:'Romantic Drama',
    img:'/assets/oscar/Casablanca.jpg'
  },
  {
    id:3,
    movie_name:'Lawrence of Arabia',
    year:'1962',
    desc:'Historical Drama',
    img:'/assets/oscar/Lawrence of Arabia.jpg'
  },
  {
    id:4,
    movie_name:'All About Eve',
    year:'1950',
    desc:'Drama',
    img:'/assets/oscar/All About Eve.jpg'
  },
  {
    id:5,
    movie_name:'The Silence of the Lambs',
    year:'1991',
    desc:'Psychological horror',
    img:'/assets/oscar/The Silence of the Lambs.jpg'
  },
  {
    id:6,
    movie_name:'The Godfather',
    year:'1972',
    desc:'Crime thriller',
    img:'/assets/oscar/The Godfather.jpg'
  },
  {
    id:7,
    movie_name:'The French Connection',
    year:'1971',
    desc:' Neo-noir action thriller',
    img:'/assets/oscar/The French Connection.jpg'
  },
  {
    id:8,
    movie_name:'The Apartment',
    year:'1960',
    desc:'Romantic Drama',
    img:'/assets/oscar/The Apartment.jpg'
  },
  {
    id:9,
    movie_name:"Schindler's List",
    year:'1993',
    desc:'Historical Drama',
    img:"/assets/oscar/Schindler's List.jpg"
  },
  {
    id:10,
    movie_name:'Gone With the Wind',
    year:'1939',
    desc:'Historical Drama',
    img:'/assets/oscar/Gone With the Wind.jpg'
  },
  {
    id:11,
    movie_name:"One Flew Over the Cuckoo's Nest",
    year:'1975',
    desc:'Psychological Drama',
    img:"/assets/oscar/One Flew Over the Cuckoo's Nest.jpg"
  },
  {
    id:12,
    movie_name:'Midnight Cowboy',
    year:'1969',
    desc:'Drama',
    img:'/assets/oscar/Midnight Cowboy.jpg'
  },
  {
    id:13,
    movie_name:'It Happened One Night',
    year:'1934',
    desc:'Comedy',
    img:'/assets/oscar/It Happened One Night.jpg'
  },
  {
    id:15,
    movie_name:'Lord of the Rings: Return of the King',
    year:'2003',
    desc:'Fantasy adventure',
    img:'/assets/oscar/Lord of the Rings Return of the King.jpg'
  },
  {
    id:15,
    movie_name:'Rocky',
    year:'1976',
    desc:'Sports Drama',
    img:'/assets/oscar/Rocky.jpg'
  },
  {
    id:16,
    movie_name:'The Bridge on the River Kwai',
    year:'1957',
    desc:'War',
    img:'/assets/oscar/The Bridge on the River Kwai.jpg'
  },
  {
    id:17,
    movie_name:'No Country For Old Men',
    year:'2007',
    desc:'Neo-Western crime',
    img:'/assets/oscar/No Country For Old Men.jpg'
  },
  {
    id:18,
    movie_name:'On The Waterfront',
    year:'1954',
    desc:' Drama',
    img:'/assets/oscar/On The Waterfront.jpg'
  },
  {
    id:19,
    movie_name:'The Hurt Locker',
    year:'2008',
    desc:'Thriller',
    img:'/assets/oscar/The Hurt Locker.jpg'
  },
  {
    id:20,
    movie_name:'Amadeus',
    year:'1984',
    desc:'Biographical',
    img:'/assets/oscar/Amadeus.jpg'
  },
  
];

allhit:any=[
  {
    id:21,
    movie_name:'2001:A Space Odyssey',
    year:'1968',
    desc:'Science-Fiction',
    img:'/assets/hit/2001 A Space Odyssey.jpg'
},

{
  id:22,
  movie_name:'The Godfather',
  year:'1972',
  desc:'Thriller',
  img:'/assets/hit/The Godfather.jpg'
},

{
  id:23,
  movie_name:'Citizen Kane',
  year:'1941',
  desc:'Drama',
  img:'/assets/hit/Citizen Kane.jpg'
},
{
  id:24,
  movie_name:'Jeanne Dielman,23,Quai du Commerce, 1080 Bruxelles',
  year:'1975',
  desc:'Drama',
  img:'/assets/hit/Jeanne Dielman,23,Quai du Commerce.jpg'
},
{
  id:25,
  movie_name:'Raiders of the Lost Ark',
  year:'1981',
  desc:'Action & Adventure',
  img:'/assets/hit/Raiders of the Lost Ark.jpg'
},
{
  id:26,
  movie_name:'La Dolce Vita',
  year:'1960',
  desc:'Comedy & Drama',
  img:'/assets/hit/La Dolce Vita.jpg'
},
{
  id:27,
  movie_name:'Seven Samurai',
  year:'1954',
  desc:'Action & Aventure',
  img:'/assets/hit/Seven Samurai.jpg'
},
{
  id:28,
  movie_name:'In the Mood for Love',
  year:'2000',
  desc:'Drama',
  img:'/assets/hit/In the Mood for Love.jpg'
},
{
  id:29,
  movie_name:'There Will Be Blood',
  year:'2007',
  desc:'Drama',
  img:'/assets/hit/There Will Be Blood.jpg'
},
{
  id:30,
  movie_name:"Singin'in the  Rain",
  year:'1952',
  desc:'Comedy',
  img:"/assets/hit/Singin'in the  Rain.jpg"
},
{
  id:31,
  movie_name:"Goodfellas",
  year:'1990',
  desc:'Thriller',
  img:'/assets/hit/Goodfellas.jpg'
},
{
  id:32,
  movie_name:"North by orthwest",
  year:'1959',
  desc:'Thriller',
  img:'/assets/hit/North by orthwest.jpg'
},
{
  id:33,
  movie_name:"Mulholland Driver",
  year:'2001',
  desc:'Thriller',
  img:'/assets/hit/Mulholland Driver.jpg'
},
{
  id:34,
  movie_name:"Bicycle Thieves",
  year:'1948',
  desc:'Thriller',
  img:'/assets/hit/Bicycle Thieves.jpg'
},
{
  id:35,
  movie_name:"The Dark Knight",
  year:'2008',
  desc:'Action and adventure',
  img:'/assets/hit/The Dark Knight.jpg'
},
{
  id:36,
  movie_name:"City lights",
  year:'1931',
  desc:'Romantic & Comedy',
  img:'/assets/hit/City lights.jpg'
},
{
  id:37,
  movie_name:"Grand Illusion",
  year:'1937',
  desc:'War',
  img:'/assets/hit/Grand Illusion.jpg'
},
{
  id:38,
  movie_name:"His Girl Friday",
  year:'1940',
  desc:'comedy',
  img:'/assets/hit/His Girl Friday.jpg'
},
{
  id:39,
  movie_name:"THe Red Shoes",
  year:'1948',
  desc:'Drama',
  img:'/assets/hit/THe Red Shoes.jpg'
},
{
  id:40,
  movie_name:"Vertigo",
  year:'1958',
  desc:'Psychological Thriller',
  img:'/assets/hit/Vertigo.jpg'
},
]
  constructor() { }
}
