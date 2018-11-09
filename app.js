const dropdown = document.querySelector(".dropdown-toggler");
const dropdownItems = document.querySelector("#dropdown-items");
const icon = document.querySelector("#icon");

const iconUpArrow = '<i class="fas fa-chevron-up"></i>';
const iconRightArrow = '<i class="fas fa-chevron-right"></i>';

dropdown.addEventListener("click", dropdownToggle);

let display = false;

function dropdownToggle(e) {
  dropdownItems.classList.toggle("dropdown-items-active");
  if (dropdownItems.classList.contains("dropdown-items-active")) {
    icon.innerHTML = iconRightArrow;
    display = true;
  } else {
    icon.innerHTML = iconUpArrow;
    display = false;
  }

  if (display) {
    dropdownItems.style.display = "none";
  } else {
    dropdownItems.style.display = "block";
  }
}

// $(document).click(function() {
// 	if(this != $("#dropdown-items)) {
// 			$("#dropdown-items").hide();
// 	}
// });
