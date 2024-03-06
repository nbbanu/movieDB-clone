document.addEventListener("click", (e) => {
  const isDropDownMenu = e.target.matches("[data-dropdown-item]");
  if (!isDropDownMenu && e.target.closest("[data-dropdown]") != null) return;

  let currentDropDown;
  if (isDropDownMenu) {
    currentDropDown = e.target.closest("[data-dropdown]");
    currentDropDown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropDown) return;
    dropdown.classList.remove("active");
  });
});
