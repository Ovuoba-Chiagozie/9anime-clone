
let Language = (prop) => {

    return (

        <div>
         <div onClick={prop.toggle} className={`lang ${prop.lang ? 'dark' : ''}`}>
          <span className="english--switch">EN</span>
          <span className="japanese--switch">JP</span>
          </div>
         </div>

    )

}

export default Language