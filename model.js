const homePage = `<h1 class="title">Home</h1>
        <p class="content">Welcome to the Home Page.</p>
        </br >
        <p class="body"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis animi consequuntur laborum non quo architecto provident labore recusandae possimus assumenda repudiandae odio obcaecati, numquam ad mollitia odit ducimus nobis?
        Nobis, at debitis! Tenetur beatae ullam nesciunt consequuntur, eius exercitationem a ex, perspiciatis, sunt numquam dignissimos placeat quidem asperiores! Culpa delectus consectetur officiis tenetur sit iure a debitis laudantium non.
        Impedit odio atque debitis architecto sequi dolores! Esse eos vel, non eum beatae dicta, saepe provident officiis delectus dolore sequi? Iusto atque minima, rerum laboriosam non excepturi aperiam? Eos, ut?
        Ex dolor dolore voluptatibus provident doloremque autem, voluptatum delectus fugit maiores obcaecati amet quam! Maiores impedit, placeat blanditiis nam eum error doloremque sapiente nisi atque ipsam aliquid, quis veniam porro?
        Maxime explicabo quo aspernatur soluta in hic nisi et delectus iure sequi, nihil, vero labore deleniti fuga, itaque sint eius temporibus quaerat nostrum nulla! Ipsa praesentium sapiente perferendis voluptatibus nemo?</p>
        </div>`;
const aboutPage = `<h1 class="title">About</h1>
        <p class="content">Welcome to the About Page.</p>
        </br >
        <p class="body"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis animi consequuntur laborum non quo architecto provident labore recusandae possimus assumenda repudiandae odio obcaecati, numquam ad mollitia odit ducimus nobis?
        Nobis, at debitis! Tenetur beatae ullam nesciunt consequuntur, eius exercitationem a ex, perspiciatis, sunt numquam dignissimos placeat quidem asperiores! Culpa delectus consectetur officiis tenetur sit iure a debitis laudantium non.
        Impedit odio atque debitis architecto sequi dolores! Esse eos vel, non eum beatae dicta, saepe provident officiis delectus dolore sequi? Iusto atque minima, rerum laboriosam non excepturi aperiam? Eos, ut?
        Ex dolor dolore voluptatibus provident doloremque autem, voluptatum delectus fugit maiores obcaecati amet quam! Maiores impedit, placeat blanditiis nam eum error doloremque sapiente nisi atque ipsam aliquid, quis veniam porro?
        Maxime explicabo quo aspernatur soluta in hic nisi et delectus iure sequi, nihil, vero labore deleniti fuga, itaque sint eius temporibus quaerat nostrum nulla! Ipsa praesentium sapiente perferendis voluptatibus nemo?</p>
        </div>`;
const contactPage = `<h1>Contact Us</h1>
    <p>If you’d like to get in touch, please fill out the form below.</p>
    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Your name" required>
      
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Your email" required>
      
      <label for="message">Message</label>
      <textarea id="message" placeholder="Write your message..." required></textarea>
      
      <button type="submit">Send Message</button>
    </form>`;
const galleryPage = `<h1>Gallery</h1>
    <p>Beautiful Plant Gallery</p>
    <div class="gallery-grid">
      <img src="../images/pi.jpg" alt="Plant something fancy">
      <img src="../images/mon.jpg" alt="Monstera plant">
      <img src="../images/pink.jpg" alt="Pink princess plant">
      <img src="../images/fern.jpg" alt="Ferns cause my dad loves them :)"> 
      <img src="../images/frilly.jpg" alt="Frilly leaves plant">
      <img src="../images/light.jpg" alt="Light green leaves plant">
    </div>`;

export function changePage(pageName) {
    let navID = pageName + "Page";
  $("#app").html(eval(navID));
  
}
export function  loadData(fName, callback) 
{let newName = fName + "Fagan";
    callback(newName);}