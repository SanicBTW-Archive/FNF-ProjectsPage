//https://api.github.com/users/SanicBTW/repos
document.addEventListener('DOMContentLoaded', () => 
{
    var startTime = performance.now();
    
    axios.get("https://api.github.com/users/SanicBTW/repos").
    then((resp) => 
    {
        for(var i in resp.data)
        {
            if(resp.data[i].language == "Haxe")
            {
                console.log(resp.data[i]);

                var entry = document.createElement('button');
                entry.innerText = resp.data[i].name;
                if(resp.data[i].archived){ entry.classList.add("archived"); }
                document.getElementById('reposhit').appendChild(entry);

                entry.addEventListener('click', (ev) => 
                {
                    console.log(ev.target);
                    changeContent(ev.target.innerText);
                });
            }
        }
    });

    var endTime = performance.now();
    
    console.log(startTime - endTime);
});