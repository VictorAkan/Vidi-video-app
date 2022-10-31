import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Loader } from "../components/Loader/Loader";

export const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            {/* <div>
                { loading ? (<Loader />) : (<VideoList videos={videos} />)}
            </div> */}
        </main>
    )
}