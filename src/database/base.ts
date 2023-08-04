interface IUsers {
    id: number;
    name: string;
    email: string;
    nickName: string;
    password: string;
    role: number;
}

interface IPosts {
    id: number;
    userNickName: string;
    userId: string;
    title: string;
    postContent: string;
    dateTime: string;
    ingredients: string;
}

export const myUsers: IUsers[] = []

export const myPosts: IPosts[] = []