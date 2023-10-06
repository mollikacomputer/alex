document.addEventListener(DOMContentLoaded, function(){
    const NavItemData = [
        { id: 1, title: 'Service Title 1', content: 'comment for Card 1', imgUrl:"" },
        { id: 2, title: 'Service Title 2', content: 'Comment for Card 2', imgUrl:"images/carpet-cleaning-services.jpg" },
        { id: 3, title: 'Service Title 3', content: 'Comment for Card 3', imgUrl:"images/carpet-cleaning.jpg" }
        // Add more data as needed
    ];
    // Get the Navbar container
    const navbarContainer = document.getElementById('dynamicNav-container');

    const navContent = `
    <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="index.html" </a></li>
              <li><a href="about.html" > About</a></li>
              <li><a href="services.html"> Services </a></li>
              <li><a href="contact.html"> Service </a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Carpet Cleaning Services</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Call (919)123-4567</a>
        </div>
      </div>
      `
    // Insert the generated HTML into the Navbar 
    navbarContainer.innerHTML = navContent;
})