// clone-nav.js

// Define the custom element
class CloneNav extends HTMLElement {
  constructor() {
    super();
    // Insert the HTML content of the nav element
    this.innerHTML = `
    <nav class="bg-gray-900 px-[50px] text-white">
    <div class="max-w-[1800px] mx-auto ">
      <div class=" flex justify-between items-center">
        <div>
          <a href="#home"><img src="../assets/Images/imgs/VRTKDLogo.png" alt="" class="w-[150px] "></a>
        </div>
        
        <ul class="md:flex gap-11 hidden">
          <li>
            <div class="group h-[80px] pt-7 hidden lg:block"id=" hoverLink"onmouseenter="navDrop(1)" onmouseleave="navHides(-1)">
              <div class="group-hover:bg-white rounded-lg">  
                <a href="#home" class="px-1 group-hover:text-blue-500 relative">Home</a>
              </div>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(2)" onmouseleave="navHides(-2)">
              <div class="group-hover:bg-white rounded-lg">
                <a href="#gallery" class="group-hover:text-blue-500 relative px-1">Gallery</a>
              </div>
            </div>
          </li>
          <li>
          
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(3)" onmouseleave="navHides(-3)">
              <div class="group-hover:bg-white rounded-lg">  
                <a href="#schedule" class="px-1 group-hover:text-blue-500 relative">Book A Schedule</a>
              </div>
            </div>
          </li>

        </ul>
        <div class="flex items-center gap-4 ">
          <div class="bg-white bg-opacity-30 rounded-xl">
            <a href="#home"><img src="../assets/Images/imgs/VRTKD01.png" alt="" class="w-[150px] "></a>
          </div>
        </div>
            <!--*!SECTION - Sidebar  -->
        </div>
      </div>
    </div>

    <div>
      
    </div>
  </nav>
    `;

    // Include external JavaScript files
    this.includeExternalScripts();
  }

  includeExternalScripts() {
    // Array of script URLs
    const scriptUrls = [
      '../assets/JS/index.js',
      '../assets/JS/main.js'
    ];

    // Iterate over each script URL and create script elements
    scriptUrls.forEach(url => {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;
      // Append the script element to the document's head
      document.head.appendChild(scriptElement);
    });
  }
}

// Define the custom element <clone-nav>
customElements.define('clone-nav', CloneNav);