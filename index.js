var addInput=document.querySelector('.addInput');
var searchInput=document.querySelector('.search');
var box=document.querySelector('#box3');
var idx=0;
addInput.addEventListener('keypress',addItem);
function addItem(e){
    
    if(e.key=='Enter'){
        showNotEmpty();
        // console.log("Item added");
        
        //Create an list item
        var item=document.createElement('div');
        item.className="item";

        //Creating child elements
        var paragraphItem=document.createElement('p');
        var buttonItem=document.createElement('button');
        buttonItem.className="button is-larger is-danger deleted";
        buttonItem.id=idx.toString();
        var iconitem=document.createElement('i');
        iconitem.className="fa fa-window-close ";
        iconitem.setAttribute('aria-hidden',true);
        buttonItem.appendChild(iconitem);
        


        //Add text to paragraph
        paragraphItem.textContent=addInput.value;
        
        //Connect and append
        item.appendChild(paragraphItem);
        item.appendChild(buttonItem);
        box.appendChild(item);

        idx+=1;
       
    }
    if(buttonItem!=undefined){
        
        buttonItem.addEventListener('click',deleteItem);

    }




    
}
function deleteItem(e){
    
    this.parentNode.remove();
    

    

}

searchInput.addEventListener('keypress',searchItems);
var searchBox=document.getElementById('search');
function searchItems(e){
    
    searchBox.className="control is-loading";
    if(e.key=="Enter"){
        var searchInputValue=this.value;
        searchBox.className="control";
        if(box.children.length==0){
            showEmpty();
        }
        else{
            showNotEmpty();
            var all=box.children;
            for(var x=0;x<box.children.length;x++){
                var itemSelect=all[x].firstChild.textContent;
                if(itemSelect.includes(searchInputValue))   
                {
                    
                    all[x].style.opacity=1;
                    all[x].style.visibility="visible";


                }  
                else{
                    all[x].style.opacity=0;
                    all[x].style.visibility="hidden";


                }
              
            }
        }
    }

}



searchInput.addEventListener('blur',blurIt);
function blurIt(e){
    searchBox.className="control";
}

if(box.children.length==0){
    showEmpty();
}
else{
    showNotEmpty();
}

var elmt;

function showEmpty() {


   elmt=document.createElement('p');
    elmt.textContent="No Items in List";
    box.appendChild(elmt);


}

function  showNotEmpty()
{

    elmt.style.display="none";


}