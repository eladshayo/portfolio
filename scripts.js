const page_content_wraper = document.querySelector('.page_content_wraper');
const side_nav_bar = document.querySelector('.side_nav_bar');
const theme_side_nav_bar = document.querySelector('.theme_side_nav_bar');
const theme_pointer = document.querySelector('.theme_pointer');
const system_theme = document.querySelector('.system_theme');
const dark_theme = document.querySelector('.dark_theme');
const light_theme = document.querySelector('.light_theme');
const links = [
  'https://eladshayo.github.io/gallery/'
  ,'https://eladshayo.github.io/youtube/'
  ,'https://eladshayo.github.io/music/'
  ,'https://eladshayo.github.io/wiki/'
  ,'https://eladshayo.github.io/sell-house/'
  ,'https://eladshayo.github.io/protpholio/'
];
const page_content = page_content_wraper.children[1];
f();
function f() {
  console.log('Setting up event listeners');
  // Iterate over child elements of page_content
  Array.from(page_content.children).forEach((element, index) => {
    console.log(`Adding click listener for element ${index}`);

    // Add click event listener to each element
    element.addEventListener('click', () => {
      // Open the corresponding link from links array in a new tab
      window.open(links[index], '_blank');
      console.log(`Opened link ${index} in a new tab`);
    });
  });
}

let current_theme = 0;

page_content_wraper.style.minWidth = `${window.innerWidth-100}px`;

side_nav_bar.addEventListener('mouseenter', e => {
  side_nav_bar.classList.add('side_nav-open');
  console.log('enter');
});
side_nav_bar.addEventListener('mouseleave', e => {
  side_nav_bar.classList.remove('side_nav-open');
  console.log('leave');
});

system_theme.addEventListener('click',e => {if(current_theme != 0){current_theme = 0;update_theme_pointer(0);}});
dark_theme.addEventListener('click',e => {if(current_theme != 1){current_theme = 1;update_theme_pointer(50);}});
light_theme.addEventListener('click',e => {if(current_theme != 2){current_theme = 2;update_theme_pointer(100);}});


function update_theme_pointer(v){
 console.log(`${v}%`);
 theme_pointer.style.left = `${v}%`;
 theme_pointer.style.transform = `translateX(${-v}%)`;
}