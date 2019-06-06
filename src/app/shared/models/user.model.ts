export interface UserDetails {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    addressId: any;
    phone: string;
    profileImage: string;
    roleId: number;
    exp: number;
    iat: number;
  subscribe(arg0: (data: any) => any);
}

export interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    roleId: number;
}
