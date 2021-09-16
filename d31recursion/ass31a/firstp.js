//let arr= ["Abe", "Homer", "Bart", "Lisa", "Maggie"];
List={name:"Abe",
        
next={name:"Homer",
    
next={name:"Bart",
    
next={name:"Lisa",
    
next={name:"Maggie",
next:null,

    
}
}
}
}
};
function listname(list) {

    if (list.next) {
        listname(list.next);
    }
  
    alert(list.value);
  }
  
  console.log(listname(List));