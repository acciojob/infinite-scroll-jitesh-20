const list = document.getElementById('infi-list');

function addItems() {
    for (let i = 0; i < 2; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(li);
    }
}

for (let i = 0; i < 10; i++) {
    addItems();
}

document.querySelector('.container').addEventListener('scroll', function() {
    const container = this;
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        addItems();  
    }
});
