
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        //Raw honey 
        {
          title: 'Desert Flower Honey', 
          size: "12oz", 
          quantity: 15, 
          details:"Smaller jar, easier to empty... still only the best",
          price: 12,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: false,
          imgUrl: "http://st.depositphotos.com/1017651/3251/i/950/depositphotos_32511413-Glass-jar-of-honey.jpg"
        }, {
          title: 'Desert Flower Honey', 
          size: "20oz", 
          quantity: 15, 
          details:"Bigger jar, more to pour...still only the best",
          price: 20,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: false,
          imgUrl: "https://static8.depositphotos.com/1003821/904/i/950/depositphotos_9041408-stock-photo-jar-of-honey.jpg"
        }, {
          title: 'Mesquite Honey', 
          size: "12oz", 
          quantity: 15, 
          details:"Smaller jar of Slightly crystalized, all natural honey",
          price: 12,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: false,
          imgUrl: "http://st.depositphotos.com/1017651/3251/i/950/depositphotos_32511413-Glass-jar-of-honey.jpg"

        },
        {
          title: 'Mesquite Honey', 
          size: "20oz", 
          quantity: 15, 
          details:"Larger jar of slightly crystalized for best flavor",
          price: 20,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: false,
          imgUrl: "https://static8.depositphotos.com/1003821/904/i/950/depositphotos_9041408-stock-photo-jar-of-honey.jpg"

        },{
          title: 'Sonoran Desert Honey', 
          size: "12oz", 
          quantity: 15, 
          details:"Smaller jar of easy to pour yum.",
          price: 12,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: false,
          imgUrl: "http://st.depositphotos.com/1017651/3251/i/950/depositphotos_32511413-Glass-jar-of-honey.jpg"

        },{
          title: 'Sonoran Desert Honey', 
          size: "20oz", 
          quantity: 15, 
          details:"Bigger jar of more to pour yummmyyy",
          price: 20,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: false,
          imgUrl: "https://static8.depositphotos.com/1003821/904/i/950/depositphotos_9041408-stock-photo-jar-of-honey.jpg"
        },
        // Infused Honey
        {
          title: 'Whipped Honey', 
          size: "12oz", 
          quantity: 25, 
          details:"A delicous combination of Desert Flower and Mesquite Honey",
          price: 15,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: true,
          imgUrl: "https://static8.depositphotos.com/1003821/904/i/950/depositphotos_9041408-stock-photo-jar-of-honey.jpg"
        },{
          title: 'Cinnamon Honey', 
          size: "12oz", 
          quantity: 25, 
          details:"Looking for Christmas in a spoon? Be sure to try one of our favorite infused honeys! ",
          price: 15,
          sale: false,
          free_shipping: false,
          inCart: 0,
          infused: true,
          imgUrl: "https://static8.depositphotos.com/1003821/904/i/950/depositphotos_9041408-stock-photo-jar-of-honey.jpg"
        }
      ]);
    });
};
