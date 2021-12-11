import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllPost from './components/AllPost/AllPost';
import PostPage from './components/PostPage/PostPage';
import AddPost from './components/AddPost/AddPost';
import {Outlet, Route, Routes} from "react-router-dom";
import Error from './components/404/Error';
import Login from './components/Login/Login';
import './App.css';
import OnePostPage from "./components/OnePostPage/OnePostPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<AllPost/>}/>
                <Route path={'post'} element={<OnePostPage/>}/>
                <Route path={'add'} element={<AddPost/>}/>
            </Route>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'*'} element={<Error/>}/>
        </Routes>
    );
}

function Layout() {
    return (
        <div className="App">
            <Header/>
            <main className="main">
               <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;


