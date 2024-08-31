import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ServiceList from './ServiceLiist';
import ServiceListSingle from './ServiceListSingle';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import BlogList from './BlogList';
import BlogDetils from './BlogDetails';
import ContactUs from './ContactUs';
import GetFreeStimate from './GetFreeStimate';
import Whyus from './Whyus';
import Testimonial from './Testimonial';
import PageNotFound from './PageNotFound';

function FrontEnd(){
    return(
        <>
            <Header/>
            <Routes>            
                <Route path="/" exact element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<ServiceList />} />
                <Route path="/services/:id" element={<ServiceListSingle />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogDetils/>} />                
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/getestimate" element={<GetFreeStimate />} />
                <Route path="/whyus" element={<Whyus />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default FrontEnd;