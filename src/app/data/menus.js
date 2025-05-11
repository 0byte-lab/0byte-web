import { IconBrandDiscord, IconBrandGithub, IconBrandX } from "@tabler/icons-react";

export const menus = {
    header: [
        { name: "About", href: "/about" },
        { name: "SDK", href: "/sdk" },
        { name: "Docs", href: "/docs", disabled: true },
        // { name: "Blog", href: "/blog", disabled: true },
        { name: "Verify", href: "/verify", disabled: true },
    ],
    footer: [
        {
            title: "Product",
            items: [
                { name: "Verify", link: "/verify", disabled: true },
                { name: "SDK", link: "/sdk" },
                { name: "Docs", link: "/docs", disabled: true },
            ],
        },
        {
            title: "Resources",
            items: [
                { name: "About", link: "/about" },
                { name: "FAQ", link: "#faq" },
                // { name: "Blog", link: "/blog" },
            ],
        },
    ],
    social: [
        { name: "Github", link: "https://github.com/0byte-lab", Icon: IconBrandGithub },
        { name: "X", link: "https://x.com/0byteHQ", Icon: IconBrandX },
        { name: "Discord", link: "#", Icon: IconBrandDiscord },
    ]
};