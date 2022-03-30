import { Props } from "next/script"


const Layout = ({ children }: Props) => {
    return (
        <div className="container mx-auto">
        <main>{children}</main>
        </div>
    )
}

export default Layout