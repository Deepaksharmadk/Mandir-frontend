import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './component/Layout/Layout'
import { SignupForm } from './component/Auth/Signup'
import { CarouselDemo } from './component/Carousel/CarouselComponent'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route path="/about" element={<p>About</p>} />
                        <Route path="/gallery" element={<CarouselDemo />} />
                        <Route path="/login" element={<SignupForm />} />


                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
