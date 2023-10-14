// comment card map function
document.addEventListener("DOMContentLoaded", function () {
  const navData = [
    { id: 1, title: "Home", path: "index.html" },
    { id: 1, title: "About", path: "about.html" },
    { id: 1, title: "Contact", path: "contact.html" },
    { id: 1, title: "Services", path: "services.html" },
  ];
  const getNavId = document.getElementById("dynamic-navbar");
  const navBarItems = navData
    .map(
      (item) => `<li class="z-50"> <a href=${item.path}>${item.title}</a> </li>`
    )
    .join(" ");
  const navInfo = ` 
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 ">
          ${navBarItems}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Carpet Cleaning</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 z-50">
         ${navBarItems}
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn">Call (919)123-4567</a>
      </div>
 `;

  getNavId.innerHTML = navInfo;
});
