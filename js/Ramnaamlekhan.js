
function getCount(text){
    return (text.match(/राम/g) || []).length;
}

function saveUser(){
    const username = document.getElementById('username').value;
    localStorage.setItem('ramUser', username);
    document.getElementById('savedUser').innerText = "Welcome " + username;
}

function updateStats(){
    const data = localStorage.getItem('ramNaamData') || '';
    const count = getCount(data);

    document.getElementById('totalCount').innerText = count;
    document.getElementById('malaCount').innerText = Math.floor(count / 108);

    const history = JSON.parse(localStorage.getItem('ramHistory') || '[]');
    const list = document.getElementById('historyList');

    if(list){
        list.innerHTML = '';
        history.slice(-10).reverse().forEach(item=>{
            const li = document.createElement('li');
            li.innerText = item;
            list.appendChild(li);
        });
    }
}

function saveRamNaam(){
    const val = document.getElementById('ramInput').value;

    localStorage.setItem('ramNaamData', val);

    let history = JSON.parse(localStorage.getItem('ramHistory') || '[]');
    history.push(new Date().toLocaleString() + " - Saved");
    localStorage.setItem('ramHistory', JSON.stringify(history));

    updateStats();
    alert('राम नाम सुरक्षित हो गया');
}

function clearRamNaam(){
    document.getElementById('ramInput').value = '';
    localStorage.removeItem('ramNaamData');
    updateStats();
}

window.onload = function(){
    const saved = localStorage.getItem('ramNaamData') || '';
    const user = localStorage.getItem('ramUser') || '';

    const input = document.getElementById('ramInput');
    if(input){
        input.value = saved;
    }

    const savedUser = document.getElementById('savedUser');
    if(savedUser && user){
        savedUser.innerText = "Welcome " + user;
    }

    const username = document.getElementById('username');
    if(username){
        username.value = user;
    }

    updateStats();
}
