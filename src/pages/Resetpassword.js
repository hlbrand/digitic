import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Resetpassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />

            <Container class1="Signup-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center">Reset Password</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <CustomInput type="password" name="password" placeholder="Password" />
                                <CustomInput ype="password" name="confpassword" placeholder="Confirm Password" />

                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button">Ok</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Resetpassword;
