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
          <a href="../public/index.html"><img src="../assets/Images/imgs/VRTKDLogo.png" alt="" class="w-[150px] "></a>
        </div>
        
        <ul class="md:flex gap-11 hidden">
          <li>
            <div class="group h-[80px] pt-7 hidden lg:block"id=" hoverLink"onmouseenter="navDrop(1)" onmouseleave="navHides(-1)">
              <a href="../public/new-feature.html" class="group-hover:text-blue-500 relative"
                >Home</a>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(2)" onmouseleave="navHides(-2)">
              <a href="#" class="group-hover:text-blue-500 relative">Men</a>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(3)" onmouseleave="navHides(-3)">
              <a href="../public/women.html" class="group-hover:text-blue-500 relative">Women</a>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(4)" onmouseleave="navHides(-4)">
              <a href="#" class="group-hover:text-blue-500 relative">Kids</a>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(5)" onmouseleave="navHides(-5)">
              <a href="#" class="group-hover:text-blue-500 relative">Sale</a>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(6)" onmouseleave="navHides(-6)">
              <a href="#" class="group-hover:text-blue-500 relative">Jordan</a>
            </div>
          </li>
        </ul>
        <div class="flex items-center gap-4">
          <div class="relative">
            <svg class=" absolute top-[5px]" aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
            <input type="text" placeholder="Search" class="pl-[28px] w-full border rounded-2xl py-[5px]" >
          </div>
          <div class="flex gap-4">
            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
          </div>
          <!--*SECTION - Sidebar  -->
          <div class="block cursor-pointer md:hidden ml-3" onclick="openNav()">
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
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
