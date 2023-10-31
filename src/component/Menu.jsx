const Menu=({setMenuName})=>{
    return  <section class="aside-menu">
    <button onClick={()=>{
     setMenuName('island')
    }}>Island</button>
    <button onClick={()=>{
     setMenuName('spring')
    }}>Spring</button>
    <button onClick={()=>{
     setMenuName('summer')
    }}>Summer</button>
    <button onClick={()=>{
     setMenuName('autumn')
    }}>Autumn</button>
    <button onClick={()=>{
     setMenuName('winter')
    }}>Winter</button> 
 </section>
}

export default Menu;