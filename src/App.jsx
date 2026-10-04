import React from 'react'
import Card from './components/Card'

const App = () => {
  let users = [
  {
    fullName: "Tony Stark",
    profile: "https://i.pravatar.cc/150?img=12",
    coverImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800",
    title:'The Rise of Iron Man: A New Era ',
    likesCount: 12500,
    postCount: 340,
    viewsCount: 850000,
    followed: true
  },
  {
    fullName: "Peter Parker",
    profile: "https://i.pravatar.cc/150?img=11",
    coverImage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800",
     title:'Spider-Man Swings Into Action',
    likesCount: 9800,
    postCount: 280,
    viewsCount: 620000,
    followed: false
  },
  {
    fullName: "Bruce Wayne",
    profile: "https://i.pravatar.cc/150?img=13",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    title:'The Dark Knight Protects Gotham',
    likesCount: 22000,
    postCount: 510,
    viewsCount: 1500000,
    followed: true
  },
  {
    fullName: "Clark Kent",
    profile: "https://i.pravatar.cc/150?img=14",
    coverImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
    title:'Superman: The Last Son of Krypton',
    likesCount: 18500,
    postCount: 420,
    viewsCount: 1200000,
    followed: false
  },
  {
    fullName: "Diana Prince",
    profile: "https://i.pravatar.cc/150?img=47",
    coverImage: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    title:'Wonder Woman: The Power of Truth',
    likesCount: 16000,
    postCount: 390,
    viewsCount: 970000,
    followed: true
  },
  {
    fullName: "Thor Odinson",
    profile: "https://i.pravatar.cc/150?img=15",
    coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
     title:'Thor: The God of Thunder Returns',
    likesCount: 19500,
    postCount: 450,
    viewsCount: 1400000,
    followed: false
  },
  {
    fullName: "Natasha Romanoff",
    profile: "https://i.pravatar.cc/150?img=44",
    coverImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    title:'Black Widow: Secrets of the Past',
    likesCount: 11200,
    postCount: 310,
    viewsCount: 780000,
    followed: true
  },
  {
    fullName: "Steve Rogers",
    profile: "https://i.pravatar.cc/150?img=16",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    title:'Captain America: A Hero Never Falls',
    likesCount: 14200,
    postCount: 360,
    viewsCount: 910000,
    followed: false
  }
];
  return (
    <div className='w-[100%] bg-[#1a1919] p-[2rem] flex flex-row gap-5 flex-wrap'>
      {users.map(function(elem){
         return <Card user={elem} />
      })}
     
    </div>
  )
}

export default App