import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { motion } from 'framer-motion';

const InstagramPost = ({ instagramURLS }) => {
    return (
        <section className='flex flex-col lg:flex-row gap-4 w-11/12 mx-auto p-4 justify-center'>
            {instagramURLS.map((post, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    viewport={{ once: true }}
                    className='flex-1'
                >
                    <InstagramEmbed url={post} key={index} />
                </motion.div>
            ))}
        </section>
    );
};

export default InstagramPost;
