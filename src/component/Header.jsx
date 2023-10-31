const Header=({open, setOpen})=>{
    return <header>
    <a>
        <div className="logo">Diet Plan</div>
    </a>
    <div className="menu-logo" onClick={()=>{
      setOpen(!open)
    }}></div> 
</header>

}

export default Header;