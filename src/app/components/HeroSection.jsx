"use client"
import React from "react";
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link"

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const HeroSection = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <section className="lg:py-16">
            <div className=" grid grid-cols-1 sm:grid-cols-12">
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl
             font-extrabold">
                        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hi I am{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Hang Pan',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'Full-Stack Developer',
                                1000,
                                'exprience in Java Python Node.js',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className=" text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
                        Teamwork, Sharing, Problem-solving, Enthusiastic, Communication, Love coding
                    </p>
                    <div>
                        <button onClick={handleClickOpen} className=" px-6 py-3 rounded-full w-full sm:w-fit mr-4 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-400">
                            Hire Me
                        </button>
                        <Link href="FullStack-CV-HangPan.pdf"> 
                            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover: bg-slate-800 text-white border border-white mt-3">
                                <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    Download CV
                                </span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className=" col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className=" rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/imgs/avatar.png" alt="my avatar" width={350} height={350} />
                    </div>
                </motion.div>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Please contact me"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" color="primary">
                        Email: <a href="mailto: Russell1997100188@gmail.com"><i>Russell1997100188@gmail.com</i></a>
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-slide-description" color="primary">
                        Phone: <a href="tel: 0478223484"><i>+61 0478223484</i></a>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default HeroSection;
