const data = {
  looks: [
    {
      id: 1,
      title: "Urban Street Style",
      type: "video",
      src: "/videos/look1.mp4",
      products: [
        {
          id: 101,
          name: "Indigo Kurti Set",
          price: 899,
          description: "Indigo printed cotton kurti with palazzo pants",
          image: "/images/kurti1.png"
        },
        {
          id: 102,
          name: "Pink Kurti Set",
          price: 1999,
          description: "Floral printed rayon anarkali kurti with dupatta",
          image: "/images/kurti2.png"
        },
        {
          id: 103,
          name: "orange Kurti set",
          price: 799,
          description: "Elegant green chikankari cotton kurti",
          image: "/images/kurti3.png"
        }
      ]
    },
    {
      id: 2,
      title: "Summer Collection",
      type: "video",
      src: "/videos/look2.mp4",
      products: [
        {
          id: 201,
          name: "Pastel Short Kurti",
          price: 1299,
          description: "Lightweight short kurti with floral embroidery",
          image: "/images/short-kurti1.png"
        },
        {
          id: 202,
          name: "Printed Top",
          price: 699,
          description: "Soft cotton printed top for daily wear",
          image: "/images/top.png"
        },
        {
          id: 203,
          name: "Cotton Pants",
          price: 499,
          description: "Comfortable grey straight-cut cotton pants",
          image: "/images/cotton-pants.png"
        }
      ]
    },
    {
      id: 3,
      title: "Casual Elegance",
      type: "image",
      src: "/images/look3.jpg",
      annotations: [
        {
          id: 1,
          x: 50,
          y: 30,
          product: {
            id: 301,
            name: "White Linen Shirt",
            price: 1499,
            description: "Breathable white linen shirt for casual occasions",
            image: "/images/linen-shirt.png"
          }
        },
        {
          id: 2,
          x: 50,
          y: 50,
          product: {
            id: 302,
            name: "Navy Blue Suit",
            price: 1799,
            description: "Stretchable navy blue jeans with slim fit",
            image: "/images/blue-suit.png"
          }
        },
        {
          id: 3,
          x: 57,
          y: 83,
          product: {
            id: 303,
            name: "Brown shoes",
            price: 1299,
            description: "Traditional brown leather kolhapuri chappals",
            image: "/images/brown-shoes.png"
          }
        }
      ]
    },
    {
      id: 4,
      title: "Athleisure",
      type: "image",
      src: "/images/look4.png",
      annotations: [
        {
          id: 1,
          x: 42,
          y: 25,
          product: {
            id: 401,
            name: "Long Suit",
            price: 999,
            description: "High support long suit sweat-wicking fabric",
            image: "/images/long-suit.png"
          }
        },
        {
          id: 2,
          x: 18,
          y: 75,
          product: {
            id: 402,
            name: "Handbag",
            price: 1499,
            description: "Breathable leggings for active lifestyle",
            image: "/images/handbag.png"
          }
        }
      ]
    }
  ]
};

export default data;
