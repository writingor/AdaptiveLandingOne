//@prepros-append script.js



function imageAsBackground()
{
    $.each($(".imageAsBackground"), function(index, val)
    {
        if ($(this).find("img").length>0)
        {
            $(this).css("background-image", 'url("'+$(this).find("img").attr("src")+'")');
        }
    });
}
imageAsBackground();
