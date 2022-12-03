export function isEqual(str1: string, str2: string){
    const u_str1 = str1.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    const u_str2 = str2.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    return u_str1 === u_str2;
}