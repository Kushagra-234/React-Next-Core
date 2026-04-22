import React, { useEffect, useState } from "react";

const imagesLinkArray = [
  {
    id: 1,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/AngularImage.png",
    newAlt: "Angular Image",
  },
  {
    id: 2,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102835/html5Image.png",
    newAlt: "HTML Image",
  },
  {
    id: 3,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/JSImage.jpg",
    newAlt: "JavaScript Image",
  },
  {
    id: 4,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/reactImage.png",
    newAlt: "React Image",
  },
  {
    id: 5,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/vueImage.png",
    newAlt: "Vue Image",
  },
  {
    id: 6,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/JSImage.jpg",
    newAlt: "JavaScript Image",
  },
  {
    id: 7,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/vueImage.png",
    newAlt: "Vue Image",
  },
  {
    id: 8,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102835/html5Image.png",
    newAlt: "HTML Image",
  },
  {
    id: 9,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/CSS3Image.png",
    newAlt: "CSS Image",
  },
  {
    id: 10,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/AngularImage.png",
    newAlt: "Angular Image",
  },
  {
    id: 11,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/CSS3Image.png",
    newAlt: "CSS Image",
  },
  {
    id: 12,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/reactImage.png",
    newAlt: "React Image",
  },
];

const MovingGame = () => {
  const [cards, setCards] = useState(imagesLinkArray);
  const [flipped, setFlipped] = useState<any[]>([]);
  const [matched, setMatched] = useState<any[]>([]);

  const handleClick = (card) => {
    if (
      flipped.length === 2 ||
      flipped.some((f) => f.id === card.id) ||
      matched.some((m) => m.id === card.id)
    )
      return;
    setFlipped([...flipped, card]);
  };


  useEffect(()=>{
    
  })

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;

      if (first.newAlt === second.newAlt) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 800);
      }
    }
  }, [flipped]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      Moving Game
      <div>
        {cards.map((card) => {
          const isOpen =
            flipped.find((cardItem) => cardItem === card) ||
            matched.find((cardItem) => cardItem === card);
          return (
            <div onClick={() => handleClick(card)}>
              {isOpen ? (
                <img alt="loading" width={200} height={200} src={card.image} />
              ) : (
                "?"
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovingGame;
