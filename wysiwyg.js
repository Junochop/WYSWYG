

people = [
  { title: "X-Men",
  name: "Wolverine",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://s-media-cache-ak0.pinimg.com/originals/5d/ea/e2/5deae2803f935056f378fefdb2e0f1e2.jpg",
  lifespan: {
    birth: 1747,
    death: 1797 } 

  },


  
  { title: "X-Men",
    name: "Cyclops",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://www.tapatalk.com/groups/theleagueofheroes/imageproxy.php?url=http://i40.photobucket.com/albums/e238/Gibson89/rosscyclops.png",
    lifespan: {
    birth: 1747,
    death: 1797 }
  },

  { title: "X-Men",
    name: "Cyclops",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "http://www.tencentticker.com/projectrooftop/wp-content/uploads/2012/08/Z2127158581388215_3.jpg",
    lifespan: {
    birth: 1747,
    death: 1797 }
  },

  { title: "X-Men",
    name: "Magneto",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://cdn.shopify.com/s/files/1/0238/7617/products/STK685327.jpg?v=1480850828",
    lifespan: {
    birth: 1747,
    death: 1797 }
  },

  { title: "X-Men",
    name: "Jean Grey",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "http://1.bp.blogspot.com/-_Ms7YrqtI5g/UXVfPvjaVtI/AAAAAAAABUI/k-FbGLFpwLE/s1600/tumblr_mf42w1dvhs1rk7w2qo5_1280.jpg",
    lifespan: {
    birth: 1747,
    death: 1797 }
  }

  

];

var outputEl = document.getElementById("output");
var counter = 0;
for (; counter < people.length; counter++) {

  // Give each person element a unique identifier
  var string = "";
  string += `<div class="person_container" id="person--${counter}">
 							<header>${people[counter].title}</header>
  							<header>${people[counter].name}</header>
  							<p class="bio" id="biomsg--${counter}">${people[counter].bio}</p>
  							<img class="picss"id="pics--${counter}" src="${people[counter].image}">
  							<p>Birth: ${people[counter].lifespan.birth} - Death: ${people[counter].lifespan.death }</p>
  						</div>`;
  output.innerHTML += string;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person_container");
var inputBox = document.getElementById("textField");
var bioId = "";

//**** Event listeners are created for When you click on one of the person elements, a dotted border should appear around it 
for (var i = 0; i < containerEl.length; i++) {

  containerEl[i].addEventListener("click", function() {
    	if (document.getElementsByClassName('dotted').length !== 0) {
  		document.getElementsByClassName('dotted')[0].classList.remove('dotted');
  }

  document.getElementById("textField").focus();
  this.classList.add("dotted");

  inputBox.addEventListener("keyup", function(e) {
   	console.log(this.value);
    var temp = document.getElementsByClassName("dotted")[0].getElementsByClassName("bio");
    temp[0].innerHTML = this.value;

     if(e.keyCode == 13) {
      inputBox.value = "";	
    }
    
   }) ;

   
  });

}







