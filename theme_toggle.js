const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function(){
    console.log('button clicked');
    console.log("Current classes:", document.body.classList);
    if(document.body.classList.contains('dark-theme')){
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else{
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
    console.log('current classes:', document.body.classList);
});