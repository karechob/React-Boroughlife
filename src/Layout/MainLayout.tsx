import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'

function MainLayout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <NavBar></NavBar>
        <div>{children}</div>
        <FooterComponent></FooterComponent>
    </div>
  )
}

export default MainLayout 