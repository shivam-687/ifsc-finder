import slugify from "slugify";

export function isEqual(str1: string, str2: string){
    // const u_str1 = str1.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    // const u_str2 = str2.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    const u_str1 = slugify(str1.toLowerCase());
    const u_str2 = slugify(str2.toLowerCase());

    // console.log("isEqual", str1, str2, u_str1, u_str2)
    return u_str1 === u_str2;
}