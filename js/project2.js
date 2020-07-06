function loadjson(file,callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
    }
    };
    xhr.send(null);
    }
    
    loadjson("project2.json",function(text){
    var data = JSON.parse(text); // serialised data
    console.log(data);
    basic(data.details1);
    basic2(data.details2);
    })
    
    var child1= document.querySelector(".child1");
    function basic(det){
    
     var image = document.createElement("img");
     image.src="image/toff.svg";
     child1.appendChild(image);
     
     var name=document.createElement("h4");
     name.textContent=det.name;
     child1.appendChild(name);
    
    
     var email = document.createElement("a");
     email.href = "mailto:nav@gmail.com",
     email.textContent=det.email;
     child1.appendChild(email);
    
     var number = document.createElement("h4");
     number.textContent=det.number;
     child1.appendChild(number)

     var static = document.createElement("a");
     static.href="pluto.html";
     static.innerHTML="static";
     child1.appendChild(static)

    }
    var child2= document.querySelector(".child2");
    function basic2(det){
    
     var image = document.createElement("img");
     image.src="image/toff.svg";
     child2.appendChild(image);
     
     var name=document.createElement("h4");
     name.textContent=det.name;
     child2.appendChild(name);
    
    
     var email = document.createElement("a");
     email.href = "mailto:nav@gmail.com",
     email.textContent=det.email;
     child2.appendChild(email);
    
     var number = document.createElement("h4");
     number.textContent=det.number;
     child2.appendChild(number);

     var dynamic = document.createElement("a");
     dynamic.href="index.html";
     dynamic.innerHTML="dynamic";
     child2.appendChild(dynamic)
    }