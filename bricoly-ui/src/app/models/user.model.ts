export class User {
    constructor(
        public _id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public phone: number,
        public profilePictureUrl: string
    ) {}
}
