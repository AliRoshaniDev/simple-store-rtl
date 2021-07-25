exports.handler = async (event) => {
  const products = [
    {
      id: 1,
      name: "ساعت ساده",
      price: 100,
      picture: "/images/products/product1.jpg",
      instock: true,
    },
    {
      id: 2,
      name: "آیفون X",
      price: 150,
      picture: "/images/products/product2.jpg",
      instock: true,
    },
    {
      id: 3,
      name: "عینک سیمی",
      price: 81,
      picture: "/images/products/product3.jpg",
      instock: false,
    },
    {
      id: 4,
      name: "عطر مشهدی",
      price: 32,
      picture: "/images/products/product4.jpg",
      instock: true,
    },
    {
      id: 5,
      name: "آیفون 11",
      price: 175,
      picture: "/images/products/product5.jpg",
      instock: true,
    },
    {
      id: 6,
      name: "عینک لاکچری",
      price: 93,
      picture: "/images/products/product6.jpg",
      instock: true,
    },
    {
      id: 7,
      name: "ساعت اصل چین",
      price: 85,
      picture: "/images/products/product7.jpg",
      instock: true,
    },
    {
      id: 8,
      name: "ساعت کاسیو",
      price: 38,
      picture: "/images/products/product8.jpg",
      instock: false,
    },
    {
      id: 9,
      name: "ادکلن لاکچری",
      price: 92,
      picture: "/images/products/product9.jpg",
      instock: true,
    },
    {
      id: 10,
      name: "عینک پلاستیکی",
      price: 56,
      picture: "/images/products/product10.jpg",
      instock: true,
    },
    {
      id: 11,
      name: "ایرفون apple",
      price: 90,
      picture: "/images/products/product11.jpg",
      instock: true,
    },
    {
      id: 12,
      name: "کابل شارژ",
      price: 12,
      picture: "/images/products/product12.jpg",
      instock: true,
    },
    {
      id: 13,
      name: "عینک خفن",
      price: 121,
      picture: "/images/products/product13.jpg",
      instock: true,
    },
    {
      id: 14,
      name: "ادکلن اصل",
      price: 125,
      picture: "/images/products/product14.jpg",
      instock: true,
    },
    {
      id: 15,
      name: "عینک لوکس",
      price: 135,
      picture: "/images/products/product15.jpg",
      instock: false,
    },
    {
      id: 16,
      name: "ساعت ژاپنی",
      price: 93,
      picture: "/images/products/product16.jpg",
      instock: true,
    },
    {
      id: 17,
      name: "ساعت ظریف",
      price: 100,
      picture: "/images/products/product17.jpg",
      instock: true,
    },
    {
      id: 18,
      name: "هدفون apple",
      price: 200,
      picture: "/images/products/product18.jpg",
      instock: false,
    },
    {
      id: 19,
      name: "کامیون اسباب بازی",
      price: 24,
      picture: "/images/products/product19.jpg",
      instock: true,
    },
    {
      id: 20,
      name: "عینک شفاف",
      price: 62,
      picture: "/images/products/product20.jpg",
      instock: true,
    },
    {
      id: 21,
      name: "عینک زنونه",
      price: 39,
      picture: "/images/products/product21.jpg",
      instock: true,
    },
    {
      id: 22,
      name: "ساعت مشتی",
      price: 110,
      picture: "/images/products/product22.jpg",
      instock: true,
    },
    {
      id: 23,
      name: "عینک پر رو",
      price: 200,
      picture: "/images/products/product23.jpg",
      instock: false,
    },
    {
      id: 24,
      name: "ادکلن مردانه",
      price: 200,
      picture: "/images/products/product24.jpg",
      instock: true,
    },
  ];

  const { query, sort, filter, page } = event.queryStringParameters;

  function calculateData() {
    let finalData = [...products];
    if (query) {
      finalData = finalData.filter((product) => product.name.includes(query));
    }
    if (filter) {
      finalData = finalData.filter((product) => product.instock);
    }
    if (sort) {
      finalData = finalData.sort((priorProduct, latterProduct) => priorProduct[sort] - latterProduct[sort]);
    }
    if (page) {
      const start = Number(page) * 8 - 8;
      const end = Number(page) * 8;
      finalData = finalData.slice(start, end);
    }
    return finalData;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(calculateData()),
  };
};
