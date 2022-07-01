import { Link, Outlet } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
export default function Index() {
    const location = useLocation()
    return <div className='w-screen h-screen font-mono bg-slate-400 overflow-hidden '>
        <div className="w-48 mt-10 mx-auto">
            <h1 className="text-2xl text-center font-bold">DEMO OF REACT</h1>
            <div className="mt-5 flex justify-between">
                <Link className="transition-all hover:underline" to="/">Home</Link>
                <Link className="transition-all hover:underline" to="/about">About</Link>
            </div>
            <div className="mt-10">
                <SwitchTransition>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="bounce">
                        <Outlet />
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    </div>

}