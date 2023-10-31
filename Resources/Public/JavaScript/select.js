const categorySelect = document.getElementById('jobs-categories');
if(categorySelect){
    let settings = {};
    new TomSelect(categorySelect,settings);
}
const locationSelect = document.getElementById('job-lcations');
if(locationSelect){
    let settings = {};
    new TomSelect(locationSelect,settings);
}