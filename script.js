let ul = document.getElementById("myUL");
ul.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle('checked');
    }
});

const add = () =>{
    let text=document.getElementById('text').value;
    let li = document.createElement('li');
    let t=document.createTextNode(text);
    li.appendChild(t);
    if(text!==''){
        document.getElementById('myUL').appendChild(li);
        document.getElementById('text').value=" ";
    }else{
        alert("Please enter Something");
    }
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    let close = document.querySelectorAll('.close');
    for(let i=0;i<close.length;i++){
        close[i].onclick= function(){
            let div = close[i].parentElement;
            div.style.display="none";
        }
    }
}