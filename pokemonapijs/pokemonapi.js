
async function fetchdata(){
    try{
        const pokename=document.getElementById("textbo").value.toLowerCase();

        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        if(!response.ok){
            throw new Error("invalid pokemon");
                 
        }
    
            const data=await response.json();
            const imgsrc=data.sprites.front_default;
            document.getElementById("pokemonsprite").src=imgsrc;
            document.getElementById("pokemonsprite").style.display="flex";
            document.getElementById("errorr").textContent="";
                    
    }    
    catch(error){
        document.getElementById("errorr").textContent=error.message;
         document.getElementById("pokemonsprite").style.display="none";
    }
}