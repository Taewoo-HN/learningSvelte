import { writable } from "svelte/store";
export const data = writable([
    {
      title: "The Dark Knight",
      genre: "Action",
      releaseDate: "2008",
      actor: "Christian Bale",
      likeCnt: 0,
      images: "/images/darkKnight.jpg",
      story: 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, <br> Batman, James Gordon and Harvey Dent must work together to put an end to the madness.'
    },
    {
      title: "Joker",
      genre: "Thriller",
      releaseDate: "2019",
      actor: "Joaquin Phoenix",
      likeCnt: 0,
      images: "/images/joker.jpg",
      story:'Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. <br> However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.'
    },
    {
      title: "Star is Born",
      genre: "Drama",
      releaseDate: "2018",
      actor: "Lady Gaga",
      likeCnt: 0,
      images: "/images/starIsBorn.jpg",
      story:'A musician helps a young singer find fame as age and<br>alcoholism send his own career into a downward spiral.'
    },
  ]);

