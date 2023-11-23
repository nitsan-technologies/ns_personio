import Isotope from 'isotope-layout';

let iso = null;
function isotopFilter() {
  const jobsData = document.querySelectorAll('.job-data');

  if (jobsData) {
    jobsData.forEach(($grid) => {
      if ($grid.classList.contains('ns-personio-jobs--list')) {
        if (iso) {
          iso.destroy();
        }
        iso = new Isotope(($grid), {
          itemSelector: '.ns-personio-job-item',
          layoutMode: 'packery',
          percentPosition: true,
          packery: {
            initLayout: false,
            percentPosition: true,
          },
        });
      } else if ($grid.classList.contains('ns-personio-jobs--masonry')) {
        if (iso) {
          iso.destroy();
        }
        iso = new Isotope(($grid), {
          itemSelector: '.ns-personio-job-item',
          layoutMode: 'masonry',
        });
      }
    });

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
        });
      });
    }
  }
}
isotopFilter();
const filterButton = document.getElementById('job-filter');
const filterForm = document.getElementById('filterForm');

const jobs = document.getElementById('jobs-results');

if (filterButton) {
  filterButton.addEventListener('click', (e) => {
    e.preventDefault();
    const data = new FormData(filterForm);
    const url = filterForm.getAttribute('action');
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(http.responseText, 'text/html');
        // Get the new items
        // Render the items
        if (doc.getElementById('jobs-tabs')) {
          document.getElementById('jobs-tabs').innerHTML = doc.getElementById('jobs-tabs').innerHTML;
        }
        jobs.innerHTML = doc.getElementById('jobs-results').innerHTML;
        // ajaxPagination();
        isotopFilter();
      }
    };
    http.send(data);
  });
}
