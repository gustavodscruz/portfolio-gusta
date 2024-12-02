export type Project = {
    proj_id: number;
    proj_name: string;
    proj_desc: string;
    proj_image_src?: string;
    proj_image_url?: string;
    proj_link_github?: string;
    proj_link_demo?: string;
}

export type Certificate = {
    cert_id: number;
    cert_name: string;
    cert_desc: string;
    cert_image_src?: string;
    cert_image_url?: string;
    cert_link?: string;
}