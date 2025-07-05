import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './component/Layout/Layout'
import { CarouselDemo } from './component/Carousel/CarouselComponent'
import { AuthenticationForm } from './component/Auth/GooogleLoginwith'
import { useGetAllImagesQuery } from './store/api/imageApi'
import { Loader } from '@mantine/core'

function App() {
    const { isLoading } = useGetAllImagesQuery();
    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loader color="orange" size="lg" type="bars" />
        </div>
    }


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
