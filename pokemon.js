


        var response=fetch("https://pokeapi.co/api/v2/pokemon/");
        
        response.then((data)=>{
        data.json().then((data1)=>{
        var list=data1.results;
        showList_API(list)
        })
    })
   

    function showList_API(list)
    {
        close()
        var cart=[]
        list.forEach((pokemon,index) => {
            var row=document.createElement("tr");

            var number=document.createElement("td");
            number.innerText=index+1;
            

            var name=document.createElement("td");
            name.innerText=pokemon.name;

            cart.push(pokemon.name)
            list.push(pokemon.name);

            row.append(number,name)

            document.querySelector("#list").append(row)
        });

        localStorage.setItem("pokemon_list",cart)
    }
    
   


    //  Second Part


    document.querySelector("#search").addEventListener("search",function(){
        show()
        var find=document.querySelector("#search").value;

        results(find)
    })

    function results(find){

        var url=fetch(`https://pokeapi.co/api/v2/pokemon/${find}/`);
        
        
        var box=document.createElement("div");

        url.then((data)=>{
            
            data.json().then((data1)=>{
                var id=document.createElement("p");
                id.innerText="id : "+data1.id;

                var name=document.createElement("p");
                name.innerText="Name : "+data1.forms[0].name;
                
                
                var height=document.createElement("p");
                height.innerText="height : "+data1.height;
                
                var weight=document.createElement("p");
                weight.innerText="weight : "+data1.weight;
                
                var ability_str="";
                data1.abilities.forEach((ability)=>{

                    ability_str=ability_str+(ability.ability.name)+", "
                       

                })
                
                
                var abilities=document.createElement("p");
                abilities.innerText="Abilities : "+ability_str;
                
                
                var moves_str="";
                data1.moves.forEach((move)=>{

                    moves_str=moves_str+(move.move.name)+", "
                       

                })

                var moves=document.createElement("p");
                moves.innerText="Moves : "+moves_str;


                // bulbasaur
                box.append(id,name,height,weight,abilities,moves)

                document.querySelector("#container").append(box);
            }).catch(()=>{
                var find="bulbasaur";
                var url=fetch(`https://pokeapi.co/api/v2/pokemon/${find}/`);
            
                var box=document.createElement("div");
                
                data.json().then((data1)=>{
                    
                    var id=document.createElement("p");
                    id.innerText="id : "+data1.id;
            
                    var name=document.createElement("p");
                    name.innerText="Name : "+data1.forms[0].name;
                    
                    
                    var height=document.createElement("p");
                    height.innerText="height : "+data1.height;
                    
                    var weight=document.createElement("p");
                    weight.innerText="weight : "+data1.weight;
                    
                    var ability_str="";
                    data1.abilities.forEach((ability)=>{
            
                        ability_str=ability_str+(ability.ability.name)+", "
                           
            
                    })
                    
                    
                    var abilities=document.createElement("p");
                    abilities.innerText="Abilities : "+ability_str;
                    
                    
                    var moves_str="";
                    data1.moves.forEach((move)=>{
            
                        moves_str=moves_str+(move.move.name)+", "
                           
            
                    })
            
                    var moves=document.createElement("p");
                    moves.innerText="Moves : "+moves_str;
            
            
                    // bulbasaur
                    box.append(id,name,height,weight,abilities,moves)
            
                    document.querySelector("#container").append(box);
            })
            })
        })
        

        
    }


    
function show(){
    document.querySelector("#container").style.display="block"
    document.querySelector("table").style.display="none"
}
function close(){
    document.querySelector("#container").style.display="none"
}