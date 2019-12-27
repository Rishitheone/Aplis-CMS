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


export interface savCategoryObject {
    name: string;
    tags: string[];
    description: string;
    status: string;
    type: string;
}

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

export interface saveSeries{
    series_code:string;
    title:string;
    description:string;
    status:string;
} 

export interface DatumSeries {
    id: number;
    title: string;
    series_code: string;
    description: string;
    status: string;
    published_at: string;
    created_at: string;
    updated_at: string;
}

export interface allSeries {
    status: number;
    data: DatumSeries[];
}

