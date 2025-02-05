ta = document.getElementById('ta');
ih = ta.height
ta.addEventListener('keydown', function(event){
    if( event.shiftKey && event.keyCode === 13){
        ta.style.height = (ta.scrollHeight) + 'px';  
    }if(event.keyCode === 13 && !event.shiftKey){
        ta.style.height = '2.5rem'
        addchat(event.target.value);
        gendata(event.target.value).then((data) => {
            adddata(data);
        })
        ta.value = null;
    }
});

async function gendata (prompt) {

    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    return data.response;
} 

function addchat(mes){
    tag = document.createElement('p');
    tag.setAttribute('class','right text-[#999594] p-3 my-3 max-w-1/2 rounded-xl bg-[#333333]');
    tag.innerText = mes;
    document.getElementById('msgbox').prepend(tag);
}


function adddata(mes){
    tag = document.createElement('p');
    tag.setAttribute('class','left text-[#787473] p-3 my-3 w-1/2 rounded-xl bg-[#333333]');
    tag.innerText = mes;
    document.getElementById('msgbox').prepend(tag);
}
