exports.handler = async () => {
  const slides = [
    {
      id: 1,
      picture: "/images/slides/slide1.jpg",
      pictureAlt: "Lego and app products",
    },
    {
      id: 2,
      picture: "/images/slides/slide2.jpg",
      pictureAlt: "app products",
    },
    {
      id: 3,
      picture: "/images/slides/slide3.jpg",
      pictureAlt: "apple products",
    },
    {
      id: 4,
      picture: "/images/slides/slide4.jpg",
      pictureAlt: "macbook",
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(slides),
  };
};
