import Head from "next/head"

export const HeadInfo = ({
    title="Demo title",
    description="Demo description",
}) => {
    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={description} />
            
            <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
