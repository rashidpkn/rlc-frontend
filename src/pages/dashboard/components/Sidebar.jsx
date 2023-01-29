import { Menu } from "@mui/icons-material"


function Sidebar({ children }) {
  return (
    <div className="h-full w-20 lg:w-[20%] border-r shadow-xl space-y-5">
      <div className="hidden lg:flex justify-between items-center h-20 p-[5%] shadow-md">
        <img src="/images/common/logo-rounded.png" className='h-12 w-12' alt="" />
        <h2 className="text-black text-lg font-medium">Red Light Club</h2>
        <Menu />
      </div>
      <div className="flex justify-center items-center lg:hidden px-[10%] py-[5%] h-20">
        <Menu fontSize="large" />
      </div>
      <h6 className="ml-5 font-light text-sm hidden lg:block">MAIN MENU</h6>
      {children}
    </div>
  )
}

export default Sidebar