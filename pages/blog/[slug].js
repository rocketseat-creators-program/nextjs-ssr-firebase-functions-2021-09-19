import React from 'react';

const BlogPage = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.content}</h4>
        </div>
    )
}

export async function getServerSideProps(contex){
    const { slug } = contex.params;
    const response = await fetch(`http://localhost:3000/api/blog/${slug}`).then(res => res.json());
    return {
        props: response
    }
}

export default BlogPage;
