import DocsClient from "./DocsClient";

export const metadata = {
    title: '0byte Documentation — SDK, Integration & Verification',
    description:
        'Explore 0byte’s documentation to integrate zero-knowledge proof embedding into your AI workflows. Learn how to use the SDK, verify media, and build trust directly into your content.',
};

const page = () => {
    return (
        <DocsClient />
    )
}

export default page