let items = []

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storagekey = "items"

function renderItems(){
    itemsDiv.innerHTML = null;

    for(const [idx,item] of Object.entries(items)){
        
        const container = document.createElement("div")
        container.style.scrollMarginBottom = "10PX"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent= item

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () =>removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)
    }
    
}

function loadItems(){
    const oldItems = localStorage.getItem(storagekey)
    if(oldItems) items = JSON.parse(oldItems)
        renderItems()
}

function addItem(){
    const value = input.value
    if(!value){
        alert("you can not enter an empty value")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storagekey,stringItems)
}

function removeItem(idx){
    items.splice(idx,1)
    renderItems()
    saveItems()
}
