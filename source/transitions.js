function doTransition(whileTransitioning = null)
{
    if(whileTransitioning == null){ whileTransitioning = function() { } }
    document.getElementById('blackTransition').style.top = "0px";
    var timer = setTimeout(() => {
        document.getElementById('blackTransition').style.top = "-2000px";
        whileTransitioning();
        clearTimeout(timer);
    }, 1500);
}

function changeContent(changeTo)
{
    doTransition(
    function()
    {
        switch(changeTo)
        {
            default:
                break;
        }
    });
}

function backChange(canBack = false, func = null, shouldHideAfter = true)
{
    if(func != null && canBack)
    {
        document.getElementById('backbtn').style.display = "block";
        document.getElementById('backbtn').style.cursor = "pointer";
        document.getElementById('backbtn').onclick = function()
        { 
            func();
            if(shouldHideAfter)
            {
                document.getElementById('backbtn').style.cursor = "default";
                document.getElementById('backbtn').style.display = "none";
            }
        };
    }
    if(!canBack)
    {
        document.getElementById('backbtn').style.cursor = "default";
        document.getElementById('backbtn').style.display = "none";
    }
}