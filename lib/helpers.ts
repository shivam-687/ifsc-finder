import slugify from "slugify";

export function to_link(str: string){
    return slugify(str.toLowerCase(), );
}

export function to_slug(str: string){
    return slugify(str, {lower: true})
}

export function slug_to_normal(str: string){
    return str.replaceAll('-', ' ')
}