const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total");
const cartCount = document.getElementById("count");
const searchInput = document.getElementById("search");

let cart = [];

function displayProducts(productArray){

productList.innerHTML="";

productArray.forEach(product=>{

const div=document.createElement("div");

div.className="product";

div.innerHTML=`

<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>

`;

productList.appendChild(div);

});

}

function addToCart(id){

const product = products.find(p=>p.id===id);

cart.push(product);

updateCart();

}

function updateCart(){

cartItems.innerHTML="";
let total=0;

cart.forEach((item,index)=>{

total+=item.price;

const div=document.createElement("div");

div.className="cart-item";

div.innerHTML=`
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">Remove</button>
`;

cartItems.appendChild(div);

});

totalPrice.textContent=total;

cartCount.textContent=cart.length;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

const filtered = products.filter(product=>
product.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});

displayProducts(products);