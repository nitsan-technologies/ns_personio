// import imagesLoaded from 'imagesloaded';
// import Isotope from 'isotope-layout';
// import LazyLoad from 'vanilla-lazyload';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

let iso = null;
const jobs = document.querySelectorAll('.job-data');
if (jobs) {
  let selectedCat = '';
  const jobsFilter = document.querySelectorAll('.jobs-tabs a');
  if (jobsFilter) {
    jobsFilter.forEach(($catBtn) => {
      $catBtn.addEventListener('click', (e) => {
        e.preventDefault();
        selectedCat = $catBtn.getAttribute('data-filter');
        if (selectedCat === '*') {
          selectedCat = '';
        } else {
          selectedCat = $catBtn.getAttribute('data-filter');
        }
        jobsFilter.forEach(($btn) => {
          $btn.classList.remove('active');
        });
        $catBtn.classList.add('active');
        iso.arrange({ filter: selectedCat });
        ScrollTrigger.refresh();
      });
    });
  }

function searchJobs() {
  const xhttp = new XMLHttpRequest();
  const search = document.getElementById('search-word');
  const searchword = search.value;
  const formData = new FormData();
  const url = search.getAttribute('data-url');
  formData.append('searchword', searchword);
  const categories = document.querySelectorAll('.jobs-tabs > a');
  xhttp.open('POST', url, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = xhttp.responseText;
      const myElement = tempDiv.querySelector('#jobs');
      document.getElementById('jobs').innerHTML = myElement.innerHTML;

      // Add display none class of not get anchors in response
      for (var i = 0; i < categories.length; i++) {
        var div = categories[i];
        var dataType = div.getAttribute("data-filter");
        var targetDiv = tempDiv.querySelector(`a[data-filter="${dataType}"]`);
         if (!targetDiv) {
          categories[i].classList.add("d-none");
         }
      }
      const jobs = document.querySelectorAll('.job-data');
      ScrollTrigger.refresh();
    }
  };
  xhttp.send(formData);
}

const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-word');

if(searchBox) {
  searchBox.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("search-btn").click();
    }
  });
}

if (searchBtn) {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchJobs();
  });
}
