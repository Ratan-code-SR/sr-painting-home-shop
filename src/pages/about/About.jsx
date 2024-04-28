import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "About-HomeScape"
    }, [])
    return (
        <section>
            <section className="md:flex  justify-between  my-10 gap-5 grid grid-cols-1">

                <img src="https://i.ibb.co/k0kyw4c/images-13.jpg" className="md:w-1/2 w-full" alt="" />

                <div className="md:w-2/4 lg:w-2/4">
                    <div className="py-2 md:text-start text-center ">
                        <h1 className="text-2xl font-bold"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >About Us </h1>
                        <p className="border-2 w-20 border-orange-500  md:mx-0 mx-auto"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"></p>
                    </div>

                    <p>Welcome to SR Painting, where creativity meets canvas! At SR Painting, we're passionate about the transformative power of art. Our mission is to inspire and connect artists and art enthusiasts alike, fostering a vibrant community of creativity. With a dedication to quality, innovation, and expression, we offer a diverse range of painting supplies, tutorials, and inspiration to ignite your artistic journey. Join us as we celebrate the beauty of self-expression through the strokes of a brush at SR Painting.</p>
                </div>
            </section>
        </section>

    );
};

export default About;