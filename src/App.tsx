import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './component/Layout/Layout'
import { CarouselDemo } from './component/Carousel/CarouselComponent'
import { AuthenticationForm } from './component/Auth/GooogleLoginwith'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route path="/about" element={<p>About</p>} />
                        <Route path="/login" element={<AuthenticationForm />} />
                        <Route path="/gallery" element={<CarouselDemo />} />
                        {/* <Route path="/login" element={<SignupForm />} /> */}


                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
