import React from "react";
import { Container, Logo, Logout } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  
  const userData = useSelector(state => state.auth.userData)
  const name = userData ? userData.name : 'Guest'

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    // <header className="py-3 shadow bg-gray-500">
    //   <Container>
    //     <nav className="flex">
    //       <div className="mr-4">
    //         <Link to='/'>
    //           <Logo width='70px'/>
    //         </Link>
    //       </div>

    //       <ul className="flex ml-auto">
    //         {
    //           navItems.map(item => 
    //             item.active ? (
    //               <li key={item.name}>
    //                 <button 
    //                   onClick={() => navigate(item.slug)} 
    //                   className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    //                 >
    //                   {item.name}
    //                 </button>
    //               </li>
    //             ) : null
    //           )
    //         }

    //         {
    //           authStatus && (
    //             <li>
    //               <Logout />
    //             </li>
    //           )
    //         }
    //       </ul>
    //     </nav>
    //   </Container>
    // </header>

    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="h-50 grid grid-cols-1 sm:grid-cols-3">
          <div className="flex items-center sm:pl-4 text-center pl-10">
            Welcome {name}
          </div>
          
          <div className="flex items-center justify-center">
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <ul className="flex flex-wrap ml-auto">
              {
                navItems.map(item => 
                  item.active ? (
                    <li key={item.name}>
                      <button 
                        onClick={() => navigate(item.slug)} 
                        className="inline-block px-5 py-2 duration-200 hover:bg-blue-100 rounded-full whitespace-nowrap"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )
              }

              {
                authStatus && (
                  <li>
                    <Logout />
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
