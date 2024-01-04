/* Add your code here. */
var slideindex=0;
showfunction();
function showfunction()
{
    var slides=document.getElementsByClassName("myslides");
    var i;
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideindex++;
    if(slideindex>slides.length)
    {
        slideindex=1;
    }
    slides[slideindex-1].style.display="block";
    setTimeout(showfunction,2500);
}
 