class CustomNav2 extends HTMLElement {
  constructor() {
    super();

    // Define the template
    this.innerHTML = `
    <div class="justify-between max-w-[1600px] px-10 mx-auto flex gap-[30px] text-white">
    <div class="max-w-[600px]" >
      <ul class="">
        <p>Empowering </p>
          <p class="text-gray-400"> Korean martial art emphasizing kicking techniques. More than just fighting, it's a holistic discipline cultivating physical and mental strength, alongside moral character.  Training is rigorous, building discipline, respect, perseverance, and self-control.  Students progress from basic movements to complex sparring, fostering resilience and focus.  The dojang creates a supportive community.  While Taekwondo equips practitioners for self-defense, its philosophy promotes peace and non-violence, aiming for harmonious resolutions. It's a journey of self-improvement, striving for excellence in mind and body. </p>
      </ul>
    </div>
    <div class="max-w-[600px]" >
      <ul class="max-lg:hidden">
        <p class="pb-3">Find us</p>
        <li  class="pb-3 text-gray-400"><p class="text-gray-300">Email: vrtkdclub@gmail.com</p></li>
        <li  class="pb-3 text-gray-400"><p class="text-gray-300">Phone Number: +855 93 302 830</p></li>
        <li  class="pb-3 text-gray-400"><p class="text-gray-300">Address: Olympic ,Residence L Cambodia, Street 292, Phnom Penh.</p></li>
      </ul>
    </div>
      <div class="flex gap-5">
        <a target="_blank" aria-label="Facebook" title="Facebook" data-type="click_navFooter" data-path="social:facebook" href="https://www.facebook.com/profile.php?id=61570617495492" class="social-link footer-link" data-pre="ILink"><svg class="social-link-icon" width="30px" fill="#808080" height="30px" viewBox="0 0 24 24"><path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path></svg></a>
      </div>
    </div>
    `;
  }
}

// Define the custom element
customElements.define('footer-clone', CustomNav2);
