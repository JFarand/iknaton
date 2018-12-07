import React from "react"
import { Link } from "gatsby"
import { ReactComponent as Logo } from "../svg/horus_solo-greenery.svg"

class Header extends React.Component {
   render(){
      return (
         <div css={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `center`,
            minHeight: `60px`,
         }}>
            <div className="LogoWrapper" css={{
               maxWidth: `60`,
               minWidth: `60`,
            }}>
               
               <Link
                  css={{
                     color: `rgb(224,203,144)`,
                     ":hover": {
                     color: `rgb(0,255,0)`,
                     textDecoration: `none`,
                     },
                  }}
                  to="/"
               >
                  <Logo />
               </Link>
               
            </div>
         </div>
      )
   }
}

export default Header