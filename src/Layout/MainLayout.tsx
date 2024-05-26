import NavBar from '../components/NavBar'

function MainLayout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <NavBar></NavBar>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout 