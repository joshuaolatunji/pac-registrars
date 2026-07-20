export interface NavItem {
    title: string;
    href?: string;
    dropdown?: DropdownItem[];
    isCta?: boolean;
    triggerStyle?: "portallogin";
    icon?: string;
}

export interface DropdownItem {
    title: string;
    href: string;
}

export const navItems: NavItem[] = [
    {
        title: "About Us",
        dropdown: [

            {
                title:  "Overview",
                href: "#",
                // icon:
            },
            {
                title:  "Leadership",
                href: "#",
                // icon:
            },
            {
                title:  "Management",
                href: "#",
                // icon:
            },
            {
                title:   "Clients",
                href: "#",
                // icon:
            }, 
           
        ],
    },

    {
        title: "Services",
        dropdown: [

             {
                title: "Securities Register Management",
                href: "#",
                // icon:
            },
            {
                title: "Document Management",
                href: "#",
                // icon:
            },
            {
                title: "Company Secretarial",
                href: "#",
                // icon:
            },
            {
                title: "Probate/ Transmission",
                href: "#",
                // icon:
            }, 
            {
                title: "KYC Services",
                href: "#",
                // icon:
            }, 
            {
                title: "Web Registry",
                href: "#",
                // icon:
            }, 
            {
                title: "Electronic Repository System",
                href: "#",
                // icon:
            },     
           
        ],
    },

    {
        title: "Product",
        dropdown: [

            {
                title: "ProptyPlus",
                href: "#",
                // icon:
            }
            
        ],
    },

    {
        title: "Resources",
        dropdown: [

             {
                title: "Company's Annual Report",
                href: "#",
                // icon:
            },
            {
                title: "Forms",
                href: "#",
                // icon:
            },
            {
                title: "FAQs",
                href: "#",
                // icon:
            },
            {
                title: "Media",
                href: "#",
                // icon:
            }, 
            
        ],
    },

    {
        title:"Contact Us",
        href: "#",
    },

    {
        title:"EDMMS",
        href: "#",
        isCta: true,
    },

    {
        title: "PACR Portal Login",
        isCta: true,
        triggerStyle:"portallogin",
        dropdown: [

             {
                title: "Shareholders",
                href: "#",
                // icon:
            },
            {
                title: "Brokers",
                href: "#",
                // icon:
            },
            {
                title: "Clients",
                href: "#",
                // icon:
            },
            {
                title: "Fund Manager API",
                href: "#",
                // icon:
            }, 
        ]
    },

]
