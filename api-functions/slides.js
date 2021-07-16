exports.handler = async (event, context) => {
  const slides = [
    {
      id: 1,
      picture: "/images/slide1.jpg",
      pictureAlt: "Lego and app products",
    },
    {
      id: 2,
      picture: "/images/slide2.jpg",
      pictureAlt: "app products",
    },
    {
      id: 3,
      picture: "/images/slide3.jpg",
      pictureAlt: "apple products",
    },
    {
      id: 4,
      picture: "/images/slide4.jpg",
      pictureAlt: "macbook",
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(slides),
  };
};
