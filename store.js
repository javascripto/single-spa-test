window.pdp = {};

window.pdp.cart = {
  count: 0,
  addToCart() {
    this.count++;
    window.dispatchEvent(new Event('cartChange'));
  }
};

window.pdp.product = {
  name: 'Dog 1',
  image: 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg',
  setProduct(name, image) {
    this.name = name;
    this.image = image;
    window.dispatchEvent(new Event('productChange'));
  }
};
