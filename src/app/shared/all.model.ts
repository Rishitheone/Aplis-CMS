export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    age: string;
    exp: string;
    jwtToken: string;
    password: string;
}

export interface RootObject {
    status: string;
    user: User;
}

// export interface Datum {
//     id: number;
//     parent_category_id?: any;
//     name: string;
//     type: string;
//     description: string;
//     tags: string;
//     status: string;
//     published_at: string;
//     created_at: string;
//     updated_at: string;
// }

// export interface CategoryObject {
//     status: number;
//     data: Datum[];
// }

export interface savCategoryObject {
    name: string;
    tags: string[];
    description: string;
    status: string;
    type: string;
}


// export interface category {
//     parent_category_id:number;
//     name: string;
//     tags:string;
//     description:string;
//     status:string;
//     type:string,
//     children?: category[];
//   }
//   export interface category{
//     name: string;
//     tags:string;
//     description:string;
//     status:string;
//     type:string;
//     parent_category_id:number;
//   }

export interface TreeNode {
    data?: any;
    children?: TreeNode[];
    leaf?: boolean;
    expanded?: boolean;
}
export interface DropUser{
    value:string;
    viewValue:string;
} 