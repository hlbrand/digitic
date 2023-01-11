import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className="d-flex align-items-center gap-10">
                                <HiOutlineArrowLeft className="fs-5" />
                                &nbsp;Go back to Blogs
                            </Link>
                            <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                            <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laudantium similique
                                totam, consequuntur vero suscipit hic in ea quod, architecto sint cum? Nobis sequi sit
                                saepe maiores perferendis quis, mollitia ad obcaecati iusto veritatis facere, asperiores
                                aliquid, at ipsam! Dicta sint odio autem neque quasi repellat suscipit voluptate, est
                                deleniti!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleBlog;
